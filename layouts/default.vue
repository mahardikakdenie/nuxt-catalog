<template>
	<div class="mx-auto">
		<Navbar />
		<div class="">
            <nuxt-page />
        </div>
		<Footer />
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
	font-family: 'Poppins', sans-serif;
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

.is-loading {
	position: relative;
	color: transparent !important;
	pointer-events: none;

	&:after {
		content: '';
		display: block;
		width: 1em;
		height: 1em;
		border: 2px solid white;
		border-radius: 50%;
		border-right-color: transparent;
		border-top-color: transparent;
		-webkit-animation: spinAround 500ms infinite linear;
		animation: spinAround 500ms infinite linear;
	}

	&.large:after {
		width: 2em;
		height: 2em;
		border-width: 3px;
	}

	&.dark:after {
		border-left-color: #555;
		border-bottom-color: #555;
	}
}

.app-loader {
	height: 4rem;
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

@keyframes spinAround {
	from {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	to {
		-webkit-transform: rotate(359deg);
		transform: rotate(359deg);
	}
}
</style>
