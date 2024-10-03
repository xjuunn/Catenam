<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<script lang="ts" setup>
useAppStore();
</script>
<style>
html,
body {
  background-color: transparent !important;
}

* {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  scrollbar-width: thin;
  scrollbar-color: rgba(100, 100, 100, 0) rgba(0, 128, 0, 0);

}

*:hover {
  scrollbar-color: rgba(105, 105, 105, 0.315) rgba(255, 255, 255, 0);
}

@font-face {
  font-family: deyi;
  src: url('/fonts/SmileySans-Oblique.ttf.woff2');
  font-display: swap;
}
.font-deyi {
  font-family: deyi,'Courier New', Courier, monospace;
}

</style>
