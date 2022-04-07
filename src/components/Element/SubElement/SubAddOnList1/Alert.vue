<script setup>
import { onBeforeMount, reactive } from "vue";
const dataAlert = reactive({
    payload : [],
    handlePayload : function(index){
        this.payload.splice(index,1)
    }
})

const {Payload} =defineProps({
    Payload: Array
})
onBeforeMount(()=>{
    dataAlert.payload = [...Payload]
})
</script>

<template>
<div class="">
    <div class="text-center text-[100px] font-semibold">Alert</div>
        <div class="grid grid-cols-2 gap-6 w-[1200px] mx-auto">
            <div class="bg-red-200 p-2 rounded-lg" v-for="(item,index) in dataAlert.payload" :key="index" >
                <div class="text-[50px] items-center font-semibold flex justify-between">
                    <div class="">

                    {{item.title}}
                    </div>
                    <div class="flex hover:bg-white p-2  rounded-[100%] hover:cursor-pointer text-black font-semibold "
                        @click="()=>dataAlert.handlePayload(index)"
                    >
                        <ion-icon size="large" name="close-outline"></ion-icon>
                    </div>
                    
                    </div>
                <div class="">{{item.content}}</div>
            </div>

        </div>
</div>
</template>