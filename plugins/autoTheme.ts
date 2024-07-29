export default defineNuxtPlugin((nuxtApp:any) => {
    let html = document.getElementsByTagName('html')[0];
    watch(nuxtApp.$colorMode, () => {
        html.setAttribute('data-theme', nuxtApp.$colorMode.value||'dark');
    })


})