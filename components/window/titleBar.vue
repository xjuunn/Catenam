<template>
    <div class="h-5 m-1 rounded-md flex z-50" data-tauri-drag-region>
        <span class="pt-1 ps-2 text-xs opacity-75" data-tauri-drag-region>{{ title }}</span>
        <div class="flex-1" data-tauri-drag-region>
            <!-- 中间区域 -->
        </div>
        <div class="text-base-content items-end">
            <Icon class="opacity-60 hover:opacity-100" name="fluent:minimize-16-regular" size="1.1em" @click="appMinimize"></Icon>
            <Icon class="opacity-60 hover:opacity-100 me-1 ms-2" name="material-symbols-light:close" size="1.1em" @click="appClose"></Icon>
        </div>
    </div>
</template>

<script setup lang="ts">
import { appWindow } from '@tauri-apps/api/window'
let title = ref('');
onMounted(async () => {
    title.value = await appWindow.title();
})
function appClose() {
    appWindow.close();
}
function appMinimize() {
    appWindow.minimize();
}

</script>

<style lang="scss" scoped></style>