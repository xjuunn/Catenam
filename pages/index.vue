<template>
    <div class="flex justify-center items-center w-full flex-col ">
        <div class="countdown p-5 m-5 rounded-box text-5xl bg-base-300">
            <span :style="`--value:${value}`"></span>
        </div>
        <button class="btn btn-primary" @click="value++">Catenam++</button>
        <br>
        <button class="btn btn-primary" @click="setColor">setColor</button>
    </div>
</template>

<script setup lang="ts">
let value = ref(0);
let colorMode = useColorMode();
function setColor(){
    colorMode.preference = 'system'

}
</script>