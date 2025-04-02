const url="https://icanhazdadjokes.com/";

async function getJokes(){
    try{
        const config={headers:{Accept:"application/json"}}; //headers are provided in key value

        let res=await axios.get(url,config);
        
        console.log(res.data);

    }catch(e){
        console.log("Error =",e);
    }
}

//here output is not shown due to some issue but this api runs on postman
