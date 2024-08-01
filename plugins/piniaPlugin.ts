import { createPinia } from 'pinia';
import { emit, listen, once } from '@tauri-apps/api/event';
import { appWindow } from '@tauri-apps/api/window';
export default defineNuxtPlugin((nuxtApp: any) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia)
  pinia.use(listenPiniaPlugin);
})

export async function listenPiniaPlugin(context: any) {
  await initSync(context);
  updateSync(context);

}
function initSync(context: any) {
  return new Promise((res, rej) => {
    let timeout = setTimeout(() => {
      rej(false);
      throw new Error("页面初始化获取全局Store超时");
    }, 3000);
    once('initStoreSync', (event: any) => {
      sync(event, context);
      clearTimeout(timeout);
      res(true);
    })
    listen('initStore', (event: any) => {
      if (event.payload.label === appWindow.label) return;
      emit('initStoreSync', {
        data: {
          store: context.store,
          label: appWindow.label
        }
      })
    })
    emit('initStore', { label: appWindow.label });
  })
}
function updateSync(context: any) {
  watch(context.store, () => {
    if (context.listenUpdate) {
      context.listenUpdate = false;
      return;
    }
    emit('storeSync', {
      data: {
        store: context.store,
        label: appWindow.label
      }
    })
  })

  listen('storeSync', async (event: any) => {
    sync(event, context);
  })
}

function sync(event: any, context: any) {
  if (event.payload.data.label == appWindow.label) return;
  for (const key in event.payload.data.store) {
    if (!Object.prototype.hasOwnProperty.call(event.payload.data.store, key)) continue;
    if (key.substring(0, 4) != 'sync') continue;
    context.listenUpdate = true;
    context.store[key].value = event.payload.data.store[key]._value;
  }
}
/**
 * Pinia store 中，所有以sync开头的计算属性会在所有窗口同步数据
 */