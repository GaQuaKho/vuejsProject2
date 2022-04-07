<script setup>
import { isTemplateNode } from "@vue/compiler-core";
import { reactive } from "@vue/reactivity";
import { onBeforeMount, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import axios from 'axios';
const data = reactive({
  name:'ShowAll',
  data: [],
  category: [],
  handleData: function(eachCategory) {
   
    
    if(eachCategory==="Show all") {
      this.category = this.data;
      console.log(this.category)
    } else {
      this.category = this.data.filter(item=>item.category==`${eachCategory.toLowerCase()}`)
    }
  }
})
const {state ,commit} = useStore();
const toggleTitleCard = reactive({
  payload:'',
  setPayload:function(e) {
    commit('StorePortfolio/handlePayload',e)
    this.payload = e
  }
})
onBeforeMount(()=>{
  commit('StorePortfolio/handlePayload','aaaaaaaa')
 axios.get('https://fakestoreapi.com/products')
    .then(item=>{ 
      commit('StorePortfolio/setPayload',item.data)
    })
})


</script>
<template>
<div class="">
  <!-- Header Portfolio -->
  <div class="h-[200px] relative">

        <img src="https://images.unsplash.com/photo-1647937534872-941667736d00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" class="w-full h-full fit-cover" alt="">

        <div class="absolute top-[50%] -translate-y-2/4 left-[50%] -translate-x-2/4 text-white text-[100px] font-semibold"
        > Portfolio </div>

  </div>

  <!-- Recent Work -->
  <div class="mt-[50px]"></div>
  <div class="flex flex-col items-center w-[1000px] mx-auto">
     <div class="text-[100px] font-semibold">Recent Work</div>
     <div class="text-[25px] text-center font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem odio ab animi ex accusantium deleniti. Inventore voluptates deleniti illum labore, velit beatae magnam ipsa pariatur mollitia, asperiores veniam iste!</div>
  </div>


  <div class="mt-[50px]"></div>
  <div class="w-[1200px] mx-auto flex flex-col">
    <!-- Title -->
    <div class="flex gap-x-5 text-[30px] font-medium mx-auto">
      <div class="rounded-lg p-2 "
        @click="(e)=>toggleTitleCard.setPayload(e.target.innerText)"
        :class="{'bg-red-500' : toggleTitleCard.payload === `Show all` }"
      >Show all</div>
      <div class="rounded-lg p-2"
        @click="(e)=>toggleTitleCard.setPayload(e.target.innerText)"
        :class="{'bg-red-500' : toggleTitleCard.payload === `Men's clothing` }"
      
      >Men's clothing</div>
      <div class="rounded-lg p-2"
        @click="(e)=>toggleTitleCard.setPayload(e.target.innerText)"
        :class="{'bg-red-500' : toggleTitleCard.payload === `Women's clothing` }"
      >Women's clothing</div>

      <div class="rounded-lg p-2"
        @click="(e)=>toggleTitleCard.setPayload(e.target.innerText)"
        :class="{'bg-red-500' : toggleTitleCard.payload === `Jewelery` }"
      >Jewelery</div>

      <div class="rounded-lg p-2"
        @click="(e)=>toggleTitleCard.setPayload(e.target.innerText)"
        :class="{'bg-red-500' : toggleTitleCard.payload === `Electronics` }"
      >Electronics</div>
    </div>

    <!-- Sub Card -->
    <div class="mt-[50px]"></div>
    <div class="grid grid-cols-3 gap-5">
      <!-- Each Card -->
      <div class="" v-for="(item,index) in state.StorePortfolio.currentPayload" :key="index">
        <!-- Img -->
        <div class="rounded-lg h-[300px]">
          <img :src="item.image" class="w-full h-full fit-cover" alt="">
        </div>

        <div class="text-center py-[10px] text-[20px] font-semibold">{{item.title}}</div>
        <!-- Rate count -->
        <div class="flex justify-between items-center">
          <div class="flex items-center">Rate : {{item.rating.rate}}
            <div class="ml-[20px] "></div>
            <div class="flex text-yellow-500"><ion-icon size="large" name="star-outline"></ion-icon></div>
          </div>

          <div class="">Count : {{item.rating.count}}</div>
        </div>
        
        <div class="">Giá: {{item.price}} $</div>
        <div class="">{{item.description}}</div>

      </div>

    </div>

  </div>

</div>
</template>