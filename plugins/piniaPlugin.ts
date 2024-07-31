import { createPinia } from 'pinia';
import { emit, listen } from '@tauri-apps/api/event';
import { appWindow } from '@tauri-apps/api/window';
export default defineNuxtPlugin((nuxtApp: any) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia)
  pinia.use(listenPiniaPlugin);
})

export function listenPiniaPlugin(context: any) {
  watch(context.store, () => {
    emit('storeSync', {
      data: {
        store: context.store,
        label: appWindow.label
      }
    })
  })

  listen('storeSync', async (event: any) => {
    if (event.payload.data.label == appWindow.label) return;
    for (const key in event.payload.data.store) {
      if (!Object.prototype.hasOwnProperty.call(event.payload.data.store, key)) continue;
      if (key.substring(0, 5) != 'sync') continue;
      context.store[key].value = event.payload.data.store[key]._value;

    }
  })
}

/**
 * Pinia store 中，所有以sync开头的计算属性会在所有窗口同步数据
 */