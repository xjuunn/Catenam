import { defineStore } from 'pinia';
import { LogicalSize } from '@tauri-apps/api/window';
export const useBarStore = defineStore('bar',() => {
    let _barSize = ref(new LogicalSize(350, 100))
    let syncBarsize = computed(() => {
        return _barSize;
    })
    function setBarsize(size: LogicalSize) {
        _barSize.value = size;
    }
    return {
        syncBarsize, setBarsize,

    }
})