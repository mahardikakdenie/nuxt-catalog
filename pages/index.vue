<template>
	<div class="px-10 py-3 mt-4">
		<div class="grid grid-cols-3 gap-3">
			<div class="col-span-2 p-4 border rounded-lg cursor-pointer">
				<img
					src="https://www.lelongindonesia.com/public/uploads/all/VW2i0KOkMa2ys1rNBft638v8zx3NxwJ6kRMa9vkW.jpg"
					alt="" />
			</div>
			<div>
				<div class="p-3 border cursor-pointer">
					<img
						src="https://www.lelongindonesia.com/public/uploads/all/VW2i0KOkMa2ys1rNBft638v8zx3NxwJ6kRMa9vkW.jpg"
						alt="" />
				</div>
				<div class="p-3 border cursor-pointer">
					<img
						src="https://www.lelongindonesia.com/public/uploads/all/VW2i0KOkMa2ys1rNBft638v8zx3NxwJ6kRMa9vkW.jpg"
						alt="" />
				</div>
			</div>
		</div>

		<!--  -->
		<div>
            <div class="mt-4 font-bold">
                <span class="text-xl">
                    List Product
                </span>
            </div>
			<div class="w-full overflow-x-auto pb-6 pt-1">
				<ul class="p-4 animate-carousel flex gap-4">
					<li
                        v-for="i in 20"
                        :key="i"
						class="relative aspect-square w-1/6 max-w-[475px] flex-none">
						<nuxt-link to="/s" class="w-[400px] h-[200px] relative">
							<div
								class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
								<img
                                    src="https://www.lelongindonesia.com/public/uploads/all/7XhGUqzVLNKWWruc7KQAHkV4tAPKx6zafpSomdbP.jpg"
									class="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
									style="
										position: absolute;
										height: 100%;
										width: 100%;
										left: 0;
										top: 0;
										right: 0;
										bottom: 0;
										color: transparent;
									"
									alt="" />
								<div
									class="absolute bottom-4 flex justify-center w-full">
									<div
										class="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
										<h3
											class="mr-4 text-[10px] line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
											Acme Circles T-Shirt
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
</template>

<style lang="scss">
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
//   display: inline-block;
//   white-space: nowrap;
//   overflow: hidden;
  animation: marquee 60s linear infinite;
}
</style>
