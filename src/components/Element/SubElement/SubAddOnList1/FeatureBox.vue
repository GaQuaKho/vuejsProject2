<script setup>
import { reactive } from "@vue/reactivity";

const dataFeatureBox = reactive({
    data: [
        {
            icon:'flashlight-outline',
            title:'Discover Icons',
            color:'text-red-500',
            content:'Do you want to download free song for ipod if so, reading this article could'
        },
        {
            icon:'star-outline',
            title:'Exclusive Design',
            color:'text-green-500',

            content:'Do you want to download free song for ipod if so, reading this article could'
        },
        {
            icon:'cube-outline',
            title:'WordPress Builder',
            color:'text-blue-500',

            content:'Do you want to download free song for ipod if so, reading this article could'
        },
        {
            icon:'film-outline',
            title:'GOOD DESIGN IS HONEST',
            color:'text-orange-500',

            content:'Do you want to download free song for ipod If so, reading this article could save you from getting in to lot trouble'
        },
        {
            icon:'tv-outline',
            title:'DESIGN CREATES CULTURE',
            color:'text-green-500',
            content:'It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game'
        },
        {
            icon:'star-outline',
            title:'CULTURE SHAPES VALUES',
            color:'text-blue-500',
            content:'Usage of the Internet is becoming more common due to rapid advancement of technology and the globalization'
        }
    ]
})
</script>

<template>
<div class="">
    <div class="text-[100px] text-center font-semibold">Feature Box</div>
    <div class="w-[1200px] mx-auto">
        <div class="grid grid-cols-2 gap-10">
            <div class="">
                <div class="text-[30px]">INNOVATIVE LAYOUTS & BLOCKS</div>
                <div class="mt-[30px] "></div>
                <div class="text-[40px] font-medium">Find Industry-specific layouts for classy free</div>
                <div class="mt-[30px]"></div>

                <div class="">You can get a professional looking website ready and running in minutes. The layouts are built with keeping the latest trends in mind. We use the best images, design layouts, and features that ensure you are able to showcase every aspect of your website lucratively.</div>
                <div class="mt-[30px]"></div>

                <div class="p-2 bg-red-300 hover:bg-blue-500 hover:cursor-pointer text-center rounded-lg font-semibold text-white">GET START</div>
            </div>
            <div class="">
                <div class="text-[30px]">INNOVATIVE LAYOUTS & BLOCKS</div>
                <div class="mt-[30px] "></div>
                <div class="text-[40px] font-medium">Find Industry-specific layouts for classy free</div>
                <div class="mt-[30px]"></div>

                <div class="">You can get a professional looking website ready and running in minutes. The layouts are built with keeping the latest trends in mind. We use the best images, design layouts, and features that ensure you are able to showcase every aspect of your website lucratively.</div>
                <div class="mt-[30px]"></div>

                <div class="p-2 bg-red-300 hover:bg-blue-500 hover:cursor-pointer text-center rounded-lg font-semibold text-white">GET START</div>
            </div>
          
        
        </div>
        <div class="mt-[50px]"></div>
        <div class="grid grid-cols-3 gap-[100px] text-center">
            <div class="" v-for="(data,index) in dataFeatureBox.data" :key="index" :class="data.color">
            
                <div class="flex flex-col items-center">
                    <ion-icon size="large" :name="data.icon"></ion-icon>
                </div>
                <div class="text-[30px] font-semibold">{{data.title}}</div>
                <div class="text-gray-500">{{data.content}}</div>
            </div>

        </div>
   
    </div>
</div>
</template>