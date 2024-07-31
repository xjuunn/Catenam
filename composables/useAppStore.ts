import { defineStore } from "pinia";
export const useAppStore = defineStore('app', () => {
    let _sync = ref(0)
    let sync = computed(()=> _sync);
    function setSync(sync1:number){
        _sync.value = sync1;
    }
    return {
        sync,setSync
    }
})

