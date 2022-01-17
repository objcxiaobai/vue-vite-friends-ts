import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn' // import locale
import isLeapYear from 'dayjs/plugin/isLeapYear' // import plugin
import relativeTime from 'dayjs/plugin/relativeTime' // import plugin
// import CustomParseFormat from 'dayjs/plugin/CustomParseFormat' // import plugin
dayjs.extend(relativeTime) // use plugin
// dayjs.extend(CustomParseFormat) // use plugin
dayjs.extend(isLeapYear) // use plugin

dayjs.locale('zh-cn') // use locale
const utilsMixis = {
    methods: {
        timeParse(val: string) {
            if (!val) return
            return dayjs(val).fromNow()
        }
    }
}


export default utilsMixis