<template>
    <div>
        <button class="btn btn-primary" @click="addCount()">{{ count }}</button>
    </div>
</template>

<script setup>
const { count, addCount } = useAppStore();
</script>
