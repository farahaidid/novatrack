<template>
  <div id="app">
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss" >
html,body{
  height: 100%;
  // overflow: hidden !important;
}

@import "assets/base.scss";
</style>
