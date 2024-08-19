<template>
    <div class="bg-white w-screen h-screen">
        <svg id="mainSvg" class="w-screen" xmlns="http://www.w3.org/2000/svg" :viewBox="`-${preMainSize.width/2} 0 ${preMainSize.width} ${preMainSize.height}`">
            <path :d="pathD" fill="#000000" />
        </svg>
    </div>
</template>

<script setup>
let { pathD,mainWindowSize ,preMainSize} = useMainStore();
</script>
<style scoped>
#mainSvg{
    filter: blur(.5px);
}
</style>