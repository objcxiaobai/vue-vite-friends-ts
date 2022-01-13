import { defineComponent } from "vue";
import classes from './index.module.less'


// interface imageBrowserListType{
//     [index:number]:string
// }

export default defineComponent({
    name: "image-browser",
    props: {
        list: {
            type: Array,
            required: true,
        }
    },
    setup(props, { emit }) {

        function handleClickImg(item: string) {

            emit("img-call-back", item)

        }

        return () => (
            <div class={classes['image-browser']}>
                {
                    props.list.map((item) => (
                        <div class={classes['item']} onClick={handleClickImg.bind(this, item as string)}>
                            <img key={item as string} alt="" src={item as string} />
                        </div>
                    ))
                }
            </div>
        )
    }
})