<script setup>
import { reactive } from "@vue/reactivity";

const Information = reactive({
    index:-1,
    setIndex: async function(index) {
        await(()=>{})()
        this.index = index
        console.log(index);
    },
    data: [
        {
            title: "Responsive Design",
            content:"Responsive Design Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque nesciunt mollitia nemo, consectetur deserunt blanditiis illo, voluptas quas corporis quod earum recusandae ut fuga dicta repellendus aperiam, libero expedita.Responsive Design Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque nesciunt mollitia nemo, consectetur deserunt blanditiis illo, voluptas quas corporis quod earum recusandae ut fuga dicta repellendus aperiam, libero expeditaResponsive Design Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque nesciunt mollitia nemo, consectetur deserunt blanditiis illo, voluptas quas corporis quod earum recusandae ut fuga dicta repellendus aperiam, libero expeditaResponsive Design Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque nesciunt mollitia nemo, consectetur deserunt blanditiis illo, voluptas quas corporis quod earum recusandae ut fuga dicta repellendus aperiam, libero expedita"
        },
        {
            title: "Drag and Drop",
            content:" Drag and Drop Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque nesciunt mollitia nemo, consectetur deserunt blanditiis illo, voluptas quas corporis quod earum recusandae ut fuga dicta repellendus aperiam, libero expedita.Responsive Design Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque nesciunt mollitia nemo, consectetur deserunt blanditiis illo, voluptas quas corporis quod earum recusandae ut fuga dicta repellendus aperiam, libero expeditaResponsive Design Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque nesciunt mollitia nemo, consectetur deserunt blanditiis illo, voluptas quas corporis quod earum recusandae ut fuga dicta repellendus aperiam, libero expeditaResponsive Design Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque nesciunt mollitia nemo, consectetur deserunt blanditiis illo, voluptas quas corporis quod earum recusandae ut fuga dicta repellendus aperiam, libero expedita"
        },
        {
            title: "WordPress Theme",
            content:"WordPress Theme Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque nesciunt mollitia nemo, consectetur deserunt blanditiis illo, voluptas quas corporis quod earum recusandae ut fuga dicta repellendus aperiam, libero expedita.Responsive Design Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque nesciunt mollitia nemo, consectetur deserunt blanditiis illo, voluptas quas corporis quod earum recusandae ut fuga dicta repellendus aperiam, libero expeditaResponsive Design Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque nesciunt mollitia nemo, consectetur deserunt blanditiis illo, voluptas quas corporis quod earum recusandae ut fuga dicta repellendus aperiam, libero expeditaResponsive Design Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque nesciunt mollitia nemo, consectetur deserunt blanditiis illo, voluptas quas corporis quod earum recusandae ut fuga dicta repellendus aperiam, libero expedita"
        },
        {
            title: "What We Do?",
            content:"What We Do? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque nesciunt mollitia nemo, consectetur deserunt blanditiis illo, voluptas quas corporis quod earum recusandae ut fuga dicta repellendus aperiam, libero expedita.Responsive Design Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque nesciunt mollitia nemo, consectetur deserunt blanditiis illo, voluptas quas corporis quod earum recusandae ut fuga dicta repellendus aperiam, libero expeditaResponsive Design Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque nesciunt mollitia nemo, consectetur deserunt blanditiis illo, voluptas quas corporis quod earum recusandae ut fuga dicta repellendus aperiam, libero expeditaResponsive Design Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque nesciunt mollitia nemo, consectetur deserunt blanditiis illo, voluptas quas corporis quod earum recusandae ut fuga dicta repellendus aperiam, libero expedita"
        },
    ]
})
</script>
<template>
<div class="flex flex-row w-[1200px] mx-auto gap-x-[100px]">
    <div class="flex flex-col  gap-y-7 w-[300px]">
            <div v-for="(data,i) in Information.data" :key="data" @click="()=>Information.setIndex(i)"
            :class="{'bg-slate-400': Information.index==i}"
            class="p-2 hover:bg-slate-400 rounded-lg hover:cursor-pointer text-[20px] font-medium"
            >{{data.title}}
            </div>
        
        
    </div>
    <div class="">
        <div v-if="Information.index!=-1" class="">
            <div v-if="Information.index>0" class="w-[700px]">

                {{Information.data[Information.index].content}}
            </div>
            <div v-if="Information.index==0" class="i">
                <img src="https://images.unsplash.com/photo-1587591389045-7486f45d1dbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="">
            </div>

        </div>
        <div v-if="Information.index==-1" class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nam dolorum ea tempore sapiente illum consectetur sunt nihil eaque culpa dicta corporis ipsum, aliquam nulla ullam. Illum porro hic est!</div>
    </div>
 
</div>
</template>