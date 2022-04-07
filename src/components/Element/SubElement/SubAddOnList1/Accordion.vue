<script setup>
import { reactive } from "@vue/reactivity";
import { onBeforeMount } from "@vue/runtime-core";
const {Payload} = defineProps({
    Payload:Array
})
const dataAccordion = reactive({
    payload: [],
    index:0,
    setIndex : function(index) {
        if(this.index!=index) {
            this.index= index;
        }else {
            this.index=-1
        }
    }
})
onBeforeMount(()=>{
    dataAccordion.payload= Payload;
})

</script>
<template>
<div class="">
    <div class="text-center text-[100px] font-semibold">Accordion</div>
   <div class="w-[1200px] mx-auto">
       <div class="flex flex-col gap-5">
           <div class="p-2 bg-slate-500 rounded-lg hover:cursor-pointer"  v-for="(item,index) in dataAccordion.payload" :key="index" @click="()=>dataAccordion.setIndex(index)">
               <div class="text-[30px] text-white flex justify-between items-center">
                   <div class=""> {{item.title}}</div>
                   <div class="flex" v-if="dataAccordion.index!=index"> <ion-icon size="large" name="add-outline"></ion-icon></div>
                   <div class="flex" v-else> <ion-icon size="large" name="remove-outline"></ion-icon></div>

               </div>
               <div class="text-white"  v-if="dataAccordion.index==index">{{item.content}}</div>
           </div>
       </div>
     
   </div>
</div>
</template>