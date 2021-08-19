

let inCartItems = localStorage.getItem('Items');
let itemQuantity = sessionStorage.getItem('Quantity');
let totalBill=0;
itemQuantity = JSON.parse(itemQuantity);
itemQuantity = Object.entries(itemQuantity);
inCartItems = inCartItems.split(",");

let itemPrices={
    CheeseSticks: 400,
    KebabSticks: 400,
    OvenBakedWings: 280,
    CalzoneChunks: 600,
    ChickenFajita: 350,
    ChickenTandoori: 350,
    PepperoniPizza: 350,
    RegularPizzaDeal: 850,
    RoastedPlatter: 600,
    EuroSandwich: 500,
    SuperDeal1: 500,
    SuperDeal2: 640,
    MintMargarita: 250,
    FruitPunch: 300,
    Milkshakes: 350,
};


let tableBody = document.getElementById('tBody');

inCartItems.forEach(element => {
    let newTableRow = document.createElement('tr');
    let newTableData = document.createElement('td');
    newTableData.innerText = element;
    newTableRow.className = "list-item";
    newTableRow.appendChild(newTableData);
    tableBody.appendChild(newTableRow);
    

    for (let index = 0; index < itemQuantity.length; index++) {
        let tempString=element.replace(/\s/g,'');
        if(itemQuantity[index][0]==tempString){
            // Adding Quantity
            newTableData=document.createElement('td');
            newTableData.innerText=itemQuantity[index][1];
            newTableData.className='quantity';
            newTableRow.appendChild(newTableData);
            tableBody.appendChild(newTableRow);

            // Adding Price
            newTableData=document.createElement('td');
            newTableData.innerText=(itemPrices[`${itemQuantity[index][0]}`]*itemQuantity[index][1] );
            totalBill+=(itemPrices[`${itemQuantity[index][0]}`]*itemQuantity[index][1] );
            newTableRow.appendChild(newTableData);
            tableBody.appendChild(newTableRow);
            break;
        }

    }



});

let billContainer=document.createElement('div');
billContainer.className='billContainer';
let billTitle=document.createElement('h3');
billTitle.textContent='Total Bill';
billTitle.className='billEntity';
billContainer.appendChild(billTitle);
let billAmount=document.createElement('p');
billAmount.textContent=totalBill+" Rs.";
billAmount.className='billEntity';
billContainer.appendChild(billAmount);
console.log(billContainer);

document.body.insertBefore(billContainer,document.getElementById('cartScript'));



