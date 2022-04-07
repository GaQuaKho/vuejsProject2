<script setup>
import { reactive } from '@vue/reactivity';
import Accordion from './SubAddOnList1/Accordion.vue';
import Alert from './SubAddOnList1/Alert.vue';

import Image from './SubAddOnList1/Image.vue';
import FeatureBox from './SubAddOnList1/FeatureBox.vue';
const data = reactive({
   payload: [
        {
            title:'Page Builder',
            content: 'Page Builder Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum similique, obcaecati tenetur dolorem, molestias corporis dolor ex fugit maxime at. Vitae deleniti debitis ex, cumque laborum dicta. Repudiandae, numquam.',
        },
        {
            title:'Drag and Drop',
            content: 'Drag and Drop Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum similique, obcaecati tenetur dolorem, molestias corporis dolor ex fugit maxime at. Vitae deleniti debitis ex, cumque laborum dicta. Repudiandae, numquam.',
        },
        {
            title:'WordPress Theme',
            content: 'WordPress Theme Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum similique, obcaecati tenetur dolorem, molestias corporis dolor ex fugit maxime at. Vitae deleniti debitis ex, cumque laborum dicta. Repudiandae, numquam.',
        },
        {
            title:'WordPress Plugin',
            content: 'WordPress Plugin Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum similique, obcaecati tenetur dolorem, molestias corporis dolor ex fugit maxime at. Vitae deleniti debitis ex, cumque laborum dicta. Repudiandae, numquam.',
        },
    ]
})
</script>
<template>
<div class="">
   <Accordion :Payload="data.payload"/>

   <!-- <div class="mt-[50px]"></div>
   <Alert :Payload="data.payload"/>


   <div class="mt-[50px]"></div>
    <Image/>

   <div class="mt-[50px]"></div>   
   <FeatureBox/> -->
</div>
</template>