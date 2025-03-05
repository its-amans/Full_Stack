
const student={
    name:"Aman",
    age:"21",
    standard:"Btech",
    getname: function(){
        console.log(this);//The current func has local scope and called by current object i.e, scope is within the object so here this refers to the student object
        console.log(this.name);
    },
    getage: ()=>{
        console.log(this); //parent has globel scope so this contains reference to window object
        console.log(this.age);
    },
    getinfo1: function(){
        setTimeout(()=>{ //here the parent scope i.e is function scope is within the object so this holds the reference of student object
            console.log(this);
        },3000);
    },
    getinfo2:function(){
        setTimeout(function(){//here the this of the inner function() is of the entity who called it and here we know the setTimeout is called by window object itself so here this holds the ref of window object.
            console.log(this);
        },3000);
    }
}