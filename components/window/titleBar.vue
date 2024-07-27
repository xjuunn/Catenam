<template>
    <div class="h-8 rounded-btn" data-tauri-drag-region>
        
    </div>
</template>

<script setup lang="ts">
import { appWindow } from '@tauri-apps/api/window';
onMounted(()=>{
    appWindow.startDragging()
})

</script>

<style lang="scss" scoped>

</style>