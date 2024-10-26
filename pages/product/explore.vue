<template>
	<div class="container mx-auto p-6">
		<h1 class="text-2xl font-semibold mb-6">Catalog</h1>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			<nuxt-link
				v-for="item in dataProducts"
				:key="item.id"
				class="bg-white border rounded-lg shadow p-4"
                :to="`/product/${item.id}`"
            >
				<img
					:src="item.pictures[0]"
					alt="item.name"
					class="w-full object-cover rounded-t-lg mb-4" />
				<div class="flex flex-col items-center">
					<h2 class="text-lg font-medium text-gray-800 mb-2">
						{{ item.name }}
					</h2>
					<p class="text-gray-600 mb-1">
						Price:
						<span class="font-semibold">Rp{{ item.price }}</span>
					</p>
					<p class="text-gray-500 mb-2">
						Rating: {{ item.rating }} ★
					</p>
					<p
						v-if="item.stock?.enabled && item.stock.quantity > 0"
						class="text-green-500 font-medium mb-4">
						In Stock: {{ item.stock.quantity }}
					</p>
					<p v-else class="text-red-500 font-medium mb-4">
						Out of Stock
					</p>
				</div>
			</nuxt-link>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useCartItem } from '@/store/cart';

useSeoMeta({
    title: "Product Explore",
})

interface ProductInterface {
	id?: number;
	rating?: number;
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
	stock?: {
		enabled: boolean;
		quantity: number;
	};
	pictures: string[];
}

const {
	data: products,
	pending: loading,
	error,
} = await useFetch(
	'https://my-json-server.typicode.com/mahardikakdenie/db-catalog-json/products'
);

const dataProducts = ref<ProductInterface[]>([]);

const isloading = ref<boolean>(true);
watchEffect(() => {
	isloading.value = true;
	if (products.value && Array.isArray(products.value)) {
		// Tripling the data for demo purpose
		dataProducts.value = products.value;
		isloading.value = loading.value;
	}
});

const cartItems = useCartItem();

const isSubmit = ref<boolean>(false);
const addToCart = (dataProducts: any) => {
	isSubmit.value = true;
	const index = cartItems.value?.findIndex(
		(curr: any) => curr?.id === dataProducts.id
	);
	if (index !== -1) {
		cartItems.value[index].quantity = cartItems.value[index].quantity + 1;
	} else {
		cartItems.value.push({ ...dataProducts.value, quantity: 1 });
	}

	setTimeout(() => {
		isSubmit.value = false;
	}, 3000);
};
</script>
