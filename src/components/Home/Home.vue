<script setup>
import { reactive } from "vue";
import HomeInformation from './SubHome/HomeInformation.vue';
import HomeTestimonial from './SubHome/HomeTestimonial.vue';
import HomeOurPartners from './SubHome/HomeOurPartners.vue';
const card = reactive({
    data: [
        {
            title: "User 1",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsam voluptate odio ducimus! Porro eum voluptatem illo, dolores, est vero, praesentium deleniti laudantium neque quidem natus animi quisquam fugit cumque."
        },
         {
            title: "User 2",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsam voluptate odio ducimus! Porro eum voluptatem illo, dolores, est vero, praesentium deleniti laudantium neque quidem natus animi quisquam fugit cumque."
        },
         {
            title: "User 3",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsam voluptate odio ducimus! Porro eum voluptatem illo, dolores, est vero, praesentium deleniti laudantium neque quidem natus animi quisquam fugit cumque."
        },
         {
            title: "User 4",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsam voluptate odio ducimus! Porro eum voluptatem illo, dolores, est vero, praesentium deleniti laudantium neque quidem natus animi quisquam fugit cumque."
        },
         {
            title: "User 5",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsam voluptate odio ducimus! Porro eum voluptatem illo, dolores, est vero, praesentium deleniti laudantium neque quidem natus animi quisquam fugit cumque."
        },
          {
            title: "User 6",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsam voluptate odio ducimus! Porro eum voluptatem illo, dolores, est vero, praesentium deleniti laudantium neque quidem natus animi quisquam fugit cumque."
        },
          {
            title: "User 7",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsam voluptate odio ducimus! Porro eum voluptatem illo, dolores, est vero, praesentium deleniti laudantium neque quidem natus animi quisquam fugit cumque."
        },
          {
            title: "User 8",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsam voluptate odio ducimus! Porro eum voluptatem illo, dolores, est vero, praesentium deleniti laudantium neque quidem natus animi quisquam fugit cumque."
        }
    ]
})
const recentCard = reactive({
    img: "https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    index: -1,
    data: [
        {
            img: "https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
         {
            img: "https://images.unsplash.com/photo-1602403839610-781506f8df47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
         {
            img: "https://images.unsplash.com/photo-1599580203920-c26318d9f0d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",
        },
         {
            img: "https://images.unsplash.com/photo-1629322368395-56302d40117f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fGhTUDZKeDh3NFo0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        },
         {
            img: "https://images.unsplash.com/photo-1646915877850-b94fdfde6bed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
         {
            img: "https://images.unsplash.com/photo-1646115362587-2179b79ca33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },

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
const ourService = reactive({
    data: [
        {
            name:"build-outline",
            title: "UI/UX Design",
            content: "Hydroderm is the highly desired anti-aging cream on"
        },
         {
            name:"images-outline",
            title: "UI/Web Design",
            content: "Hydroderm is the highly desired anti-aging cream on"
        },
         {
            name:"alarm-outline",
            title: "Motion Graphics",
            content: "Hydroderm is the highly desired anti-aging cream on"
        }, 
        {
            name:"phone-portrait-outline",
            title: "Mobile APP",
            content: "Hydroderm is the highly desired anti-aging cream on"
        },
         {
            name:"color-palette-outline",
            title: "Web Application",
            content: "Hydroderm is the highly desired anti-aging cream on"
        },
         {
            name:"logo-web-component",
            title: "Digital Marketing",
            content: "Hydroderm is the highly desired anti-aging cream on"
        }
    ]
})
const userTestimonial = reactive({
    data:[
        {
            name:'User 1',
            content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta magnam temporibus necessitatibus ut nam ab tenetur nemo voluptatibus libero, non ipsa minus, harum eos reprehenderit explicabo maiores sed autem eius.',
            img:'https://images.unsplash.com/photo-1648568714430-7092fa3377a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
        },
         {
            name:'User 2',
            content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta magnam temporibus necessitatibus ut nam ab tenetur nemo voluptatibus libero, non ipsa minus, harum eos reprehenderit explicabo maiores sed autem eius.',
            img:'https://images.unsplash.com/photo-1548586805-f69e7b816cbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=379&q=80',
        }, 
        {
            name:'User 3',
            content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta magnam temporibus necessitatibus ut nam ab tenetur nemo voluptatibus libero, non ipsa minus, harum eos reprehenderit explicabo maiores sed autem eius.',
            img:'https://images.unsplash.com/photo-1648587385042-b5e2d3965bc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        }
    ]
})

</script>
<template>

<div class="">
    <!-- Background -->
    <div class="w-[1200px] h-[500px] mx-auto relative">
        <img src="https://images.unsplash.com/photo-1648471981428-ede812604400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" class="fit-cover w-full h-full mx-auto " alt="">

        <div class="absolute left-[50px] top-[50%] -translate-y-2/4 text-white flex flex-col">
            <div class="font-semibold text-[30px] mb-2">Information Online</div>
            <div class="w-[400px] text-justify"
            
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit at aspernatur recusandae alias eveniet voluptate assumenda? Porro laboriosam inventore aspernatur nemo aliquam exercitationem. Labore vel odio ipsa facere, incidunt harum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel eius obcaecati eaque quam doloremque architecto iusto asperiores mollitia in, earum, error consequuntur quia cum nesciunt distinctio magni illum nemo.
            </div>
            <div class="flex mt-4 gap-x-5">

                <div class="p-2 rounded-lg bg-red-400">Learn more</div>
                <div class="p-2 rounded-lg bg-gray-400">Get start</div>
            </div>
        </div>
    </div>
    <!-- Features -->
    <div class=" mt-[100px] w-[1200px] mx-auto text-center ">
        <div class="text-[100px] font-semibold">Features</div>
        <div class="w-[1000px] text-[27px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur quidem architecto nisi praesentium veritatis nobis dolorem ducimus harum blanditiis corporis dolores itaque quasi cumque iure, deserunt iusto amet est.m</div>

        <!-- Card -->
        <div class="mt-[30px] grid grid-cols-4 gap-4">

            <div 
                class="flex flex-col hover:bg-gray-200 hover:shadow-inner bg-gray-100 rounded-lg p-4 text-left" 
                v-for="data in card.data" :key="data.title"
            
            >
                <div class="flex"><ion-icon size="large" name="paper-plane-outline"></ion-icon></div>
                <div class="text-[30px]">{{data.title}}</div>
                <div class="text-justify">{{data.content}}</div>
            </div>
         
        </div>
    </div>
    <!-- Recent word -->
    <div class="mt-5 bg-slate-200">
        <!-- Subcribe -->
        <div class="my-5 py-[100px] mx-auto w-[1000px] text-center">
            <div class="text-[100px] font-semibold">Recent Work</div>
            <div class="text-[30px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos vero ipsa earum. Quas ducimus omnis libero voluptatem velit error, doloremque at commodi labore architecto perspiciatis qui, consectetur magni? Praesentium, veritatis.</div>
        </div>
        <!-- Image -->
        <div class="grid grid-cols-3 w-[1200px] mx-auto relative">
            <!-- Card -->
            <div class=" relative" v-for="(data,i) in recentCard.data" :key="i" @mouseover="recentCard.index = i" @mouseleave="recentCard.index = -1">
                <img :src="data.img" class="w-full h-full fit-cover" alt="">
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
            <div v-if="showCard.status" class="absolute inset-0 flex items-center justify-center bg-slate-500 bg-opacity-70">
                <div @click="()=>showCard.handleCard('')" class="fixed z-20  top-[100px] bottom-2 w-[400px]">
                    <img :src="showCard.img" class="w-full h-full fit-cover rounded-[30px]" alt="">
                </div>
            </div>
        </div>
    </div>

    <!-- Our Service -->
    <div class=" mt-[100px] w-[1200px] mx-auto text-center ">
        <div class="text-[100px] font-semibold">Our Service</div>
        <div class="w-[1000px] mx-auto text-[25px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur quidem architecto nisi praesentium veritatis nobis dolorem ducimus harum blanditiis corporis dolores itaque quasi cumque iure, deserunt iusto amet est.m</div>

        <!-- Card -->
        <div class="mt-[30px] grid grid-cols-3 gap-4">

            <div 
                class="flex flex-rows items-center hover:bg-gray-200 hover:shadow-inner bg-gray-100 rounded-lg p-4 text-left" 
                v-for="data in ourService.data" :key="data.title"
            >
                <div class="flex"><ion-icon size="large" :name="data.name"></ion-icon></div>
                <div class=" ml-[20px] text-justify">
                    <div class="text-[20px] font-semibold">{{data.title}}</div>
                    <div class="">{{data.content}}</div>
                </div>
            </div>
         
        </div>
    </div>

    <div class="mt-[100px]"></div>
    <HomeInformation></HomeInformation>

    <div class="mt-[10px]"></div>
    <HomeTestimonial :Data="userTestimonial.data"/>

    <div class="mt-[10px]"></div>
    <HomeOurPartners></HomeOurPartners>
   
</div>
</template>