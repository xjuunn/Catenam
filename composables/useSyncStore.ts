import { defineStore, } from "pinia";

export const useSyncStore = defineStore('sync', () => {
    let _syncList:Ref<any> = ref({});
    let _syncKeyList:Ref<any> = ref([]);
    let syncList = computed(() => _syncList);
    let syncKeyList = computed(()=>_syncKeyList);
    function sync(key:string,data: Ref<any>) {
        _syncList.value[key] = data;
        _syncKeyList.value.push(key);
    }
    
    return {
        syncList, sync,syncKeyList
    }
})