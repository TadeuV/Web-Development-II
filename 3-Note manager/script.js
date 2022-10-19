// Select and Manipulate on individual elements
// -- getElementById

const list = document.getElementById("list")
// console.log(list);
// list.textContent = "Hello World"         
// list.textContent = "<h1>Hello World</h1>"         
// list.innerHTML = "<h1>Hello World</h1>"

// Select and Manipulate on individual elements
// -- querySelector

const el = document.querySelector("ul li:nth-child(2)")
el.querySelector('p .fa-times').style.color = "red"

// Select and Manipulate on multiple elements
// -- looping over getElementsByClassName

const icons = document.getElementsByClassName("fa")
// console.log(icons);

for(let i = 0; i < icons.length; i++){
    console.log(icons[i]);
    icons[i].style.color = ""
}

// DOM Styles and Classes v1
const h2 = document.querySelector('header h2') //node
h2.style.color = "yellow"
h2.style.backgroundColor = "darkblue"

const lis = document.querySelectorAll('li')

for(let i = 0; i < lis.length; i++){
    lis[i].style.backgroundColor = "white"
}

// lis[0].style.cssText = "background-color: white; font-size: 20px;"

// DOM Styles and Classes v2
const h2v2 = document.querySelector('header h2') //node
h2v2.className = 'changeBg'
h2v2.className = 'changeFt'
h2v2.className += ' changeBg' //concatenation

h2v2.classList.add('changeMg')
h2v2.classList.remove('changeFt')

// Get and Set and Remove Attributes

const div = document.querySelector('div.wrapper')
// console.log(div.getAttribute('class'));
div.setAttribute('style', 'background-color: lightblue;')
div.setAttribute('alt', 'This is a div')
div.removeAttribute('alt')

const btn = document.querySelector('#add-btn')
const input = document.querySelector('#add-input')
let ul = document.querySelector("#list")

btn.addEventListener('click', function(event){
    event.preventDefault()
    // console.log(event)
    console.log(input.value);
    
    if (input.value !== ""){
        const newnote = document.createElement("li")
        const fp = document.createElement("p")
        const sp = document.createElement("p")
        const ic1 = document.createElement("i")
        const ic2 = document.createElement("i")
        const inp = document.createElement("input")

        ic1.className="fa fa-pencil-square-o";
        ic2.className="fa fa-times";
        inp.className="edit-note";
        inp.setAttribute("type","text")

        fp.textContent=input.value;

        //appending
        sp.appendChild(ic1);
        ic1.insertAdjacentElement("afterend",ic2)
        newnote.appendChild(fp)
        newnote.appendChild(sp)
        newnote.appendChild(inp)
        ul.appendChild(newnote)
       
        newnote.style.backgroundColor = "white"
    

        input.value=""
    }else{

    }

})

//editing anmd deleting through the icon

ul.addEventListener("click",function(e){

    let tar=e.target.parentNode;
    
    if (e.target.classList[1] === "fa-pencil-square-o"){


        tar.style.display="none";
      
        let input = tar.nextElementSibling;
        let note = tar.previousElementSibling
        input.style.display="block";
        input.value = note.textContent;
        console.log(tar.parentNode);
        input.addEventListener("keypress",function(e){
            if(e.keyCode === 13){
                if(input.value !==""){
                    note.textContent = input.value;
                    tar.style.display="block";
                    input.style.display="none"
                }else{
                    let li=tar.parentNode;
                    console.log(li);
                    li.parentNode.removeChild(li);
                }
            }
        })

        //deleting
    }else if(e.target.classList[1] === "fa-times"){
        let ale=alert("Are you sure you want to delete this note?")
        let li=tar.parentNode;
        console.log(li);
        li.parentNode.removeChild(li);
       

    }
})




// DOM Navigation
const listItem = document.getElementById('list')
//who's your daddy
// console.log(listItem.parentNode);
// //who's your daddy's daddy?
// console.log(listItem.parentNode.parentNode);
// console.log(listItem.parentNode.parentNode.parentNode.parentNode);

// //who's your child?
// console.log(listItem.childNodes);
// console.log(listItem.children);

// //who's your next sibling?
// console.log(listItem.nextSibling);
// console.log(listItem.nextElementSibling);

//Creating Elements

