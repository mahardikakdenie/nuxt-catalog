<template>
    <a class="logo" href="/">
        <div class="logo__wrapper bg-purple-200 border border-purple-300">
            <svg xmlns="http://www.w3.org/2000/svg" aria-label="undefined logo" viewBox="0 0 32 28"
                class="h-4 w-4 fill-black">
                <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
            </svg>
        </div>
        <div class="ml-2 flex-none text-sm font-bold uppercase md:hidden lg:block text-purple-600">
            Mahardika Store
        </div>
    </a>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.logo {
    margin-right: 6px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    &__wrapper {
        display: flex;
        flex: none;
        align-items: center;
        justify-content: center;
        // border: 1px solid #404040;
        // background-color: #e9d5ff;
        height: 40px;
        width: 40px;
        border-radius: 12px;
    }
}

@media (min-width: 768px) {
    .logo {
        width: auto;
        margin-right: 1.5rem
    }
}
</style>
