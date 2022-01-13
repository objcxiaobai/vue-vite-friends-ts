import { defineComponent } from "vue";
import classes from './index.module.less'

export default defineComponent({
    name: "nav-bar",
    setup(props){
        return ()=>(
            <div class={classes['nav-bar']}>
                <div class={classes['nav-bar-left']}></div>
                <div class={classes['nav-bar-center']}>
                    <span>朋友圈</span>
                </div>
                <div class={classes['nav-bar-right']}></div>
            </div>
        )
    }
})