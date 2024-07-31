<template>
    <div class="bg-white w-full">
        <AppBarBg></AppBarBg>
        <slot></slot>
        <button class="btn btn-primary" @click="test">{{ syncBarsize }}</button>
    </div>
</template>

<script setup lang="ts">
import { LogicalSize } from '@tauri-apps/api/window';

let { syncBarsize,setBarsize } = useBarStore();
function test() {
    setBarsize(new LogicalSize(syncBarsize.value.width,syncBarsize.value.height+1))
}
</script>
