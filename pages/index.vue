<template>
	<div class="px-10 py-3 mt-4">
		<div v-if="isloading" class="image-loader"></div>
		<div v-if="!isloading">
			<div class="grid grid-cols-3 gap-3">
			<div
				class="col-span-2 p-4 rounded-lg cursor-pointer relative banner">
				<div class="absolute opacity-0 top-[50%] rounded-full chev-left">
					<div class="border-0" @click="previous">
						<img src="@/assets/image/chev-left.svg" class="image-loader" width="40" alt="" />
					</div>
				</div>
				<img
					:src="currentBanner.pic"
					class="rounded-lg"
					alt="" />
				<div class="absolute top-[50%] rounded-full right-4 opacity-0 chev-right">
					<div @click="next">
						<img
							src="@/assets/image/chev-right.svg"
							width="40"
							alt="" 
						/>
					</div>
				</div>
			</div>
			<div>
				<div v-for="(child, index) in currentBanner.child" :key="index" class="p-3 cursor-pointer">
					<img
						:src="child"
						class="rounded-lg image-loader"
						alt="" />
				</div>
			</div>
		</div>

		<!--  -->
		<div>
			<div class="mt-4 font-bold">
				<span class="text-xl"> List Product </span>
			</div>
			<div class="w-full overflow-hidden pb-6 pt-1">
				<ul class="p-4 animate-carousel flex gap-4">
					<li
						v-for="(product, i) in dataProducts"
						:key="i"
						class="relative aspect-square w-1/6 max-w-[475px] flex-none">
						<nuxt-link :to="`/product/${product.id}`" class="w-[400px] h-[200px] relative">
							<div
								class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
								<img
									:src="product.pictures[0]"
									class="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105 image-loader"
									alt="" />
								<div
									class="absolute bottom-4 flex justify-center w-full">
									<div
										class="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
										<h3
											class="mr-4 text-[10px] line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
											{{ product?.name }}
										</h3>
										<p
											class="flex-none rounded-full text-[8px] bg-blue-600 px-2 text-white">
											$20.00<span
												class="ml-1 inline lg:inline"
												>USD</span
											>
										</p>
									</div>
								</div>
							</div>
						</nuxt-link>
					</li>
				</ul>
			</div>
		</div>
		</div>
	</div>
</template>

<script setup lang="ts">
interface ProductInterface {
	id: number,
	price: string;
	name: string;
	type: string;
	slug: string;
	variations?: {
		attributes: string[];
		prices: string[];
		multiple_variations: {
			enabled: boolean;
		};
	};
	pictures: string[];
}

interface Banner {
	pic: string;
	child: string[];
}

const banners = ref<Banner[]>([
	{
		pic: 'https://www.lelongindonesia.com/public/uploads/all/VW2i0KOkMa2ys1rNBft638v8zx3NxwJ6kRMa9vkW.jpg',
		child: [
			"https://www.lelongindonesia.com/public/uploads/all/VW2i0KOkMa2ys1rNBft638v8zx3NxwJ6kRMa9vkW.jpg",
			"https://www.lelongindonesia.com/public/uploads/all/VW2i0KOkMa2ys1rNBft638v8zx3NxwJ6kRMa9vkW.jpg"
		]
	},
	{
		pic: 'https://www.lelongindonesia.com/public/uploads/all/waI29mrz6wpvDwRQFP2IhH2UGERlWeLR4Kb9i0hu.jpg',
		child: [
			"https://www.lelongindonesia.com/public/uploads/all/waI29mrz6wpvDwRQFP2IhH2UGERlWeLR4Kb9i0hu.jpg",
			"https://www.lelongindonesia.com/public/uploads/all/waI29mrz6wpvDwRQFP2IhH2UGERlWeLR4Kb9i0hu.jpg"
		]
	},
	{
		pic: 'https://www.lelongindonesia.com/public/uploads/all/hqQijrPPrOeUO8hNd1H7NSrvcIGIEq4PsiKEjxVv.jpg',
		child: [
			"https://www.lelongindonesia.com/public/uploads/all/hqQijrPPrOeUO8hNd1H7NSrvcIGIEq4PsiKEjxVv.jpg",
			"https://www.lelongindonesia.com/public/uploads/all/hqQijrPPrOeUO8hNd1H7NSrvcIGIEq4PsiKEjxVv.jpg"
		]
	},
]);

const currentBanner = ref<Banner>(banners.value[0]);


const dataProducts = ref<ProductInterface[]>([]);

const indexBanner = ref<number>(0);
const next = () => {
	if ((banners.value.length - 1) !== indexBanner.value) {
		indexBanner.value++;
		currentBanner.value = banners.value[indexBanner.value];	
	}
};

const previous = () => {
	if (indexBanner.value > 0) {
		indexBanner.value--;
	}
	currentBanner.value = banners.value[indexBanner.value];
};

const {
	data: products,
	pending,
	error,
} = await useFetch(
	'https://my-json-server.typicode.com/mahardikakdenie/db-catalog-json/products'
);


const isloading = ref<boolean>(true);
watchEffect(() => {
	isloading.value = true;
	if (products.value && Array.isArray(products.value)) {
		// Tripling the data for demo purpose
		dataProducts.value = [
			...products.value,
			...products.value,
			...products.value,
		];
		isloading.value = false;
	}
});
</script>

<style lang="scss" scoped>

.banner {
	&:hover {
		.chev-left {
			@apply opacity-100;
		}

		.chev-right {
			@apply opacity-100;
		}	
	}
}

.image-loader {
	position: relative; // Ensure the loader is positioned correctly inside the container.

	&::after {
		content: '';
		display: block;
		width: 40px;
		height: 40px;
		border: 4px solid rgba(229, 16, 16, 0.1); // Light border color
		border-top-color: #3498db; // Color for the spinning part
		border-radius: 50%; // Make it a circle
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%); // Center the loader
		animation: spin 1s linear infinite; // Infinite spin animation
	}
}

// Keyframes for the spinning effect
@keyframes spin {
	0% {
		transform: translate(-50%, -50%) rotate(0deg); // Start at 0 degrees
	}
	100% {
		transform: translate(-50%, -50%) rotate(360deg); // Rotate a full circle
	}
}

/* Create the marquee animation */
@keyframes marquee {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-100%);
	}
}

/* Apply the marquee animation to an element */
.animate-carousel {
	animation: marquee 60s linear infinite;
}
</style>
