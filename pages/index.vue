<template>
    <div class="flex justify-center items-center w-full flex-col ">
        <div class="countdown p-5 m-5 rounded-box text-5xl bg-base-300">
            <span :style="`--value:${value}`"></span>
        </div>
        <button class="btn btn-primary" @click="value++">Catenam++</button>
        <br>
        <button class="btn btn-primary" @click="test">创建窗口</button>
        <button class="btn btn-primary" @click="toggle">toggle</button>
    </div>
</template>

<script setup lang="ts">
import { WebviewWindow } from '@tauri-apps/api/window'
let value = ref(0);
let testWindow :WebviewWindow;
function test() {
    testWindow = new WebviewWindow('test', {
        alwaysOnTop: true,
        center: true,
        focus: true,
        height: 200,
        width: 500,
        decorations: false,
        transparent: true,
        url:'/test'
    });
}
let flag = true;
function toggle(){
    if(flag) testWindow.hide();
    else testWindow.show()
    flag = !flag;
}

</script>