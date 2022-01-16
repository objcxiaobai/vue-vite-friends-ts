export interface ListObjetProps{
    id:number,
    name:string,
    authorIcon:string,
    content:string,
    address:string,
    imags:Array<string>,
    isLike:number,
    date: string
}

export interface OperationType{
    id:number,
    type:string,
    like?:number
}