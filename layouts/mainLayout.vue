<template>
    <div id="mainWindow" class="w-screen h-screen">
        <MainBgSvg class="absolute"></MainBgSvg>
        <div id="mainContainer" class="absolute">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { LogicalPosition, WindowManager } from '@tauri-apps/api/window';
let { mainWindowSize } = useMainStore();
let mainWindow = new WindowManager('main');

mainWindow.setPosition(new LogicalPosition(window.screen.width / 2 - mainWindowSize.width / 2, 0))


</script>
