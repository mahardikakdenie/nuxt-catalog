<template>
	<header class="nav">
		<nav data-aos="flip-up" class="nav__wrapper">
			<div class="nav__wrapper-body">
				<div class="bottom-line" />
				<div class="flex gap-5 w-full">
					<Logo />
					<div 
						v-for="(list, index) in lists" :key="index"
						class="cursor-pointer hover:text-purple-600 hidden lg:flex lg:items-center"
					>
						<span 
							:class="{
								'text-purple-700 font-bold':
									route.path === list?.link,
								'dark:text-neutral-400':
									route.path !== list.link,
							}" 
							class="text-[13px] hover:text-purple-600" 
							@click="router.push(list?.link)"
						>
							{{ list?.label }}
						</span>
					</div>
				</div>
				<div class="flex justify-center w-full items-center px-10">
					<div class="w-full relative">
						<input type="text" placeholder="Search Product..." class="text-md w-full rounded-lg border p-3 text-xs border-slate-400 focus:border-purple-700 text-black placeholder:text-neutral-500 placeholder:text-xs">
						<div class="absolute right-0 top-0 mr-3 flex h-full items-center">
							<img :src="searchIcon" alt="">
						</div>
					</div>
				</div>
				<div class="w-full justify-end flex">
					<button class="border px-4 py-2 rounded-md border-purple-500 bg-purple-100 hover:bg-purple-200 flex">
						<img src="@/assets/image/cart.svg" width="15" alt="" srcset="">
					</button>
				</div>
			</div>
		</nav>
	</header>
</template>

<script lang="ts" setup>
import searchIcon from '@/assets/image/search.svg'
// import { ref } from 'vue';

const route = useRoute();
const router = useRouter();

interface Navigator {
	label: string;
	link: string;
}

const lists = ref<Array<Navigator>>([
	{
		label: 'All',
		link: '/',
	},
	{
		label: 'Celana',
		link: '/skills',
	},
	{
		label: 'Baju',
		link: '/experiences',
	},
	// {
	// 	label: 'Project',
	// 	link: '/project',
	// },
	// {
	// 	label: 'Blogs',
	// 	link: '/blogs',
	// },
	// {
	// 	label: 'Contact',
	// 	link: '/contact',
	// },
]);
</script>

<style lang="scss" scoped>
.nav {
	position: relative;
	z-index: 50;
	width: 100%;
	flex: none;
	font-weight: 600;
	line-height: 1.5rem;
	color: #0f172a;

	&__wrapper {
		margin-left: auto;
		margin-right: auto;
		padding-left: 1rem
			/* 16px */
		;
		padding-right: 1rem;

		&-body {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 2.125rem 0;

			.bottom-line {
				position: absolute;
				left: 0px;
				right: 0px;
				bottom: 0;
				height: 1px;
				background-color: #e2e8f0;
			}
		}
	}
}

@keyframes spill {
  0% {
    transform: rotate(0deg) translateX(0);
  }
  20% {
    transform: rotate(-10deg) translateX(-10px);
  }
  40% {
    transform: rotate(10deg) translateX(10px);
  }
  60% {
    transform: rotate(-15deg) translateX(-15px);
  }
  80% {
    transform: rotate(10deg) translateX(10px);
  }
  100% {
    transform: rotate(0deg) translateX(0);
  }
}

.shake-animation {
  animation: spill 0.5s ease-in-out infinite;
  animation-delay: 3s; /* Optional delay between shakes */
}

@media (min-width: 640px) {
	.nav__wrapper {
		padding-left: 1.5rem
			/* 24px */
		;
		padding-right: 1.5rem
			/* 24px */
		;
	}
}

@media (min-width: 1024px) {
	.nav__wrapper {
		padding-left: 2rem
			/* 32px */
		;
		padding-right: 2rem
			/* 32px */
		;
	}
}
</style>
