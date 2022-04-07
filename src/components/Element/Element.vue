<script setup>
import { reactive } from "@vue/reactivity";
import AddOnList1 from './SubElement/AddOnList1.vue';
import AddOnList2 from './SubElement/AddOnList2.vue';
import AddOnList3 from './SubElement/AddOnList3.vue';
import AddOnList4 from './SubElement/AddOnList4.vue';

const addOnList = reactive({
    title:'addOnList1',
    setTitle: function(value) {
        this.title =  value;
    }
})
 
</script>
<template>
<div class="">
    <div class="h-[200px] relative">
        <img src="https://images.unsplash.com/photo-1649035075923-9301d4e01044?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" class="w-full h-full fit-cover" alt="">
        <div class="absolute top-[50%] -translate-y-2/4 left-[50%] -translate-x-2/4 text-white text-[100px] font-semibold"> Accordion </div>
    </div>
    <div class="mt-[100px]"></div>
    <div class="w-[1200px] grid grid-cols-4 gap-10 mx-auto text-center">
        <div class="bg-slate-400 py-2 rounded-lg text-white font-semibold" :class="{'bg-red-400':addOnList.title==='addOnList1'}"
            @click="()=>addOnList.setTitle('addOnList1')"
        >Accordion</div>
        <div class="bg-slate-400 py-2 rounded-lg text-white font-semibold" :class="{'bg-red-400':addOnList.title==='addOnList2'}"
            @click="()=>addOnList.setTitle('addOnList2')"
        >Alert</div>
        <div class="bg-slate-400 py-2 rounded-lg text-white font-semibold" :class="{'bg-red-400':addOnList.title==='addOnList3'}"
            @click="()=>addOnList.setTitle('addOnList3')"
        >Image</div>
        <div class="bg-slate-400 py-2 text-white font-semibold  rounded-lg" :class="{'bg-red-400':addOnList.title==='addOnList4'}"
            @click="()=>addOnList.setTitle('addOnList4')"
        >Feature Box</div>
    </div>
    <div class="mt-[50px]"></div>
    <div v-if="addOnList.title==='addOnList1'" class="">
        <AddOnList1/>
    </div>
    <div v-else-if="addOnList.title==='addOnList2'" class="">
        <AddOnList2/>
    </div>
    <div v-else-if="addOnList.title==='addOnList3'" class="">
        <AddOnList3/>
    </div>
    <div v-else class="">
        <AddOnList4/>
    </div>
</div>
</template>