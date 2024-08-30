const footdcontainer = document.querySelector(".food-container");
 
const fragment = document.createDocumentFragment();
const i = document.querySelector(".item-input");
const btn = document.querySelector(".add-btn");

 btn.addEventListener("click", additems)
 
function additems(event){
    const li = document.createElement("li");

    const namediv = document.createElement("div");
    const removedivbtn = document.createElement("div");


    namediv.textContent = i.value;
    li.append(namediv, removedivbtn);
    
    removedivbtn.innerHTML = '<i class="fa fa-xmark">X</i>';
    removedivbtn.setAttribute("onclick", "removeitem(event)");
 
    li.className = "food-item";
    footdcontainer.append(li)
    i.value = '';
    hideDiv();
    increaseCount();
  
}

function removeitem(event){     
    const current_item = event.target.closest('li');
    current_item.remove(current_item)
    hideDiv();
    increaseCount();
    
       
 }
 
function hideDiv(){
    const hDiv = document.querySelector(".no-listPic");
    if(footdcontainer.childElementCount>0){
        hDiv.style.cssText = "display: none";
    }
    else{
        hDiv.style.cssText = "display: block"
    }
}

function increaseCount(){
    const p = document.querySelector("#count");
    if(footdcontainer.childElementCount===0){
        p.innerText = `Items added: 0`;
    }
    else{
        p.innerText = `Items added: ${footdcontainer.childElementCount}`;
    }
}



// // const el = document.querySelectorAll(".food-container li");
// // const arr = [];
// // for(keys of el){
// //     arr.push(keys.innerText);
// // }
 

// const form = document.forms.personal_details; 
// const input_field = form.elements.name;
// const radio01 = form.elements.gender; 
// const check_box = form.elements.newsletter;


// const btn = document.querySelector(".submitBtn");
// btn.addEventListener("click", (event)=>{
//     event.preventDefault();
//     console.log("Punda")
// })
 

 


// function radio_change(event){
//     const others = arr[2];
//     if(event.target.value === "other"){
//         setTimeout(() => {
//             window.alert("aanmai elai yendral aaspathri ku ponga da pottaigala")
//         }, 2000);
//     }
    
    
// }










// input_field.addEventListener("change", input_ele);

// const name = document.querySelector(".header");


 
// function input_ele(event){
//    event.preventDefault();
//    const input_name = form.elements.name.value;
    
 
//      name.innerText = input_name;
    

    

    
//  }



// function submitData(event){
//     event.preventDefault();
   
//     const form_Data = new FormData(form); 
     
//     form_Data.set("full_name", "jayaharish");
   
//     const arr = [...form_Data.entries()];
     
//     const JSON_format = JSON.stringify(Object.fromEntries(arr));
    
//     fetch("https://reqres.in/api/users/2", {
//         method:"GET"
       
//     })
//     .then((obj)=>obj.json())
//     .then((obj1)=>{
//         console.log(JSON.stringify(obj1.data))
//     })
    

  
// } 