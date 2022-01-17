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

interface HomePropType{
    propslist:ListObjetProps[]
}
//可以声明类型
const data:HomePropType = reactive({
    propslist:[]
})
onMounted(async ()=>{
    const res  =  await getList()
    data.propslist = res
    console.log(data.propslist)
})

</script>

<style lang="less">

</style>