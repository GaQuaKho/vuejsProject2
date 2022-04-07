<script setup>
import { reactive } from "@vue/reactivity";

</script>
<template>
<div class="">
  <div class="mt-[100px]"></div>
  <div class="flex flex-col items-center">
    <div class="text-[100px] font-semibold">Drop Your Message</div>
    <div class="text-center text-[20px]">All users on MySpace will know that there are millions of people out there. Every day 
        besides so many people joining this community.</div>
  </div>
  <div class="mt-[50px]"></div>
  <div class="w-[1200px] mx-auto">
    <form action="#" method="">
      <div class="grid grid-cols-2 gap-[50px]">

        <div class="">
          <div class="text-[50px] font-semibold">Name</div>
          <input type="text" class="w-full outline-none p-2 border-black border-b-[3px] transition-all focus:border-red-500" placeholder="Name">
        </div>
        <div class="">
          <div class="text-[50px] font-semibold">Subject</div>
          <input type="text" class="w-full outline-none p-2 border-black border-b-[3px] transition-all focus:border-red-500" placeholder="Subject">
        </div>
        <div class="">
          <div class="text-[50px] font-semibold">Email</div>
          <input type="text" class="w-full outline-none p-2 border-black border-b-[3px] transition-all focus:border-red-500" placeholder="Email">
        </div>
        <div class="">
          <div class="text-[50px] font-semibold">Phone</div>
          <input type="text" class="w-full outline-none p-2 border-black transition-all focus:border-red-500 border-b-[3px]" placeholder="Phone">
        </div>

      </div>

    <div class="mt-[20px]"></div>
    <div class="text-[50px] font-semibold">Comment</div>
    <textarea class="w-full p-2 outline-none border-[3px] h-[300px] rounded-lg transition-all border-black focus:border-red-500" placeholder="Comment"/>

    <div class="mt-[20px]"></div>
    <div class="flex flex-col items-center">
      <input type="submit" class="bg-red-500 transition-all text-[30px] hover:cursor-pointer text-white font-semibold px-[300px] rounded-lg py-[10px]" value="Gửi">
    </div>

    </form>

  </div>
</div>
</template>