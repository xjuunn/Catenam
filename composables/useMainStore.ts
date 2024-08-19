import { defineStore } from "pinia";
import { LogicalSize, WindowManager, LogicalPosition } from '@tauri-apps/api/window';
let mainWindow = new WindowManager('main');
export const useMainStore = defineStore('main', () => {
    let { $anime } = useNuxtApp();
    let mainWindowSize: Ref<LogicalSize> = ref(new LogicalSize(250, 100)); // 窗口大小
    let preMainSize: Ref<LogicalSize> = ref(new LogicalSize(mainWindowSize.value.width, mainWindowSize.value.height)); // 动画前，防止动画被遮挡
    let mainSize: Ref<LogicalSize> = ref(new LogicalSize(mainWindowSize.value.width, mainWindowSize.value.height)); // 实际的，动画的大小
    let svgArgs = ref({
        radiusTop: 20,
        radiusBottom: 20,
    })
    mainWindow.setSize(mainWindowSize.value);
    let _pathD = ref('');
    let pathD = computed(() => {
        setPathD();
        return _pathD;
    })
    function setPathD() {
        _pathD.value = `
        m -${mainSize.value.width / 2} 0 
        q ${svgArgs.value.radiusTop} 0 ${svgArgs.value.radiusTop} ${svgArgs.value.radiusTop} 
        v ${mainSize.value.height - svgArgs.value.radiusTop - svgArgs.value.radiusBottom} 
        q 0 ${svgArgs.value.radiusBottom} ${svgArgs.value.radiusBottom} ${svgArgs.value.radiusBottom} 
        h ${mainSize.value.width - (2 * svgArgs.value.radiusBottom) - (2 * svgArgs.value.radiusTop)} 
        q ${svgArgs.value.radiusBottom} 0 ${svgArgs.value.radiusBottom} -${svgArgs.value.radiusBottom} 
        v -${mainSize.value.height - svgArgs.value.radiusTop - svgArgs.value.radiusBottom} 
        q 0 -${svgArgs.value.radiusTop} ${svgArgs.value.radiusTop} -${svgArgs.value.radiusTop}
        z
        `
    }
    function setMainSize(width1: number, height1: number) {
        let width = Math.max(mainWindowSize.value.width, width1);
        let height = Math.max(mainWindowSize.value.height, height1);
        mainWindow.setPosition(new LogicalPosition(window.screen.width / 2 - mainSize.value.width / 2, 0))
        mainWindow.setSize(new LogicalSize(width, height));
        preMainSize.value.width = width;
        preMainSize.value.height = height;
        $anime({
            targets: mainSize.value,
            height: height1,
            width: width1,
            update: function () {
                setPathD();
            },
            complete: function () {
                mainWindowSize.value.width = width1;
                mainWindowSize.value.height = height1;
                mainWindow.setSize(new LogicalSize(width1, height1));
                mainWindow.setPosition(new LogicalPosition(window.screen.width / 2 - mainSize.value.width / 2, 0))

            }
        });
    }
    watch(mainSize.value, () => {
        mainWindow.setPosition(new LogicalPosition(window.screen.width / 2 - mainSize.value.width / 2, 0))
    }, { immediate: true })


    return {
        mainWindowSize, pathD,mainSize,preMainSize, setMainSize,
    }
})