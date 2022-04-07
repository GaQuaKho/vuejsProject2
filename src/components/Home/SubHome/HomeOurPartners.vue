<script setup>
import { onBeforeMount, reactive } from "vue";
const icon = reactive({
    data: [
        "https://demo.themeum.com/wordpress/corlate/wp-content/uploads/2018/09/brand-2.png",
        "https://demo.themeum.com/wordpress/corlate/wp-content/uploads/2018/09/brand-1.png",
        "https://demo.themeum.com/wordpress/corlate/wp-content/uploads/2018/09/brand-3.png",
        "https://demo.themeum.com/wordpress/corlate/wp-content/uploads/2018/09/brand-5.png",
        "https://demo.themeum.com/wordpress/corlate/wp-content/uploads/2018/09/brand-3.png"
    ]
})
</script>
<template>
<div class="relative">
    <div class="h-[800px]">
        <img class="w-full h-full fit-contain" src="https://images.unsplash.com/photo-1648794913383-48f06035de1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="">
    </div>

 
    <div class="absolute top-[50%] -translate-y-2/4 left-[50%] -translate-x-2/4  w-[1200px] text-white">
        <div class="flex flex-col">
            <div class="">
                <div class="text-center text-[100px] font-semibold">Our Partners</div>
                <div class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur delectus minima veniam iusto recusandae eos nihil dicta? Minima architecto cum alias cumque odio nam iure! Harum ipsa deleniti at!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugit, incidunt animi accusamus, assumenda omnis id sequi doloremque ratione iusto dignissimos, alias dolores? Aliquid veritatis libero officia iusto, amet natus.
                </div>
            </div>
            <div class="mt-[100px]"></div>
            <div class="grid grid-cols-5 items-center text-white gap-[150px]">
                <div class="h-[100px]" v-for="(img,index) in icon.data" :key="index">
                    <img :src="img" class="w-full h-full" alt="">
                </div>
            </div>
        </div>
  
    </div>

</div>
</template>