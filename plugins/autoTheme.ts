export default defineNuxtPlugin((nuxtApp: any) => {
    let html = document.getElementsByTagName('html')[0];
    setTheme(nuxtApp.$colorMode.value);
    watch(nuxtApp.$colorMode, () => {
        if (nuxtApp.$colorMode.preference === 'system')
            setTheme(nuxtApp.$colorMode.value === 'light' ? 'nord' : 'drak'); // 用户自定义
        else setTheme(nuxtApp.$colorMode.value);
    })
    function setTheme(theme: string = 'dark') {
        html.setAttribute('data-theme', theme);
    }

})
