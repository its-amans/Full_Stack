let url="https://catfact.ninja/fact";

let btn=document.querySelector("button");
let p=document.querySelector("p");

async function getResponse(){
    try{
        //axios.get() or axios() working same
        let res= await axios.get(url);
        //Here it is more compact than fetch with aync and await.
        //No need to parse the data externally the axios do this by own.
        let data=res.data.fact;
        return data;

    }catch(e){
        console.log("Error is: ",e);
        return "Error: No Data Found";
    }  
}

btn.addEventListener("click",async ()=>{
    let fact=await getResponse(url);
    p.innerText=fact;
});
