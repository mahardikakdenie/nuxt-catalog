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
								src="https://www.lelongindonesia.com/public/uploads/all/ryeg1dD18yROUChe8y9CINaZP9438yHb9Wk2JhyF.png"
								class="border p-4 rounded-md"
								alt="" />
						</div>
                        <div class="">
							<ul class="flex gap-2 overflow-hidden">
								<li v-for="i in 5" :key="i" class="">
									<img
										src="https://www.lelongindonesia.com/public/uploads/all/ryeg1dD18yROUChe8y9CINaZP9438yHb9Wk2JhyF.png"
										width="100%"
										class="p-2 rounded-lg border mt-2 hover:border-purple-600 cursor-pointer"
                                        :class="{ 'border-purple-500': i === 1 }"
										alt="" />
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="p-4">
					<div>
						<h3 class="font-bold">
							ALAT PEL LANTAI 360 DERAJAT SUPER MAGIC MOP ALAT
							RUMAH TANGGA BATHROOM - stainsles sahbshjabsjbasbbjs
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
                            <span class="text-sm">
                                Pilih Variant
                            </span>
                        </div>
                        <div class="mt-2 grid grid-cols-4 gap-2">
                            <div class="border border-purple-500 p-1 bg-purple-100 text-purple-500 text-center rounded-xl">
                                <span>Grade A</span>
                            </div>
                            <div class="border p-1 text-neutral-600 text-center rounded-xl hover:border-purple-500 hover:bg-purple-100 hover:text-purple-500 cursor-pointer">
                                <span>Grade B</span>
                            </div>
                        </div>
                    </div>

                    <hr>

					<div class="py-4">
						<div>
							<span>Deskripsi</span>
						</div>
						<div>
							<span class="text-sm"
								>Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quaerat quod rem veritatis ea
								ab beatae alias facilis esse sit quas.</span
							>
						</div>
                        
                        <div class="mt-3">
                            <div class="flex gap-3">
                                <div class="flex items-center">
                                    <span>Share</span>
                                </div>
                                <div>
                                    <img src="@/assets/image/linkedin.svg" width="30" alt="">
                                </div>
                                <div>
                                    <img src="@/assets/image/github.svg" width="30" alt="">
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
                            <hr class="my-2">
                            <div class="mt-5 flex justify-between">
                                <div>
                                    <small>kuantitas</small>
                                </div>
                                <div class="flex items-center gap-3">
                                    <button @click="quantity--">
                                        -
                                    </button>
                                    <input :value="quantity" type="number" class="border rounded-lg text-center text-xs py-1 bg-gray-200" disabled>
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
                            <div class="mt-7">
                                <button class="border w-full py-2  rounded-lg bg-purple-600 text-white font-bold text-sm">
                                    Masukan Keranjang
                                </button>
                            </div>

                            <div class="mt-7">
                                <div class="flex justify-center w-full gap-5">
                                    <button class="flex gap-2">
                                        <img src="@/assets/image/chat.svg" width="20" alt="">
                                        <small>Chat</small>
                                    </button>
                                    <button class="flex gap-2">
                                        <img src="@/assets/image/heart.svg" width="20" alt="">
                                        <small>Wishlist</small>
                                    </button>
                                    <button class="flex gap-2">
                                        <img src="@/assets/image/share.svg" width="20" alt="">
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
const quantity = ref<number>(0)
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
</style>
