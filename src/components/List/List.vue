<template>
  <div class="list__container">
    <div class="list__icon">
      <img alt=" " :src="obj.authorIcon" />
    </div>
    <div class="list__wrapper">
      <span class="author">{{ obj.name }}</span>
      <div class="content__wrapper">
        <span class="content">{{ obj.content }}</span>
        <image-browser :list="obj.imags" @img-call-back="chooseImages"></image-browser>
      </div>
      <span class="address">{{ obj.address }}</span>
      <div class="action__content">
        <div class="date">
          <span>{{ timeParse(obj.date) }}</span>
          <span class="action__delete">删除</span>
        </div>
        <div class="action">
          <span>...</span>
        </div>
      </div>
      <div class="comment">
        <span class="comment__left">作者:</span>
        <span class="comment__right">内容</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import utilsMixis from "@/mixins/index";
export default {
  mixins: [utilsMixis],
};
</script>

<script lang="ts" setup>
//https://juejin.cn/post/7009282373476941831
import { defineProps, computed } from "vue";
import ImageBrowser from "../ImageBrowser/ImageBrowser";

const props = defineProps({
  resourObj: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const chooseImages = (item :string) => {
  console.log(item)
}

const obj = computed(() => props.resourObj);
</script>

<style lang="less">
@primaryColor: rgb(132, 145, 165);
@secondary: #909399;
.list__container {
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  border-bottom: 1px solid #dcdfe6;
  .list__icon {
    width: 50px;
    display: flex;
    margin-right: 10px;
    img {
      width: 100%;
      height: 50px;
      background-color: gray;
    }
  }
  .list__wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    .author {
      color: @primaryColor;
    }
    .content__wrapper {
      color: #606266;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      .content {
        font-size: 13px;
      }
    }

    .address {
      color: @secondary;
      font-size: 13px;
      margin: 3px 0;
    }
    .action__content {
      overflow: hidden;
      margin-bottom: 3px;
      display: flex;
      .date {
        flex: 1;
        font-size: 13px;
        color: @secondary;
        display: flex;
        align-items: center;
        .action__delete {
          padding-left: 10px;
          color: @primaryColor;
        }
      }
      .action {
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        font-weight: 500;
      }
    }
    .comment {
      background-color: rgb(227, 227, 229);
      font-size: 13px;
      padding: 5px;
      &__left {
        color: @primaryColor;
      }
      &__right {
        color: #303133;
        padding-left: 10px;
      }
    }
  }
}
</style>