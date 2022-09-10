//acess data
export const accessData=(key)=>{
    try{
        let data = localStorage.getItem(key);
        data = JSON.parse(data);
        return data;
    }
    catch(e){
        return undefined;
    }
}
//save data
export const SaveData=(key,data)=>{
 localStorage.setItem(key,JSON.stringify(data))
}