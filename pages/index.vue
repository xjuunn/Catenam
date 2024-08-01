<template>
    <div class="flex justify-center items-center w-full flex-col ">
        <button class="btn btn-primary" @click="toggle">切换显示窗口</button>
        {{ syncBarsize }}
        <div class="flex">
            <input class="input input-bordered flex-1 max-w-xs m-1" type="text" placeholder="width"
                :value="syncBarsize.width" @input="setWidth" />
            <input class="input input-bordered flex-1 max-w-xs m-1" type="text" placeholder="height"
                :value="syncBarsize.height" @input="setHeight" />
        </div>
        <button class="btn btn-primary" @click="resize(350, 100)">350*100</button> <br>
        <button class="btn btn-primary" @click="resize(450, 100)">450*100</button> <br>
        <button class="btn btn-primary" @click="resize(450, 140)">450*140</button> <br>
        <button class="btn btn-primary" @click="resize(500, 100)">500*100</button> <br>
    </div>
</template>

<script setup lang="ts">
import { LogicalPosition, LogicalSize, WindowManager } from '@tauri-apps/api/window';
let { syncBarsize, setBarsize } = useBarStore();
async function toggle() {
    let barWindow = new WindowManager('bar');
    barWindow.setSize(new LogicalSize(350, 70));
    let visible = await barWindow.isVisible()
    if (!visible) barWindow.show();
    else barWindow.hide();
    let width = (await barWindow.outerSize()).width;
    barWindow.setPosition(new LogicalPosition(window.screen.width / 2 - width / 2, 0))
}

function resize(width: number, height: number) {
    setBarsize(new LogicalSize(width, height));
}
function setWidth(event: any) {
    resize(event.target.value, syncBarsize.value.height);
}
function setHeight(event: any) {
    resize(syncBarsize.value.width, event.target.value);
}

</script>