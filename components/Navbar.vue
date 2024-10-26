<template>
	<header class="sticky top-0 z-50 w-full bg-white shadow-sm">
		<nav class="mx-auto sm:flex block items-center justify-between p-4 lg:p-8">
			<div class="flex items-center gap-5">
				<Logo />
			</div>
			<!-- Search bar -->
			<div class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl relative sm:mt-0 mt-2">
				<input
					type="text"
					placeholder="Search Product..."
					class="w-full rounded-lg border border-slate-400 p-3 text-xs placeholder-neutral-500 focus:border-purple-700"
				/>
				<div class="absolute right-3 top-1/2 transform -translate-y-1/2">
					<img :src="searchIcon" alt="Search icon" class="w-4 h-4">
				</div>
			</div>
			<!-- Cart button -->
			<div class="flex justify-end mt-2 sm:mt-0">
				<button
					class="flex w-full justify-center items-center border border-purple-500 bg-purple-100 hover:bg-purple-200 px-4 py-2 rounded-md"
					@click="isCartVisible = true"
				>
					<img src="@/assets/image/cart.svg" width="15" alt="Cart icon">
				</button>
			</div>
		</nav>
		<!-- Cart modal -->
		<CartModal v-if="isCartVisible" @close="isCartVisible = false" />
	</header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import searchIcon from '@/assets/image/search.svg';
import CartModal from './CartModal.vue';

const isCartVisible = ref<boolean>(false);
</script>

<style scoped>
@keyframes spill {
	0% { transform: rotate(0deg) translateX(0); }
	20% { transform: rotate(-10deg) translateX(-10px); }
	40% { transform: rotate(10deg) translateX(10px); }
	60% { transform: rotate(-15deg) translateX(-15px); }
	80% { transform: rotate(10deg) translateX(10px); }
	100% { transform: rotate(0deg) translateX(0); }
}

.shake-animation {
	animation: spill 0.5s ease-in-out infinite;
	animation-delay: 3s;
}
</style>
