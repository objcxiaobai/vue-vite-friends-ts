//https://segmentfault.com/q/1010000040270949
//导入路径不能以“.ts”扩展名结束。考虑改为导入“@/utils/requst.js”。ts(2691)
import service from '@/utils/requst';
export function getList(){
    return service.get("/api/getList");
}