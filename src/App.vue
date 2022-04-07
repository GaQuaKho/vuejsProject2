<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>

<Header></Header>
<div class="mt-[84px]"></div>

<router-view></router-view>
<div class="mt-[50px]"></div>
<Footer/>
</template>

