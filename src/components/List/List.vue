<template>
  <div class="list__container" v-for="item in list" :key="item.id">
    <div class="list__icon">
      <img alt=" " :src="item.authorIcon" />
    </div>
    <div class="list__wrapper">
      <span class="author">{{ item.name }}</span>

      <div class="content__wrapper">
        <span class="content">{{ item.content }}</span>
        <image-browser
          :list="item.imags"
          @img-call-back="chooseImages"
        ></image-browser>
      </div>

      <span class="address">{{ item.address }}</span>

      <div class="action__content">
        <div class="date">
          <span>{{ timeParse(item.date) }}</span>
          <span class="action__delete">删除</span>
        </div>
        <Operation :source="item" @operation-callback="chooseOperation" />
      </div>

      <!-- 组件 -->
      <div class="like__content">
        <i class="czs-heart xb__czs"></i>
        <div class="item__content">
          <span class="item__person">hhh</span>
        </div>
      </div>
      <!-- 组件 -->
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
import { PropType, defineProps, reactive, computed } from "vue";
import ImageBrowser from "../ImageBrowser/ImageBrowser";
import Operation from "../Operation/Operation.vue";
import { ListObjetProps, OperationType } from "@/interface/index";

const props = defineProps({
  dataList: {
    type: Array as PropType<ListObjetProps[]>,
    default: function () {
      return [];
    },
  },
});

const chooseImages = (item: string) => {
  console.log(item);
};

const chooseOperation = (data: OperationType) => {
  console.log(data);
  const { type, id, like } = data;
  if (type == "good") {
    let index = props.dataList?.findIndex((item) => item.id == id);
    if (index != -1) {
      props.dataList[index].isLike = like || 0;
    }
  }
};

const list = computed(() => props.dataList);
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
    }
    .like__content {
      .xb__czs {
        color: red;
      }
      display: flex;
      width: 100%;
      padding-bottom: 10px;
      padding-top: 10px;
      align-items: center;

      .item__content {
        flex: 1;
        display: flex;
        align-items: center;
        margin-left: 5px;
        .item__person {
          font-size: 13px;
          color: @primaryColor;
        }
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