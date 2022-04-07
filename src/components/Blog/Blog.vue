<script setup>
import { reactive } from "@vue/reactivity";
import BlogContentVue from "./SubBlog/BlogContent.vue";
import { useStore } from "vuex";
const {state} = useStore();
const data = reactive({
   blogData: state.StoreBlog.data
})
</script>
<template>
<div class="">
   <!-- Header Blog -->
   <div class="h-[200px] relative">
        <img src="https://images.unsplash.com/photo-1648975498404-e438dc69bbea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" class="w-full h-full fit-cover" alt="">
        <div class="absolute top-[50%] -translate-y-2/4 left-[50%] -translate-x-2/4 text-white text-[100px] font-semibold"> Blog </div>
   </div>

   <div class="mt-[50px]"></div>
   <BlogContentVue :blogData="data.blogData"></BlogContentVue>

</div>
</template>