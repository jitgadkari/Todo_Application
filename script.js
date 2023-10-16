let description = document.getElementById("description");
description.setAttribute("placeholder","provide description")
let title=document.getElementById("heading");
function addTodo(){
    let head=title.value;
   let desc=description.value;
   let todo=[];

   let localTodo=sessionStorage.getItem("todo");
   if(localTodo != null){
    todo=JSON.parse(localTodo);
   }

   let ob={
    title:head,
    desc:desc,
    id:Math.floor(Math.random()*1000)
   }
    todo.push(ob);
   sessionStorage.setItem("todo",JSON.stringify(todo));
  
   show();
}

const show=()=>{
    let localTodoString=sessionStorage.getItem("todo");

    let content="";
    if(localTodoString ==null){
        content +=`<h2>No Todo's to show </h2>`;
    }else{
        let todos=JSON.parse(localTodoString);
        for(let t of todos.reverse()){
            content+=`
            <div class="container mx-auto bg-white md:w-1/2 p-5 rounded-md my-2">
            <h1 class=" font-extrabold" id="show Title"> ${t.title}</h1>
            <p id="showDetails">${t.desc}</p>
            </div>
            `
        }
    }
    document.getElementById("showtodos").innerHTML=content;

}
show();