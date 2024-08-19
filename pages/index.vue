<template>
    <div class="flex justify-center w-screen">
            <button class="btn btn-primary" @click="test" >test</button>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "main-layout",
})
let { setMainSize } = useMainStore();
let flag = false;
function test(){
    if(flag) setMainSize(350,100);
    else setMainSize(250,100);

    flag = !flag;
}
</script>