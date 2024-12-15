export const sum = (...numbers:number[])=>{

    return numbers.reduce((totalnum,num)=> totalnum+num,0);
}