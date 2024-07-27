<template>
    <div class="flex justify-center items-center w-full flex-col ">
        <div class="countdown p-5 m-5 rounded-box text-5xl bg-neutral">
            <span :style="`--value:${value}`"></span>
        </div>
        <button class="btn btn-primary" @click="value++">Catenam++</button>
        <br>1
        <br>12
        <br>13
        <br>14
        <br>15
        <br>16
        <br>17
        <br>18
        <br>19
        <br>10
        <br>111
        <br>122
        <br>133
        <br>144
        <br>155
        <br>166
        <br>177
        <br>188
        <br>199
        <br>100
        
    </div>
</template>

<script setup>
let value = ref(0);
</script>

<style lang="scss" scoped></style>