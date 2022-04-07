<script setup>
import { onBeforeMount, reactive } from "vue";
const User = defineProps({
    Data : Array
})

</script>
<template>
<div class="">
    <div class="w-[900px] mx-auto text-center">
        <div class="text-[100px] font-semibold">Testimonial</div>
        <div class="text-[25px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consectetur necessitatibus nobis adipisci praesentium tempore hic facilis ex laborum. Omnis exercitationem ex totam officia distinctio culpa, sit eius libero? Inventore!</div>
    </div>
    <div class="mt-[50px]"></div>
    <div class="grid grid-cols-3 gap-5 w-[1200px] mx-auto">

        <div class="flex flex-col bg-slate-200 items-center rounded-lg p-5"
            v-for="(data,index) in User.Data " :key="index"
        >
            <div class="h-[100px]   w-[100px]">
                <img :src="data.img" class="w-full rounded-[1000px] h-full fit-contain" alt="">
            </div>
            <div class="text-[30px] font-semibold">{{data.name}}</div>
            <div class=" text-center">{{data.content}}</div>
        </div>

    </div>

</div>
</template>