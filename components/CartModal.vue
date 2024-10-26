<template>
	<Transition name="fade">
		<div
			class="fixed bottom-0 right-0 top-0 flex-col z-[9999] flex h-full p-4 bg-white w-[390px] shadow-xl">
			<div>
				<div class="flex justify-between p-4">
					<div class="flex items-center">
						<span class="font-bold"> My Cart </span>
					</div>
					<div>
						<button
							class="border rounded-full p-2"
							@click="$emit('close')">
							<img src="@/assets/image/close.svg" alt="" />
						</button>
					</div>
				</div>
				<!--  -->
				<div class="mt-5">
					<ul v-if="cartItems.length > 0" class="">
						<li
                            v-for="(cart, i) in cartItems"
                            :key="i"
							class="flex w-full flex-col border-b border-neutral-300">
							<div class="relative grid grid-cols-4 px-1 py-4">
								<div
									class="border rounded-lg h-[60px] w-[60px] flex justify-center items-center mx-auto">
									<img
                                        v-if="cart.pictures.length > 0 && cart.pictures[0]"
										alt="https://i.ibb.co.com/dBvBn7m/bag-1-dark.jpg"
										fetchpriority="high"
										decoding="async"
										data-nimg="1"
                                        :src="cart.pictures[0]"
										style="color: transparent"
                                    />
								</div>
								<a class="z-30 flex col-span-2 w-full" href="/">
									<div class="flex flex-1 flex-col text-base">
										<span class="leading-tight font-bold"
											>{{cart?.name}}</span
										>
										<p
											class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
											Stock: {{ cart.stock.quantity }}
										</p>
									</div>
								</a>
								<div class="flex h-16 flex-col justify-between">
									<p
										class="flex justify-end space-y-2 text-right text-sm">
										Rp{{ cart.price }}<span class="ml-1 inline">IDR</span>
									</p>
									<div
										class="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
										<button
											type="submit"
											aria-label="Reduce item quantity"
											class="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
                                            @click="reduceQuantity(cart, i)"
                                        >
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												aria-hidden="true"
												data-slot="icon"
												class="h-4 w-4 dark:text-neutral-500">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M5 12h14"></path>
											</svg>
										</button>
										<p
											aria-live="polite"
											class="sr-only"
											role="status"></p>
										<p class="w-6 text-center">
											<span class="w-full text-sm">{{ cart.quantity }}</span>
										</p>
										<button
                                            @click="cart.quantity++"
											type="submit"
											aria-label="Increase item quantity"
											class="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												aria-hidden="true"
												data-slot="icon"
												class="h-4 w-4 dark:text-neutral-500">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M12 4.5v15m7.5-7.5h-15"></path>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</li>
					</ul>
                    <div v-else class="flex justify-center">
                        Tidak ada data
                    </div>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script setup lang="ts">
import { useCartItem } from '@/store/cart';
const cartItems = useCartItem();
const quantity = ref<number>(1);

const reduceQuantity = (cart: any, index: number) => {
    if(cart.quantity > 0) {
        cart.quantity--;
    } else {
        cartItems.value.splice(index, 1);
    }
};
</script>

<style>
/* Definisikan efek transisi dengan nama "fade" */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active di versi Vue 2 */ {
	opacity: 0;
}
</style>
