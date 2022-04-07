<script setup>
import { reactive } from "@vue/reactivity";

const data = reactive({
   payload: [
      {
         title:'START UP',
         price: 19,
      },
      {
          title:'STANDARD',
         price: 49,
      },
      {
          title:'PREMIUM',
         price: 99,
      }
   ]
})
</script>
<template>
<div class="">
  <div class="h-[200px] relative">
        <img src="https://images.unsplash.com/photo-1648900451399-63bf1d6c0621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="w-full h-full fit-cover" alt="">
        <div class="absolute top-[50%] -translate-y-2/4 left-[50%] -translate-x-2/4 text-white text-[100px] font-semibold"> Pricing </div>
   </div>

   <!-- Description -->
   <div class="w-[800px] mx-auto text-center">
      <div class="text-[100px] font-semibold">Pricing Table</div>
      <div class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque doloribus, ipsum id non commodi, ut, distinctio veniam consectetur natus a minus vero quas culpa. Consectetur quaerat ut inventore. Quas, tenetur?</div>
     

   </div>

   <!-- Card -->
   <div class="mt-[50px]"></div>
   <div class="grid grid-cols-3  gap-5 w-[1200px] mx-auto text-center">
         <!-- Card -->
         <div class="bg-gray-300 p-3 rounded-lg" v-for="(item,index) in data.payload" :key="index">
            <div class="">{{item.title}}</div>
            <div class="flex flex-col items-center">
               <div class="flex items-center">
                  <div class="text-[30px] font-medium">$</div>
                  <div class="text-[100px] font-semibold">{{item.price}}</div>
                  <div class="text-[30px] font-medium">/ Mo</div>
               </div>
            </div>
            <div class="">One year support</div>
            <div class="mt-[20px]"></div>
            <div class="">Unlimited Free addons</div>
            <div class="mt-[20px]"></div>
            <div class="">Five site support</div>
            <div class="mt-[20px]"></div>
            <div class="flex flex-col items-center">
               <div class="border-black text-[20px] font-semibold border-[1px] rounded-lg transition-all hover:bg-black hover:cursor-pointer hover:text-white py-1 px-[30px]">BUY</div>
            </div>
         </div>

   </div>
</div>
</template>