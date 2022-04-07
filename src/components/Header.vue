<script setup>

</script>
<template>
<div class="bg-black fixed top-0 left-0 right-0 z-10">
    <div class="w-[1200px] text-white flex items-center justify-between mx-auto">
        <div class="">
            <router-link to="/">  
                <div class="flex text-white hover:bg-white hover:text-black p-2 rounded-lg">
                    <ion-icon size="large" name="logo-vue"></ion-icon>
                </div>
            </router-link>
        </div>
        <div class="flex items-center gap-x-3  h-[84px]">
            <router-link to="/"  class="p-2 hover:bg-white hover:text-black rounded-lg"
            >Trang chủ</router-link>
            <router-link to="/about" class="p-2 hover:bg-white hover:text-black rounded-lg">Thông tin </router-link>
            <router-link to="/price" class="p-2 hover:bg-white hover:text-black rounded-lg">Giá</router-link>
            <router-link to="/portfolio" class="p-2 hover:bg-white hover:text-black rounded-lg">Công việc</router-link>
            <router-link to="/element" class="p-2 hover:bg-white hover:text-black rounded-lg">Element</router-link>
            <router-link to="/contact" class="p-2 hover:bg-white hover:text-black rounded-lg">Liên hệ</router-link>
            <router-link to="/blog" class="p-2 hover:bg-white hover:text-black rounded-lg">Bài viết</router-link>
        </div>

    </div>
</div>
</template>