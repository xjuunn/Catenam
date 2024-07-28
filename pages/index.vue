<template>
    <div class="flex justify-center items-center w-full flex-col ">
        <div class="countdown p-5 m-5 rounded-box text-5xl bg-neutral">
            <span :style="`--value:${value}`"></span>
        </div>
        <button class="btn btn-primary" @click="value++">Catenam++</button>
    </div>
</template>

<script setup lang="ts">
let value = ref(0);
</script>