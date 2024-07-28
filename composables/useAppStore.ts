export const useAppStore = defineStore('app',()=>{
    let count = ref(0);
    const getCount = computed(()=>{
        return count;
    });
    function countAdd(i = 1){
        count.value += i;
    }
    return {
        count,
        getCount,
        countAdd
    }
})