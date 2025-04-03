let url="https://dog.ceo/api/breeds/image/random";

let btn=document.querySelector("button");
let p=document.querySelector("p");

async function getResponse(){
    try{
        let res= await axios.get(url);
        let imageUrl=res.data.message;
        return imageUrl;

    }catch(e){
        console.log("Error is: ",e);
        return "/";//empty link
    }  
}

btn.addEventListener("click",async ()=>{
    let imageUrl=await getResponse(url);
    console.log(imageUrl);
    p.innerHTML=`<img src="${imageUrl}" alt="Random Dog Image" width="300">`;;
});


//here we can also use only img tag and then using setAttribute() function set the src attribute to imgLink