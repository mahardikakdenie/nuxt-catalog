<template>
	<footer class="bg-white text-white py-8">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col md:flex-row justify-between items-center">
				<!-- Brand Logo or Name -->
				<div class="text-md font-semibold mb-4 md:mb-0 flex gap-2">
					<a href="#" class="text-purple-600 hover:text-gray-400">Mahardika Kessuma Denie</a>
				</div>

				<!-- Navigation Links -->
				<!-- <div class="flex space-x-4 mb-4 md:mb-0">
					<a href="#" class="text-gray-400 hover:text-purple-600">Home</a>
					<a href="#" class="text-gray-400 hover:text-purple-600">About</a>
					<a href="#" class="text-gray-400 hover:text-purple-600"
						>Services</a
					>
					<a href="#" class="text-gray-400 hover:text-purple-600"
						>Contact</a
					>
				</div> -->

				<!-- Social Media Links -->
				<div class="flex space-x-4">
					<a href="#" class="text-gray-400 hover:text-purple-600 opacity-50 hover:opacity-100">
						<img :src="linkedinImage" width="30" alt="linkedin-image">
					</a>
					<a href="#" class="text-gray-400 hover:text-purple-600 opacity-50 hover:opacity-100">
						<img :src="githubImage" width="30" alt="github-image" srcset="">
					</a>
					<a href="#" class="text-gray-400 hover:text-purple-600 opacity-50 hover:opacity-100">
						<img :src="emailImage" width="30" alt="" srcset="">
					</a>
				</div>
			</div>

			<!-- Footer Bottom -->
			<div class="mt-8 border-t border-gray-700 pt-4">
				<p class="text-sm text-purple-600 text-center">
					&copy; 2024 Mahardikakdenie. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import linkedinImage from '@/assets/image/linkedin.svg';
import githubImage from '@/assets/image/github.svg';
import emailImage from '@/assets/image/email.svg';
</script>
