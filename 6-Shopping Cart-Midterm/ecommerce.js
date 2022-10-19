
const products=[
    {gender:"male",name:"Diesel Master Chief Chronograph Gunmetal-Tone Stainless Steel",price:305.00,imgFile:"Watches/men1.jpg",id:101,quant:1},
    {gender:"male",name:"Fossil Flynn Chronograph Brown Leather",price:69.00,imgFile:"Watches/men2.jpg",id:102,quant:1},
    {gender:"male",name:"Armani Exchange Multifunction Gold-Tone Steel",price:153.00,imgFile:"Watches/men3.jpg",id:103,quant:1},
    {gender:"male",name:"Emporio  Armani Automatic Stainless Steel",price:695.00,imgFile:"Watches/men4.jpg",id:104,quant:1},
    {gender:"male",name:"Melbye Titanium and Charcoal Steel Mesh Day-Date",price:275.00,imgFile:"Watches/men5.jpg",id:105,quant:1},
    {gender:"male",name:"Diesel Split Chronograph Black-Tone Stainless Steel",price:405.00,imgFile:"Watches/men6.jpg",id:106,quant:1},
    {gender:"male",name:"Lux Luther Three-Hand Two-Tone Stainless Steel",price:65.00,imgFile:"Watches/men7.jpg",id:107,quant:1},
    {gender:"male",name:"Ryle Solar-Powered Light Brown Leather",price:275.00,imgFile:"Watches/men8.jpg",id:108,quant:1},
    {gender:"male",name:"Fossil Townsman 44mm Chronograph Luggage Leather",price:229.00,imgFile:"Watches/men9.jpg",id:109,quant:1},
    {gender:"male",name:"Skagen Signatur Medium Brown Leather",price:175.00,imgFile:"Watches/men10.jpg",id:110,quant:1},
    {gender:"male",name:"Fossil Townsman 48 mm Automatic Brown Leather",price:359.00,imgFile:"Watches/men11.jpg",id:111,quant:1},
    {gender:"male",name:"Michael Kors Slim Runway Chronograph Steel Blue Stainless Steel",price:405.00,imgFile:"Watches/men12.jpg",id:112,quant:1},
    {gender:"female",name:"Michael Kors Diamond Darci Three-Hand Rose Gold-Tone Stainless Steel",price:425.00,imgFile:"Watches/women1.jpg",id:151,quant:1},
    {gender:"female",name:"Fossil Daisy Three-Hand Midnight Navy Leather",price:179.00,imgFile:"Watches/women2.jpg",id:152,quant:1},
    {gender:"female",name:"Freja Lille Charcoal Steel Mesh",price:175.00,imgFile:"Watches/women3.jpg",id:153,quant:1},
    {gender:"female",name:"Scarlette Three-Hand Day-Date Gold-Tone Stainless Steel",price:199.00,imgFile:"Watches/women4.jpg",id:154,quant:1},
    {gender:"female",name:"Emporio Armani Swiss Three-Hand Brown Leather",price:795.00,imgFile:"Watches/women5.jpg",id:155,quant:1},
    {gender:"female",name:"Armani Exchange Three-Hand Matte Grey Leather",price:108.00,imgFile:"Watches/women6.jpg",id:156,quant:1},
    {gender:"female",name:"Michael Kors Women's Charley Three-Hand White Silicone",price:133.00,imgFile:"Watches/women7.jpg",id:157,quant:1},
    {gender:"female",name:"Michael Kors Multifunction Brown PVC",price:405.00,imgFile:"Watches/women8.jpg",id:158,quant:1},
    {gender:"female",name:"Michael Kors Parker Chronograph Vanilla PVC",price:365.00,imgFile:"Watches/women9.jpg",id:159,quant:1},
    {gender:"female",name:"DKNY Soho Three-Hand Black Fabric Watch and Strap Set",price:225.00,imgFile:"Watches/women10.jpg",id:160,quant:1},
    {gender:"female",name:"Kate Spade new york brookville three-hand green palm leaf leather",price:335.00,imgFile:"Watches/women11.jpg",id:161,quant:1},
    {gender:"female",name:"Emporio Armani Two-Hand Red Leather",price:365.00,imgFile:"Watches/women12.jpg",id:162,quant:1},

]
// Loading Cart Itens
cartArray=[];
function addCart(item){
    cartArray.push(item);
}

// Opening Cart page
let cartPage = document.querySelector(".basket");
let cart=document.querySelector("body");


//Rendering HTML products
let purchase=document.querySelector(".cart-content");
/////////////////////
cart.addEventListener("click",function(e){
    
    let targeta=e.target;
    // console.log(targeta.classList);
    if ((targeta.id ==="kart")||(targeta.id ==="kartnum")){
        cartOn();
    } else if(targeta.classList.value ==="buy"){
        let watchName=targeta.previousElementSibling.previousElementSibling.textContent;
        for(let i=0; i< products.length; i++)
            if(watchName === products[i].name){
                // Checking if product on cart
                if(cartArray.some((item) => item.id === products[i].id)){
                    products[i].quant+=1;
                    caltotal();

                    // console.log(products[i].name);
                    let scanHtml=document.querySelectorAll(".itens-cart");
                    for(let j=0;j<scanHtml.length;j++){
                        // console.log(scanHtml[j].firstElementChild.lastElementChild.previousElementSibling.lastElementChild.innerHTML);
                        if(products[i].name===scanHtml[j].firstElementChild.firstElementChild.nextElementSibling.textContent){
                            let scanNum=scanHtml[j].firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling;
                            let scanTotal=scanNum.parentNode.nextElementSibling.lastElementChild;
                            console.log(scanNum.parentNode.nextElementSibling.lastElementChild.innerHTML);
                            scanNum.innerHTML=products[i].quant;
                            scanTotal.innerHTML="CA$ "+products[i].quant*products[i].price;
                        }
                    }
               
    
                   
                }else{
                    updateArray(products[i],1)
                    render(i)
                    // num.innerText=products[i].quant;
                }
                
             
            
            }
    }
    // console.log(cartArray);
})

// UPDATE ARRAY FUNCTION
function updateArray (nameid,w){
    if (w === 1){
        cartArray.push(nameid);
        caltotal();
        // console.log(cartArray);
       
    }else if (w === -1){
        cartArray.splice(nameid,1)
        caltotal();
        // console.log(cartArray);
        
    }
}



// function to calculate the total price and total itens
const cartTotal = document.querySelector(".total-cart");
const cartIcon=document.querySelector(".cart-num");

function caltotal(){
    let totalPrice=0
    let totalItens=0
    for(i=0; i<cartArray.length; i++){
        totalPrice=totalPrice+(cartArray[i].price * cartArray[i].quant);
        totalItens=totalItens+(cartArray[i].quant);
    }
    // console.log(totalPrice);
    cartIcon.innerText=totalItens;
    return cartTotal.innerText="CA$ "+totalPrice;
}


// Function to render HTML Itens
function render(e){


        purchase.innerHTML += `
            <div class="itens-cart">
                <div class="item">
                    <!-- <div class="mini-main"> -->
                        <div class="mini-picture"><img src=${products[e].imgFile} alt=""></div>
                        <div class="mini-name">${products[e].name}</div>
                    <!-- </div> -->
                    <!-- <div class="sub-main"> -->
                        <div class="each">
                            <span class="eachitem">Each</span>
                            <span class="eachnum">CA$ ${products[e].price}</span>
                        </div>
                        <div class="qty">
                            <span class="op" id="minus">-</span>
                            <span class="num" id="num">1</span>
                            <span class="op" id="plus">+</span>
                        </div>
                        <div class="item-subtotal">
                            <span class="subtotal">Subtotal</span>
                            <span class="subnum">CA$ ${products[e].price*products[e].quant}</span>
                        </div>
                    <!-- </div> -->
                        <div class="delete">
                            <div class="delete-icon">
                                <i class="fa fa-trash" id="delete-icon"></i>
                            </div> 
                        </div>
                </div>
            </div>
            `;
    
}


//plus and minus and delete button
const qtysec=document.querySelector(".cart-content");
qtysec.addEventListener("click",function(e){
    qtytar=e.target
    // console.log(qtytar.parentNode.parentNode.parentNode.firstElementChild.nextElementSibling.innerText);

    if(qtytar.id==="delete-icon"){
        const delitem=qtytar.parentNode.parentNode.parentNode;
        const delFromArray=delitem.firstElementChild.nextElementSibling.innerText
        // console.log(delFromArray);
        //tirar do Array o item
        for(let i=0; i<cartArray.length;i++){
            if(cartArray[i].name === delFromArray){
                // console.log(cartArray[i].name);
                let indexQuant=products.findIndex(match => match.id ===cartArray[i].id);
                // Reseting quantity
                products[indexQuant].quant=1;
                // console.log(indexQuant);
                updateArray(i,-1);
            }
        }
        const cart = document.querySelector(".cart-content") //  <---------- selecting the cart
        cart.removeChild(delitem.parentNode) //  <---------- removing the targetted item


        // delitem.parentNode.removeChild(delitem);
        
    }else if(qtytar.id==="plus"){
        // console.log(qtytar.parentNode.nextElementSibling.lastElementChild.innerHTML);
        // find in the array
        let subtotalEach=qtytar.parentNode.nextElementSibling.lastElementChild;
        let pagename=qtytar.parentNode.previousElementSibling.previousElementSibling.textContent;
        let pagenum=qtytar.previousElementSibling;
        for(let i=0; i < cartArray.length; i++){
            if(pagename===cartArray[i].name){
                cartArray[i].quant=cartArray[i].quant+1;
                pagenum.innerHTML=cartArray[i].quant;
                caltotal();
                subtotalEach.innerHTML="CA$ "+(cartArray[i].price*cartArray[i].quant)
            }
        }
    }else if(qtytar.id==="minus"){
        let subtotalEach=qtytar.parentNode.nextElementSibling.lastElementChild;
        // console.log(qtytar.nextElementSibling);
        let pagename=qtytar.parentNode.previousElementSibling.previousElementSibling.textContent;
        let pagenum=qtytar.nextElementSibling;
        for(let i=0; i < cartArray.length; i++){
            if(pagename===cartArray[i].name){
                if(cartArray[i].quant>1){
                    cartArray[i].quant=cartArray[i].quant-1;
                    pagenum.innerHTML=cartArray[i].quant;
                    caltotal();
                    subtotalEach.innerHTML="CA$ "+(cartArray[i].price*cartArray[i].quant)
                }
            }
        }
    }
})




  // Closing cart page

// let cartPage = document.querySelector(".basket")
let lay=document.querySelector(".overlay-basket")
cartPage.addEventListener("click",function(e){
    let targetb = e.target;

    // console.log(targetb);

    // console.log(targetb.classList.value);
    if ((targetb.classList.value === "fa fa-close") || (targetb.classList.value === "overlay-basket")){
        cartOff();
    }

})


function cartOff(){
    // cartPage.style.transitionProperty = "left"
    // cartPage.style.transitionDuration = "2s"
    cartPage.style.left="100vw";
    // lay.style.transition="0 3s";
}

function cartOn(){
    cartPage.style.left="0vw";
}

// PUTTING IN THE CART /////////////////////////////////////

