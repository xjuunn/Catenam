import { defineStore } from "pinia";
export const useAppStore = defineStore('app', () => {
    const { sync } = useSyncStore();
    let _count = ref(0);
    let count = computed(() => _count);
    function addCount() {
        _count.value++;
    }
    sync('count', count);


    return {
        count, addCount
    }
})

