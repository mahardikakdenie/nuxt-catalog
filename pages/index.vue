<template>
	<div class="px-4 py-3 mt-4 md:px-10">
		<div v-if="loading" class="image-loader"></div>
		<div v-else>
			<!-- Banner and Carousel Section -->
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
				<div class="sm:col-span-2 p-4 rounded-lg cursor-pointer relative banner">
					<div class="absolute opacity-0 top-1/2 transform -translate-y-1/2 rounded-full chev-left">
						<div @click="previous" class="border-0">
							<img src="@/assets/image/chev-left.svg" class="image-loader w-8 h-8" alt="Previous" />
						</div>
					</div>
					<img :src="currentBanner.pic" class="rounded-lg w-full h-auto object-cover" alt="Banner Image" />
					<div class="absolute top-1/2 right-4 opacity-0 rounded-full chev-right">
						<div @click="next">
							<img src="@/assets/image/chev-right.svg" class="w-8 h-8" alt="Next" />
						</div>
					</div>
				</div>
				<!-- Thumbnails -->
				<div class="flex sm:block gap-2 sm:gap-0:">
					<div v-for="(child, index) in currentBanner.child" :key="index" class="p-0 sm:p-3 cursor-pointer">
						<img :src="child" class="rounded-lg w-full object-cover" alt="Thumbnail" />
					</div>
				</div>
			</div>
			<!-- Product List Section -->
			<div>
				<h2 class="mt-4 text-xl font-bold flex gap-4">
					List Product
					<div>
						<nuxt-link to="/product/explore" class="text-sm hover:underline hover:text-purple-500">
							<small>Explore More</small>
						</nuxt-link>
					</div>
				</h2>
				<div class="w-full overflow-x-scroll pb-6 pt-1" style="scrollbar-width: none;">
					<ul class="p-4 animate-carousel flex gap-4">
						<li
							v-for="(product, i) in dataProducts"
							:key="i"
							class="relative w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex-none">
							<nuxt-link :to="`/product/${product.id}`" class="block w-full h-48 sm:h-64 lg:h-72 relative">
								<div
									class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white dark:bg-black hover:border-blue-600 dark:border-neutral-800">
									<img :src="product.pictures[0]" class="h-full w-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-105" alt="Product Image" />
									<div class="absolute bottom-4 w-full flex justify-center">
										<div class="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
											<h3 class="mr-4 text-[10px] line-clamp-2 flex-grow pl-2">{{ product?.name }}</h3>
											<p class="flex-none rounded-full bg-blue-600 px-2 text-white text-[8px]"> Rp{{ product.price }}</p>
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
	pending: loading,
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
		isloading.value = loading.value;
	}
});
</script>

<style scoped>
.banner {
	&:hover {
		.chev-left,
		.chev-right {
			@apply opacity-100;
		}
	}
}

@keyframes marquee {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-100%);
	}
}

.animate-carousel {
	scrollbar-width: none;
	animation: marquee 60s linear infinite;
}
</style>
