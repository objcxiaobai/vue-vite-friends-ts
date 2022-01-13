<template>
    <nav-bar></nav-bar>

    <template v-for="item in data.list" :key="item.id">
        <list :resourObj="item" />
    </template>
    
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.tsx';
import List from '@/components/List/List.vue';
import { onMounted ,reactive} from 'vue';
import {getList} from "@/model/index"

const data = reactive({list:[]})

onMounted(async ()=>{
    const res  =  await getList()
    console.log(res)
    data.list = res as any
})

</script>

<style lang="less">

</style>