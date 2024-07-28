<template>
    <div class="flex justify-center items-center w-full flex-col ">
        <div class="countdown p-5 m-5 rounded-box text-5xl bg-neutral">
            <span :style="`--value:${value}`"></span>
        </div>
        <button class="btn btn-primary" @click="value++">Catenam++</button>
        <br>
        <div v-for="item in 20" :key="item">{{ item }}</div>
        <br>
    </div>
</template>

<script setup>
let value = ref(0);
</script>

<style lang="scss" scoped></style>