
// const title = document.getElementById("title") // <h1></h1>
// title.textContent="Namak resturant"
// title.style.color="#03a9f4"

// const formDate = document.getElementById("form-date") //<label>
// formDate.innerHTML=`<h3>${new Date()}</h3>`

// const userName=document.getElementById("name") // <input type=text..
// userName.value="AliReza"
// console.log(userName.value) 


// const img=document.getElementById("logo")
// console.log(img.getAttribute("src"))
// img.setAttribute("alt","this is a logo!!")


// const subtitle = document.querySelector(".subtitle")
// subtitle.classList.add("subtitle-style")
// subtitle.classList.remove("subtitle")



// btn.addEventListener("click",function(){
//     alert("Clicked button!!")
//     btn.style.background="red"
// })

// const emailInput=document.getElementById("email")

// userName.addEventListener("input",function(){
//     const fullName=userName.value
//     emailInput.value=`${fullName}@gmail.com`
// })


// const formData=document.querySelector(".resturant-form")

// formData.addEventListener("submit", function (event) {
//         event.preventDefault();
//           const name = userName.value.trim();
//              const email = emailInput.value.trim();
//                if (name === "") {
//                       alert("Name is required.");
//                             return;
//                          }
//                             if (!email.includes("@")) {
//                                       alert("Enter a valid email.");   
//                                          return    }
//                                           alert("Form is ready!");
//                                     });


// const btn=document.querySelector(".reset")
// btn.addEventListener('click',function(){
//     // btn.classList.add('button-event')
//     btn.classList.remove(".button")
// })


// const btn=document.querySelector(".question")
// const answer=document.querySelector(".answer")
// btn.addEventListener("click",function(){
//     answer.classList.toggle("show")
// })

// const selectElement = document.querySelector(".ice-cream");
// const result = document.querySelector(".result");

// selectElement.addEventListener("change", (event) => {
//   result.textContent =  event.target.value;
// });


const feedback=document.querySelector(".feedback")
const counter=document.querySelector(".counter")

feedback.addEventListener("input",function(){
    const feebBackValue=feedback.value.length 
    if(feebBackValue >=200){

    }
    counter.textContent=`${feebBackValue}`
})


const student=["ali","sara","yt"]
[0,1,2]

