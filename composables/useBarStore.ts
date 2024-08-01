import { defineStore } from 'pinia';
import { LogicalSize } from '@tauri-apps/api/window';
let { $anime } = useNuxtApp();
export const useBarStore = defineStore('bar', () => {
    let _barSize = ref(new LogicalSize(40, 40));  /** 顶栏的宽高 */
    let _barRound = ref(20);  /** 顶栏圆角大小 */
    let _pathD = ref('');  /** svg的path */
    let _fill = ref('#000000');  /** 填充色 */
    let syncBarsize = computed(() => _barSize)
    let pathD = computed(() => _pathD)
    let fill = computed(() => _fill.value);
    let setBarsize = (size: LogicalSize) => _barSize.value = size;
    let setFill = (color: string) => _fill.value = color;

    /** 自动设置path */
    watch(_barSize, () => {
        $anime({
            targets: _pathD,
            value: `m -${_barSize.value.width / 2} 0 q ${_barRound.value} 0 ${_barRound.value} ${_barRound.value} v ${_barSize.value.height - (2 * _barRound.value)} q 0 ${_barRound.value} ${_barRound.value} ${_barRound.value} h ${_barSize.value.width - (4 * _barRound.value)} q ${_barRound.value} 0 ${_barRound.value} -${_barRound.value} v -${_barSize.value.height - (2 * _barRound.value)} q 0 -${_barRound.value} ${_barRound.value} -${_barRound.value}`,
            duration: 500,
            easing: 'linear',
            complete: () => {
            }
        })
    })
    return {
        syncBarsize, setBarsize, pathD, fill, setFill

    }
})