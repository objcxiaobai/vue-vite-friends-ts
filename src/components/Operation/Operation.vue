<template>
  <div class="action">
    <div class="item" @click="handleClickShow">
      <i class="czs-more"></i>
    </div>
    <div class="action__mask" :class="[isShow ? 'show' : '']">
      <div class="mask_content">
        <div
          class="content__item"
          @click="handleChooseClickItem($event, 'good', objc)"
        >
          <span v-if="objc && objc.isLike == 1">取消</span>
          <span v-else>点赞</span>
        </div>
        <div
          class="content__item"
          @click="handleChooseClickItem($event, 'comment', objc)"
        >
          <span>评论</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType, reactive } from "vue";
import { ListObjetProps, OperationType } from "@/interface/index";
export default defineComponent({
  props: {
    source: {
      type: Object as PropType<ListObjetProps>,
      default: function () {
        return {};
      },
    },
  },
  setup(props: any, { emit }) {
    const isShow = ref(false);

    const handleClickShow = () => {
      isShow.value = !isShow.value;
    };

    const handleChooseClickItem = (
      event: Event,
      type: string,
      objc: ListObjetProps
    ) => {
      console.log(event);
      const data: OperationType = {
        id: objc && objc.id,
        type,
        like: objc && objc.isLike == 0 ? 1 : 0,
      };
      emit("operation-callback", data);
    };
    return {
      isShow,
      objc: computed((): ListObjetProps => props.source),
      handleClickShow,
      handleChooseClickItem,
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