let btn = document.querySelector("button");  

const url= "http://universities.hipolabs.com/search?name=";

async function getColleges(country){
    try{
        let res= await axios.get(url+country);
        console.log(res.data);

        return res.data;
    }
    catch(e){
        console.log(e);
        return [];
    }
}

btn.addEventListener("click",async () => {
    let countryName = document.getElementById("country").value;
    let colArr=await getColleges(countryName);
    show(colArr);
});

function show(colArr){
    let list=document.querySelector("#list");
    list.innerText="";

    for(col of colArr){
        console.log(col.name);

        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}

