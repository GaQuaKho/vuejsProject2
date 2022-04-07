<script setup>
import { reactive } from '@vue/reactivity';
import { onBeforeMount } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import {useStore} from 'vuex';
const {state} = useStore();
const route = useRoute();
const detailBlog = reactive({
    data:{},
    refer: []
})

const {push,replace} = useRouter()
const {domain} = reactive({
    domain: window.location.host
})


onBeforeMount(()=>{
    detailBlog.data = state.StoreBlog.data.filter(item=>item.id==route.params.id)[0]
    detailBlog.refer = state.StoreBlog.data.slice(state.StoreBlog.data.length-5,state.StoreBlog.data.length-1)
   
})
</script>
<template>
<div class="">
    <div class="h-[200px] relative">
            <img src="https://images.unsplash.com/photo-1648975498404-e438dc69bbea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" class="w-full h-full fit-cover" alt="">
            <div class="absolute top-[50%] -translate-y-2/4 left-[50%] -translate-x-2/4 text-white text-[100px] font-semibold"> Detail Blog </div>
    </div>
    <div class="mt-[50px]"></div>
    <div class="w-[1200px] mx-auto flex gap-x-12">
        <!-- Left -->
        <div class="flex flex-col w-[700px]">
            <div class="" >
                <!-- Image -->
                <div class=" ">
                    <img :src="detailBlog.data.img" class="w-full h-full fit-cover" alt="">
                </div>


                <div class="mt-[20px]"></div>
                <!-- Category -->
                <div class="flex ">
                    <div class="p-2 text-[20px] font-medium">Category:</div>
                    <div class="ml-[5px] "></div>
                    
                    <div class="flex" v-for="(subitem,index) in detailBlog.data.category" :key="index">
                        <div class="hover:bg-red-400 p-2 rounded-lg hover:text-white text-[20px] font-medium hover:cursor-pointer"
                        >{{subitem.toUpperCase()}}</div>
                    </div>
                </div>

                <!-- Title -->
                <div class="text-[40px] ml-[20px] font-semibold">{{detailBlog.data.title}}</div>

                <!-- Content -->
                <div class="ml-[20px]">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas labore sapiente rerum beatae officia temporibus qui laborum numquam ipsum voluptatum eius, obcaecati deserunt illo quos eos placeat debitis nobis repudiandae!
                </div>
                <div class="ml-[20px]">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas labore sapiente rerum beatae officia temporibus qui laborum numquam ipsum voluptatum eius, obcaecati deserunt illo quos eos placeat debitis nobis repudiandae!
                </div>
                <div class="ml-[20px]">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas labore sapiente rerum beatae officia temporibus qui laborum numquam ipsum voluptatum eius, obcaecati deserunt illo quos eos placeat debitis nobis repudiandae!
                </div>
                <div class="mt-[50px]"></div>
                <div class="grid grid-cols-5 gap-7 ml-[20px]">
                    <div class="flex py-[5px] flex-col items-center bg-blue-700 text-white rounded-lg hover:cursor-pointer">
                        <ion-icon size="large" name="logo-facebook"></ion-icon>
                    </div>

                     <div class="flex py-[5px] flex-col items-center bg-blue-400 text-white rounded-lg hover:cursor-pointer">
                        <ion-icon size="large" name="logo-twitter"></ion-icon>
                    </div>

                     <div class="flex py-[5px] flex-col items-center bg-orange-500 text-white rounded-lg hover:cursor-pointer">
                        <ion-icon size="large" name="logo-google"></ion-icon>
                    </div>

                     <div class="flex py-[5px] flex-col items-center bg-red-500 text-white rounded-lg hover:cursor-pointer">
                        <ion-icon size="large" name="logo-pinterest"></ion-icon>
                    </div>

                     <div class="flex py-[5px] flex-col items-center bg-blue-500 text-white rounded-lg hover:cursor-pointer">
                        <ion-icon size="large" name="logo-linkedin"></ion-icon>
                    </div>
                </div>
            </div>
        </div> 

        <!-- Right -->
        <div class="flex flex-col w-[500px]">
            <div class="text-center text-[50px] font-semibold">Reference Post</div>

            <div class="" v-for="(item,index) in detailBlog.refer" :key="index">
            
                <a :href="'http://'+domain+'/blog/'+item.id">
                
                    <div  class="mt-[30px] bg-gray-300 rounded-lg pb-3">
                        <!-- Image -->
                        <div class=" ">
                            <img :src="item.img" class="w-full h-full fit-cover rounded-t-lg" alt="">
                        </div>


                        <div class="mt-[20px]"></div>
                        <!-- Category -->
                        <div class="flex ">
                            <div class="p-2 text-[15px] font-medium">Category:</div>
                            <div class="ml-[5px] "></div>
                            
                            <div class="flex" v-for="(subitem,index) in item.category" :key="index">
                                <div class="hover:bg-red-400 p-2 rounded-lg hover:text-white text-[15px] font-medium hover:cursor-pointer"
                                >{{subitem.toUpperCase()}}</div>
                            </div>
                        </div>

                        <!-- Title -->
                        <div class="text-[20px] ml-[20px] font-semibold">{{item.title}}</div>

                    </div>
                </a>
                
           

           
             
            </div>
        </div>
  
    </div>
</div>
</template>