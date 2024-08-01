<template>
    <div class="flex flex-col justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg"
            :viewBox="`-${syncBarsize.width / 2} 0 ${syncBarsize.width} ${syncBarsize.height}`">
            <path :d="pathD" fill="#000000" />
        </svg>

    </div>
</template>

<script setup>
let { syncBarsize, pathD } = useBarStore();
</script>
