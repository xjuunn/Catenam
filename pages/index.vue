<template>
    <div class="overflow-hidden w-full h-full">
        <div v-show="!showImg" class="flex items-center justify-center flex-col overflow-hidden h-56">
            <span class="font-deyi tracking-widest absolute top-20">{{ print.text }}</span>
            <div class="flex gap-10 mt-10">
                <button v-for="(item, index) in print.btn" :key="index" class="btn btn-ghost" :disabled="item == '补药'"
                    @click="doClick">{{ item }}</button>
            </div>
        </div>
        <img v-show="showImg" src="/public/imgs/cake.png" class="transition hover:scale-110 h-full w-full" alt="cake">
    </div>
</template>

<script setup lang="ts">
import {appWindow} from '@tauri-apps/api/window'
const showImg = ref(false);
const print: Ref<PrintType> = ref({
    text: 'Loading . . .'
});
const dataList: PrintType[] = [
    { text: 'Loading . . .' },
    {text:'准备好了吗',btn:['准备好了','对']},
    { text: 'Loading . . .' },
    { text: 'Loading . . .' },
    { text: '检查网络连接状态 . . .' },
    { text: '网络连接正常' },
    { text: '正在寻找可用的镜像服务器 . . .' },
    { text: '测试中 . . .' },
    { text: '正在进行必要的配置 . . .' },
    { text: '服务器配置完成' },
    { text: '创建 WebSocket 连接到信令服务器' },
    { text: '尝试连接到信令服务器' },
    { text: 'WebSocket 连接已建立' },
    { text: '生成唯一标识符: Node_A-' + useId() },
    { text: '发送连接请求' },
    { text: '等待信令服务器确认连接 . . .' },
    { text: '信令服务器确认连接成功' },
    { text: '准备建立 WebRTC 连接' },
    { text: '创建 RTCPeerConnection 实例 . . .' },
    { text: 'RTCPeerConnection 已创建' },
    { text: '添加 ICE 候选事件监听器 . . .' },
    { text: '监听 ICE 候选生成 . . .' },
    { text: '添加视频轨道到 RTCPeerConnection . . .' },
    { text: '生成 SDP offer . . .' },
    { text: 'v=0o=- 4611734837952545205 2 IN IP4 127.0.0.1...' },
    { text: '检测到病毒:  机密文档.exe' },
    { text: '分配必要的内存空间 . . . ', time: 3000 },
    { text: '是否要在联网环境运行？', btn: ['是', '否'] },
    { text: '生成地形中 . . .' },
    { text: '柏林噪音修复地形' },
    { text: '生成洞穴中 . . .' },
    { text: '生成山脉中 . . .' },
    { text: '生成湖泊中 . . .' },
    { text: '加了点小人 . . .' },
    { text: '小人死了', time: 4000 },
    { text: '添加氧气', time: 2000 },
    { text: '？ ？' },
    { text: '等等 . . .', time: 3000 },
    { text: '检测到今天是你的生日，是否要祝自己生日快乐?', btn: ['要 ~', '补药'], time: 3000 },
    { text: 'Loading . . .' },
    { text: 'Loading . . .' },
    { text: '数据异常！可能受到太阳活动的影响 . . ', btn: ['继续'], time: 2000 },
    { text: '' + useId() + useId() },
    { text: '' + useId() + useId() },
    { text: '数据错误！', btn: ['继续 . . .'] },
    { text: '别怕! 有我在！英勇的 郡 来了😅', btn: ['继续'] },
    { text: '他一根手指就解决了困难', btn: ['继续'], time: 2000 },
    { text: '他帅不帅', btn: ['帅', '很帅'] },
    { text: "" },
    { text: '坏了！你给他夸高兴了', btn: ['继续'] },
    { text: "他给你带来了祝福,他说", btn: ['继续'] },
    { text: "愿你在生活的每一个瞬间都充满快乐", btn: ['继续'] },
    { text: "愿你在友情的世界里找到真挚的伙伴", btn: ['继续'] },
    { text: "愿你在健康的每一天都充满活力", btn: ['继续'] },
    { text: "愿你在追求爱好的路上找到热情与灵感", btn: ['继续'] },
    { text: "愿你在学习的旅程中一路顺风", btn: ['继续'] },
    { text: "愿所有的努力都有回报", btn: ['继续'] },
    { text: "愿每一次坚持都能换来成长", btn: ['继续'] },
    { text: "愿每一次探索都有收获", btn: ['继续'] },
    { text: "愿你愿望的愿望都得以实现", btn: ['继续'] },
    { text: "愿你实现过的愿望实现好几遍", btn: ['继续'] },
    { text: "" },
    { text: "非静止画面" },
    { text: "" },
    { text: "非静止画面" },
    { text: "" },
    { text: "非静止画面" },
    { text: "他好像不知道说什么了", btn: ['继续'] },
    { text: "他一个华丽的转身，发出了华丽的金光，消失了", btn: ['继续'] },
    { text: "只留下了一个华丽的不明物体", btn: ['继续'] },
    { text: "是否要上前查看？", btn: ['是', '补药'] },
    { text: '什么? 这竟然是 . . .', btn: ['打开'] },
    { text: "" },
    { text: "" },  

]
onMounted(async () => {
    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });

    for (let index = 0; index < dataList.length; index++) {
        const element = dataList[index];
        const print1: PrintType = await setText(element);
        await awaitBtn();
        print.value = print1
    }
    
    appWindow.setFullscreen(true);
    showImg.value = true;

})
function setText(item: PrintType): Promise<PrintType> {
    return new Promise((res) => {
        setTimeout(() => {
            res(item);
        }, item.time ?? Math.floor(Math.random() * 1600) + 300);
    })
}
let res1: any;
function awaitBtn(): Promise<string> {
    return new Promise(res => {
        if (!print.value.btn?.length) res('');
        res1 = res;
    })
}
function doClick() {
    // btnAwait.value = false;
    res1();
}

type PrintType = {
    text?: string
    time?: number,
    btn?: string[]
}


</script>