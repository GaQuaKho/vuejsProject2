<script setup>
import {reactive} from 'vue';
const Data = defineProps({
    Data: Array
})
</script>
<template>
<div class="text-center">
 

  
    <div class="flex flex-col w-[1200px] mx-auto">
        <div class="flex flex-col items-center">
            <div class="text-[100px] font-semibold">Our Team</div>
            <div class="w-[700px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A ut voluptas perferendis saepe quaerat ad expedita. Magnam delectus doloremque quia voluptatem porro, quae id distinctio sapiente, nisi perspiciatis odio fugit.
            </div>
        </div>
        <div class="mt-[30px]"></div>
        <div class="grid grid-cols-3 gap-9">
            <!-- Card -->
            <div class="flex flex-col bg-slate-400 rounded-lg" v-for="(data,index) in Data.Data" :key="index">
                <div class="">
                    <img :src="data.img" class="w-full h-full fit-cover" alt="">
                </div>
                <div class="mt-[10px]"></div>
                <div class="text-[30px] font-semibold">{{data.name}}</div>
                <div class="mt-[10px]"></div>
                <div class="text-[20px]">{{data.label}}</div>
                <div class="mt-[10px]"></div>
                <div class="flex w-[200px] justify-between mx-auto">
                    <div class="flex"><ion-icon size="large" name="logo-facebook"></ion-icon></div>
                    <div class="flex"><ion-icon size="large" name="logo-google"></ion-icon></div>
                    <div class="flex"><ion-icon size="large" name="logo-twitter"></ion-icon></div>
                </div>
                <div class="mb-[10px]"></div>
            </div>

        </div>

    </div>
</div>
</template>