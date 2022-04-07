<script setup>
import {reactive} from 'vue';
import AboutOurTeam from './SubAbout/AboutOurTeam.vue';
const recentCard = reactive({
    img: "https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    index: -1,
    data: [
        {
            img: "https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        }

    ]
})
const showCard = reactive({
        status: false,
        img: '',
        handleCard : async function(e){
            await(()=>{})()
            this.status = !this.status
            this.img=e
        },
    })
const dataAboutOurTeam = reactive({
    data: [
        {
            img:'https://demo.themeum.com/wordpress/corlate/wp-content/uploads/2018/09/team1.jpg',
            name:'John Doe',
            label:'Creative Designer'
        },
          {
            img:'https://demo.themeum.com/wordpress/corlate/wp-content/uploads/2018/09/team2.jpg',
            name:'Isabelle Dean',
            label:'Creative Designer'
        },
          {
            img:'https://demo.themeum.com/wordpress/corlate/wp-content/uploads/2018/09/team3.jpg',
            name:'Mike Kennedy',
            label:'Creative Designer'
        },
          {
            img:'https://demo.themeum.com/wordpress/corlate/wp-content/uploads/2018/09/team4.jpg',
            name:'Edwin Gross',
            label:'Creative Designer'
        },
          {
            img:'https://demo.themeum.com/wordpress/corlate/wp-content/uploads/2018/09/team5.jpg',
            name:'Mable Schwartz',
            label:'Creative Designer'
        },
          {
            img:'https://demo.themeum.com/wordpress/corlate/wp-content/uploads/2018/09/team6.jpg',
            name:'Adele Washington',
            label:'Creative Designer'
        }
    ]
})
</script>
<template>
<div class="text-center">
    <!-- Header About -->
    <div class="h-[200px] relative">
        <img src="https://images.unsplash.com/photo-1603065226404-aa3c955eb5aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="w-full h-full fit-cover" alt="">
        <div class="absolute top-[50%] -translate-y-2/4 left-[50%] -translate-x-2/4 text-white text-[100px] font-semibold"> About </div>
    </div>

    <!-- Who we are -->
    <div class="mt-[30px]"></div>
    <div class="flex w-[1200px] mx-auto">
            <div class=" w-[300px] mx-auto relative">
                <!-- Card -->
                <div class=" relative" v-for="(data,i) in recentCard.data" :key="i" @mouseover="recentCard.index = i" @mouseleave="recentCard.index = -1">
                    <img :src="data.img" class="w-full h-full fit-cover rounded-lg" alt="">
                    <!-- Show camera -->
                    <div v-if="recentCard.index==i" class="absolute z-1  inset-0 bg-slate-500 bg-opacity-50 flex items-center justify-center">
                        <div class="w-[100px] h-[100px] flex items-center justify-center bg-orange-300 rounded-[1000px]">
                            <div class="flex" @click="()=>showCard.handleCard(data.img)">
                                <ion-icon size="large" name="videocam-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Detail card -->
                <div v-if="showCard.status" class="absolute inset-0 flex items-center justify-center bg-slate-400 bg-opacity-70">
                    <div @click="()=>showCard.handleCard('')" class="fixed z-20  top-[100px] bottom-2 w-[400px]">
                        <img :src="showCard.img" class="w-full h-full fit-cover rounded-[30px]" alt="">
                    </div>
                </div>
            </div>
            <div class="w-[900px] p-10">
                <div class="text-[100px] font-semibold">Who we are</div>
                <div class="">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, impedit, quam reprehenderit ratione corrupti similique officiis nisi veritatis placeat totam ab odit, incidunt voluptatibus fugit rem in quo dolorem aut.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates itaque at nulla quo labore laborum similique quis nobis excepturi, perspiciatis aperiam veniam nihil eius, magnam laudantium magni quia est placeat.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde inventore nulla accusantium labore non, laborum iusto. A eum assumenda perspiciatis rem ipsa tenetur sequi deserunt, aut incidunt nihil tempora excepturi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias sit molestiae dolores suscipit eveniet, sunt nihil maiores quos quae ipsam placeat. Commodi quidem cupiditate qui repellendus recusandae quas ad.

                </div>
            </div>
    </div>

    <div class="mt-[30px]"></div>
    <AboutOurTeam :Data="dataAboutOurTeam.data"/>
</div>
</template>