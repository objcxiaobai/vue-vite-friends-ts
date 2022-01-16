<template>
    <nav-bar></nav-bar>
    <list :data-list="data.propslist" />    
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.tsx';
import List from '@/components/List/List.vue';
import { onMounted ,reactive} from 'vue';
import {getList} from "@/model/index"
import { ListObjetProps} from "@/interface/index";

const propslist :ListObjetProps[] = []
const data = reactive({propslist})

onMounted(async ()=>{
    const res  =  await getList()
    data.propslist = res as any
    console.log(data.propslist)
})

</script>

<style lang="less">

</style>