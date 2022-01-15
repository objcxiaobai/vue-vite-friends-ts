<template>
  <div class="action">
    <div class="item" @click="handleClickShow">
      <i class="czs-more"></i>
    </div>
    <div class="action__mask" :class="[isShow ? 'show' : '']">
      <div class="mask_content">
        <div class="content__item" @click="handleChooseClickItem('good')">
          <span>点赞</span>
        </div>
        <div class="content__item" @click="handleChooseClickItem('comment')">
          <span>评论</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {OperationType} from '@/interface/index'
export default defineComponent({
  setup(props,{emit}) {
    const isShow = ref(false);
    const handleClickShow = () => {
      isShow.value = !isShow.value;
    };
    const handleChooseClickItem = (type: string) => {
      const data : OperationType = {
        type
      }
      emit("operation-callback",data)
    }
    return {
      isShow,
      handleClickShow,
      handleChooseClickItem
    };
  },
});
</script>
<style lang="less" scoped>
.action {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  .item {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  .action__mask {
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    right: 20px;
    top: 0;
    height: 100%;
    width: 50%;
    opacity: 0;
    transition: all 0.1s ease;
    border-radius: 5px;
    .mask_content {
      width: 100%;
      display: flex;
      height: 100%;
      .content__item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 13px;
        padding: 1px 0;
        &:first-child {
          border-right: 1px solid #fff;
        }
      }
    }
  }
  .show {
    opacity: 1;
  }
}
</style>