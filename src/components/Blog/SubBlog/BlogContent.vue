<script setup>
import { reactive } from "@vue/reactivity";
import { onBeforeMount } from "@vue/runtime-core";
const {blogData} = defineProps({
    blogData:Array
})
const pagesSplit = reactive({
    length: Math.ceil(blogData.length/3),
    index:0,
    data: [],
    handleData : function(value){
        this.data = blogData.slice(value*3,value*3+3)
        this.length = Math.ceil(blogData.length/3)
        this.index=value
    },
    setData: function(value) {
        this.data = value
        this.length = Math.ceil(blogData.length/3)
        this.index=0
    },
    setCategory: function(value,index) {
        const data = this.data.filter(item=>item.category.includes(value))
        this.data = data;
        // this.length=data.length;
        // if(index>this.length) {

        //     this.index= 1;
        // } else {
        //     this.index= index;
        // }
    }
})
onBeforeMount(()=>{
    pagesSplit.setData(blogData.slice(0,3))
})

const content = reactive({
    payload:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vitae sint. Neque eius iste eligendi dolor magni cupiditate non, veniam asperiores. Ullam architecto ipsam dignissimos ut maxime consectetur officiis aspernatur!'
})
</script>
<template>
<div class="">
    <div class="flex w-[1200px] mx-auto">
        
        <!-- Blog -->


        <div class="flex flex-col w-full">
            <div class="" v-for="(item,index) in pagesSplit.data" :key="index">
                <div class="mt-[50px]"></div>
                <a :href="'http://localhost:3000/blog/'+item.id">
                <div class=" ">
                    <img :src="item.img" class="w-full h-full fit-cover" alt="">
                </div>
                </a>
                <div class="mt-[20px]"></div>
                <div class="flex ">
                    
                    <div class="p-2 text-[20px] font-medium">Category:</div>
                    <div class="ml-[5px] "></div>
                    
                    <div class="flex" v-for="(subitem,index) in item.category" :key="index">
                        <div class="hover:bg-red-400 p-2 rounded-lg hover:text-white text-[20px] font-medium hover:cursor-pointer" v-if="index==item.category.length-1"

                            @click="()=>pagesSplit.setCategory(subitem)"
                        >{{subitem.toUpperCase()}}</div>
                        <div class="mr-[5px] hover:bg-red-400 hover:text-white text-[20px] font-medium p-2 rounded-lg hover:cursor-pointer" @click="()=>pagesSplit.setCategory(subitem)" v-else>{{subitem.toUpperCase()}}, </div>
                     

                    </div>
                </div>
                 <a :href="'http://localhost:3000/blog/'+item.id" class="">
                 
                <div class="text-[40px] ml-[20px] font-semibold">{{item.title}}</div>
                 </a>

                <div class="ml-[20px]">
                    {{content.payload.slice(0,80)+'....'}}
                      <a :href="'http://localhost:3000/blog/'+item.id" class="text-blue-500">xem thêm</a>
                </div>
            </div>
        </div> 

        <!-- Reference -->
    </div>
        <div class="flex flex-row w-[1200px] mx-auto items-center justify-center gap-[20px]" >
            <div class="flex px-2 py-1 bg-red-500 rounded-lg" 
            :class="{'bg-blue-300':pagesSplit.index===item-1}"
            v-for="(item) in pagesSplit.length" @click="()=>pagesSplit.handleData(item-1)" :key="item">{{item}}</div>
        </div>

</div>
</template>