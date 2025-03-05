let todo=[];
let choice=prompt("Enter Your Choice:");
while(true){
    if(choice=="list"){
        console.log("---------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("---------------");
    }
    else if(choice=="add"){
        let taskToAdd=prompt("Enter the task to add.");
        todo.push(taskToAdd);
        console.log("Task Added");
    }
    else if(choice=="remove"){
        let idx=prompt("Enter the task index to remove:");
        if(idx<todo.length){
            todo.splice(idx,1);
            console.log("Task Removed");
        }
        else{
            console.log("Index is Out of Array Bound");
        }
    }
    else if(choice=="quit"){
        console.log("Quitting app")
        break;
    }
    else{
        console.log("Wrong Request");
    }
    choice=prompt("Enter Your choice");
}