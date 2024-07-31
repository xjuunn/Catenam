<template>
    <div class="bg-white w-full">
        <AppBarBg></AppBarBg>
        <slot></slot>
        <button class="btn btn-primary" @click="test">{{ sync }}</button>
    </div>
</template>

<script setup lang="ts">
let { sync, setSync } = useAppStore();
function test() {
    setSync(sync.value + 2);
}
</script>
