import { createPinia, type PiniaPluginContext } from 'pinia';
import { emit, listen, type Event } from '@tauri-apps/api/event';
import { appWindow } from '@tauri-apps/api/window';
export default defineNuxtPlugin((nuxtApp: any) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia)
  pinia.use(syncDataWithMainWindow);
})

let init: boolean = false;
let syncObj: any = {};
/** 窗口间数据同步 所有数据和主窗口同步 */
export async function syncDataWithMainWindow(context: PiniaPluginContext) {
  if (!init) {
    if (appWindow.label !== 'main') {
      emit('getStore', syncObj);
    } else {
      listen('getStore', () => {
        emit('syncStore', syncObj);
      })
    }
  }
  context.store.$onAction((context2) => {
    if (context2.name === 'sync') return;
    context2.after(() => {
      emit('syncStore', syncObj)
    })
  })
  if (init) return;
  init = !init;
  watch(context.store.syncKeyList.value, () => {
    syncObj = context.store.syncList.value;
  }, { flush: 'post' })
  listen('syncStore', (event: Event<any>) => {
    if (event.windowLabel === appWindow.label) return;
    for (const key in event.payload) {
      if (!Object.prototype.hasOwnProperty.call(event.payload, key)) return;
      const item = event.payload[key];
      context.store.syncList.value[key].value = item._value;
    }
  })
}