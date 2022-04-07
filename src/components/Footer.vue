<script setup>
import {useStore} from 'vuex';

const {state, commit} = useStore();

 
</script>
<template>
<div class="bg-gray-200">

    <div class="w-[1200px] py-[50px] px-[30] mx-auto grid grid-cols-4 gap-x-[20px]">
        <div class="flex flex-col gap-y-4">
           
            <div class="flex flex-col items-center">
                <div class="flex">
                    <ion-icon size="large" name="logo-vue"></ion-icon>
                </div>
            </div>
        
            <div class="">{{state.FooterStore.infor.describe}}</div>
            <div class="">Email: {{state.FooterStore.infor.email}}</div>
            <div class="">Fax: {{state.FooterStore.infor.fax}}</div>
            <div class="">Phone: {{state.FooterStore.infor.phone}}</div>
        </div>


        <div class="">
            <div class="text-[20px] font-semibold">Company</div>
            <div class="mt-[23px]"></div>
            <div class="flex flex-col gap-y-3">
                <div class="hover:text-red-500 hover:cursor-pointer py-2 px-1" v-for="(data,index) in state.FooterStore.company" :key="index"> {{data}}</div>

            </div>
        </div>

        <div class="">
            <div class="text-[20px] font-semibold">Developer</div>
            <div class="mt-[23px]"></div>
            <div class="flex flex-col gap-y-3">
                <div class="hover:text-red-500 hover:cursor-pointer py-2 px-1" v-for="(data,index) in state.FooterStore.developer" :key="index"> {{data}}</div>

            </div>
        </div>

        <div class="">
            <div class="text-[20px] font-semibold">Our Partner</div>
            <div class="mt-[23px]"></div>
            <div class="flex flex-col gap-y-3">
                <div class="hover:text-red-500 hover:cursor-pointer py-2 px-1" v-for="(data,index) in state.FooterStore.ourPartner" :key="index"> {{data}}</div>

            </div>

        </div>
    </div>

</div>
<div class="h-[5px] bg-red-500"></div>
<div class="py-[30px] bg-gray-400 px-[50px] flex justify-between">
    <div class="">© 2018 Corlate. All Rights Reserved.</div>
    <div class="flex gap-x-10">
        <div class="hover:text-red-500 hover:cursor-pointer font-semibold">About</div>
        <div class="hover:text-red-500 hover:cursor-pointer font-semibold">Faq</div>
        <div class="hover:text-red-500 hover:cursor-pointer font-semibold">Contact</div>
    </div>
</div>
</template>