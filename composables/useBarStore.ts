import { LogicalSize, WindowManager } from '@tauri-apps/api/window';
import { defineStore } from 'pinia';
export const useBarStore = defineStore('bar', async () => {
    let barWindow = await new WindowManager('bar');
    console.log('create',barWindow);
    
    function setBarSize(width:number,height:number){
        barWindow.setSize(new LogicalSize(width,height))
    }


    return {
        barWindow,
        setBarSize,
    }
})