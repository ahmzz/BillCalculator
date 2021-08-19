
// Complete bill for the purchase
let totalBill=0.00;
const tax=112.65;
let allItems= new Array();
let addedItems=new Array();

// All items on the menu in an array

let starters=document.querySelectorAll('#starters-menu #menu-list .menu-opt .name');
let main=document.querySelectorAll('#course-menu #courseMenu-list .courseMenu-opt .name');
let drinks=document.querySelectorAll('#drinks-menu #drinksMenu-list .drinks-opt .name');

for (let index = 0; index < starters.length; index++) {
    
    allItems.push(starters[index].innerHTML);
    
    
}

for (let index = 0; index < main.length; index++) {
    allItems.push(main[index].innerHTML);
    
    
}
for (let index = 0; index < drinks.length; index++) {
    allItems.push(drinks[index].innerHTML);
    
}

let ttlItemInCart={
    CheeseSticks: 0,
    KebabSticks: 0,
    OvenBakedWings: 0,
    CalzoneChunks: 0,
    ChickenFajita: 0,
    ChickenTandoori: 0,
    PepperoniPizza: 0,
    RegularPizzaDeal: 0,
    RoastedPlatter: 0,
    EuroSandwich: 0,
    SuperDeal1: 0,
    SuperDeal2: 0,
    MintMargarita: 0,
    FruitPunch: 0,
    Milkshakes: 0,
};
let key=Object.keys(ttlItemInCart);

// Retreving item price for starters
var startersBtnClick=document.querySelectorAll('#starters-menu #menu-list .menu-opt');

function totalItems(e){
    totalBill+=parseInt(e.target.value);
    // console.log(`Your total bill is ${totalBill}`);

    // if(e.target.previousElementSibling.previousElementSibling.innerHTML=="Cheese Sticks"){
    //     ++ttlItemInCart.CheeseSticks;
    //     if(ttlItemInCart.CheeseSticks==1){
    //         addedItems.push(e.target.previousElementSibling.previousElementSibling.innerHTML);
    //     }
    // }

    for(let i=0;i<(starters.length+main.length+drinks.length);i++)
    {
        if(e.target.previousElementSibling.previousElementSibling.innerHTML==allItems[i]){
            ++ttlItemInCart[`${key[i]}`];
            if(ttlItemInCart[`${key[i]}`]==1){
                addedItems.push(e.target.previousElementSibling.previousElementSibling.innerHTML);
            }
            
        }
    }    
    console.log(allItems);
    console.log(ttlItemInCart);
    console.log(addedItems);
  
    
 }

// Item 1 price
startersBtnClick[0].addEventListener('click', totalItems);

// Item 2 price
startersBtnClick[1].addEventListener('click', totalItems);

// Item 3 price
startersBtnClick[2].addEventListener('click', totalItems);

// Item 4 price
startersBtnClick[3].addEventListener('click', totalItems);

// Starters Menu end


// Main course Menu

var mainCourseMenu=document.querySelectorAll('#course-menu #courseMenu-list .courseMenu-opt');

mainCourseMenu[0].addEventListener('click',totalItems);
mainCourseMenu[1].addEventListener('click',totalItems);
mainCourseMenu[2].addEventListener('click',totalItems);
mainCourseMenu[3].addEventListener('click',totalItems);
mainCourseMenu[4].addEventListener('click',totalItems);
mainCourseMenu[5].addEventListener('click',totalItems);
mainCourseMenu[6].addEventListener('click',totalItems);
mainCourseMenu[7].addEventListener('click',totalItems);

// console.log(`Your total bill is ${totalBill}`);

// Drinks Menu

let drinksItem=document.querySelectorAll('#drinks-menu #drinksMenu-list .drinks-opt button');
// console.log(drinksItem);

drinksItem[0].addEventListener('click',totalItems);
drinksItem[1].addEventListener('click',totalItems);
drinksItem[2].addEventListener('click',totalItems);

// Checkout

function checkoutBill(){
    console.log(totalBill);
    localStorage.setItem('Items', addedItems);
    sessionStorage.setItem('Quantity', JSON.stringify(ttlItemInCart));
}

let checkout= document.getElementById('pay');
checkout.addEventListener('click',checkoutBill);


