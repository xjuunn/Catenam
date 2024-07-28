<template>
    <div
        class="w-screen h-screen transition-none bg-base-100 border border-neutral rounded-btn overflow-hidden flex flex-col">
        <WindowTitleBar></WindowTitleBar>
        <div class="overflow-y-auto flex-1">
            <slot></slot>
        </div>
    </div>
</template>