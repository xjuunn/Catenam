<template>
    <div class="w-screen h-screen transition-none bg-base-100 border border-neutral rounded-btn">
        <WindowTitleBar></WindowTitleBar>
        <div class=" flex justify-center px-4 py-16">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>