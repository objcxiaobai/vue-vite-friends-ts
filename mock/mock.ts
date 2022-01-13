import Mock from 'mockjs'

const {Random } = Mock;


const randomlyGeneratedImage = () => {

    let nums = Math.ceil(Math.random() * 9);
    let color = Random.rgba()
    return new Array(nums).fill(Random.image('100x100',color))

}

const loadingList = () => {
    const result = []
    for(let i = 0; i<10;i++){
        const obj = {
            id:Random.id(),
            name:Random.name(),
            authorIcon: Random.image('100x100'),
            content:Random.cparagraph(),
            address:Random.city(),
            imags:randomlyGeneratedImage(),
            date:Random.now('yyyy-MM-dd HH:mm:ss')
        }
        result.push(obj)
    }

    return result

}

export default [
    {
        url: "/api/getList",
        method: "get",
        response: () => {
            return {
                code: 200,
                message: "success",
                data: loadingList()
            };
        }
    }
];