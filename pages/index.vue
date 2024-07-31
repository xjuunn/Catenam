<template>
    <div class="flex justify-center items-center w-full flex-col ">
        <button class="btn btn-primary" @click="toggle">切换显示窗口</button>
        <button class="btn btn-primary" @click="test">{{ sync }}</button>
    </div>
</template>

<script setup lang="ts">
import { LogicalPosition, WindowManager } from '@tauri-apps/api/window';
let { sync, setSync } = useAppStore();
async function toggle() {
    let barWindow = new WindowManager('bar');
    let visible = await barWindow.isVisible()
    if (!visible) barWindow.show();
    else barWindow.hide();
    let width = (await barWindow.outerSize()).width;
    barWindow.setPosition(new LogicalPosition(window.screen.width / 2 - width / 2, 0))
}

function test() {
    setSync(sync.value + 1)
}

</script>