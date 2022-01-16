//https://segmentfault.com/q/1010000040270949
//导入路径不能以“.ts”扩展名结束。考虑改为导入“@/utils/requst.js”。ts(2691)
import { ListObjetProps} from "@/interface/index";
//axios 返回类型声明
//https://juejin.cn/post/6969070102868131853
//https://docs.shanyuhai.top/frontend/typescript/change-axios-response-type.html#typescript-%E9%94%99%E8%AF%AF%E7%9A%84%E7%B1%BB%E5%9E%8B%E6%8F%90%E7%A4%BA
import service from '@/utils/requst';
export function getList(){
    return service.get<any,ListObjetProps[]>("/api/getList");
}