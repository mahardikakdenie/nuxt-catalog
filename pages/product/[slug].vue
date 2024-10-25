<template>
	<div class="px-20 py-10 bg-gray-100 relative">
		<div class="p-7 bg-white rounded-lg">
			<div class="grid grid-cols-3">
				<div class="p-5 gap-3">
					<!-- <div class="col-span-1 ml-2">
					</div> -->
					<div class="">
						<div class="flex justify-center items-center">
							<img
								:src="dataProducts.pictures[0]"
								class="border rounded-md"
								alt="" />
						</div>
						<div class="relative w-full">
							<!-- Tombol geser ke kiri -->
							<button
								class="absolute left-0 z-10 top-6 rounded-full bg-gray-200 p-2 opacity-75" @click="slide(-1)">
								◀
							</button>
							<!-- Daftar gambar -->
							<ul
								class="flex gap-2 transition-transform duration-300 overflow-x-auto" style="scrollbar-width: none;" ref="pictureListContainer">
								<li
									v-for="(
										picture, i
									) in dataProducts.pictures"
									:key="i"
									class="sm:w-[80px] w-[100px] min-w-[80px]"
									ref="pictureListItem"
								>
									<img
										:src="picture"
										width="100%"
										class="rounded-lg border mt-2 hover:border-purple-600 cursor-pointer"
										:class="{
											'border-purple-500 border-2': i === indexActiveImage,
										}"
										alt="" />
								</li>
							</ul>
							<!-- Tombol geser ke kanan -->
							<button
								class="absolute right-0 top-6 z-10 bg-gray-200 p-2 rounded-full opacity-75"
								@click="slide(1)"
							>
								▶
							</button>
						</div>
					</div>
				</div>
				<div class="p-4">
					<div>
						<h3 class="font-bold">
							{{ dataProducts.name }}
						</h3>
						<div class="flex">
							<img
								v-for="i in 4"
								src="@/assets/image/star.svg"
								alt="" />
							<small>(4)</small>
						</div>
					</div>

					<hr class="mt-4" />

					<div class="py-4">
						<div>
							<span class="text-sm"> Pilih Variant </span>
						</div>
						<div class="mt-2 grid grid-cols-4 gap-2">
							<div
								class="border border-purple-500 p-1 bg-purple-100 text-purple-500 text-center rounded-xl">
								<span>Grade A</span>
							</div>
							<div
								class="border p-1 text-neutral-600 text-center rounded-xl hover:border-purple-500 hover:bg-purple-100 hover:text-purple-500 cursor-pointer">
								<span>Grade B</span>
							</div>
						</div>
					</div>

					<hr />

					<div class="py-4">
						<div>
							<span>Deskripsi</span>
						</div>
						<div>
							<span
								class="text-sm"
								v-html="dataProducts.description" />
							>
						</div>

						<div class="mt-3">
							<div class="flex gap-3">
								<div class="flex items-center">
									<span>Share</span>
								</div>
								<div>
									<img
										src="@/assets/image/linkedin.svg"
										width="30"
										alt="" />
								</div>
								<div>
									<img
										src="@/assets/image/github.svg"
										width="30"
										alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div class="border p-2 rounded-lg">
						<div class="p-4">
							<div>
								<span class="font-bold">Summary</span>
							</div>
							<hr class="my-2" />
							<div class="mt-5 flex justify-between">
								<div>
									<small>kuantitas</small>
								</div>
								<div class="flex items-center gap-3">
									<button @click="quantity--">-</button>
									<input
										:value="quantity"
										type="number"
										class="border rounded-lg text-center text-xs py-1 bg-gray-200"
										disabled />
									<button @click="quantity++">+</button>
								</div>
							</div>
							<div class="flex justify-between mt-2">
								<div>
									<small>Harga :</small>
								</div>
								<div>
									<small> Rp90000 </small>
								</div>
							</div>
							<hr class="mt-7">
							<div class="mt-7">
								<button
									class="border w-full py-2 rounded-lg bg-purple-600 text-white font-bold text-sm">
									Masukan Keranjang
								</button>
							</div>

							<div class="mt-7">
								<div class="flex justify-center w-full gap-5">
									<button class="flex gap-2">
										<img
											src="@/assets/image/chat.svg"
											width="20"
											alt="" />
										<small>Chat</small>
									</button>
									<button class="flex gap-2">
										<img
											src="@/assets/image/heart.svg"
											width="20"
											alt="" />
										<small>Wishlist</small>
									</button>
									<button class="flex gap-2">
										<img
											src="@/assets/image/share.svg"
											width="20"
											alt="" />
										<small>Share</small>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const quantity = ref<number>(0);
const route = useRoute();

interface ProductInterface {
	id?: number;
	price?: string;
	name?: string;
	type?: string;
	slug?: string;
	variations?: {
		attributes: string[];
		prices: string[];
		multiple_variations: {
			enabled: boolean;
		};
	};
	pictures?: string[];
}
const {
	data: products,
	pending,
	error,
} = await useFetch(
	`https://my-json-server.typicode.com/mahardikakdenie/db-catalog-json/products/${route.params.slug}`
);

const dataProducts = ref<ProductInterface | any>({});

const isloading = ref<boolean>(true);
watchEffect(() => {
	isloading.value = true;
	if (products.value) {
		// Tripling the data for demo purpose
		dataProducts.value = products.value;
		isloading.value = false;
	}
});

const currentPosition = ref(0); // Initial scroll position
const itemWidth = 80; // Width of each item in pixels
const maxPosition = ref(0); // Max scroll position

const pictureListContainer = ref<HTMLElement | null>(null);
const pictureListItem = ref<HTMLElement | any>(null);

// Calculate max scroll position when component is mounted
onMounted(() => {
	const containerWidth = 300; // Example container width, adjust as needed
	maxPosition.value = -(
		dataProducts.value.pictures.length * itemWidth -
		containerWidth
	);

	if (pictureListContainer.value) {
		// Access the element properties, e.g., scrollWidth
		console.log(pictureListContainer.value.scrollWidth);
  }
});

const indexActiveImage = ref<number>(0);
const slide = (increment: number) => {
	if (increment === 1 && (dataProducts.value.pictures?.length - 1) > indexActiveImage.value) {
		indexActiveImage.value++;
	} else if (increment === -1 && indexActiveImage.value > 0) {
		indexActiveImage.value--;
	}

	const elementContainer = pictureListContainer.value;
	if (pictureListItem.value) {
		const elementImage = pictureListItem.value[0]; // Now you can access `[0]` without error
		elementContainer?.scrollBy({
		left: (2 + elementImage?.offsetWidth) * increment,
			behavior: 'smooth',
		});
	}
};
</script>

<style lang="scss">
::-webkit-scrollbar {
	width: 0px !important;
	cursor: grab !important;
}

/* Track */
::-webkit-scrollbar-track {
	background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: #555;
}

.transition-transform {
	transition: transform 0.3s ease;
}
</style>
