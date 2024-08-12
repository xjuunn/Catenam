<template>
    <div class="flex justify-center items-center w-full flex-col ">
        <button class="btn btn-primary" @click="addCount()">{{ count }}</button>
        {{ syncList }}
    </div>
</template>

<script setup lang="ts">
const { count, addCount } = useAppStore();
const { syncList } = useSyncStore();
</script>