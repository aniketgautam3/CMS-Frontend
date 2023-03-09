


var cartItems =
[
  {
    "id": 3,
    "quantity": 4,
    "price": 40.0,
    "itemType": "Veg",
    "imagePath": "",
    "name": "veg biryani"
  },

  {
    "id": 4,
    "quantity": 5,
    "price": 50.0,
    "itemType": "Veg",
    "imagePath": "",
    "name": "paneer"
  },

  {
    "id": 5,
    "quantity": 6,
    "price": 60.0,
    "itemType": "Veg",
    "imagePath": "",
    "name": "rice"
  }
]


showcartitems();

//retrieve function
async function showcartitems() {

  const MainconatainerElement = document.getElementById('maincontainer');
 
 

  MainconatainerElement.innerHTML = ``;
  cartItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `<div class="content-bar">
      <div class="itemid">${item.id}</div>
      <div class="itemtitle">${item.name}</div>
      <div class="itemprice">${item.price}</div>
  
  
  
  
         <div class="quantity">
    <button class="quantity-button" data-action="decrease">-</button>
          <input type="text" class="quantity-input" value="${item.quantity}" readonly>
          
      <button class="quantity-button" data-action="increase">+</button>
       
    
        <input type="text" class="total-price" value="${item.price * item.quantity}" readonly >
      </div>
  
      
      
      <div class="btncontainer">
        <button class="remove-button" data-id="${item.id}">Remove</button></td>
      </div>
    </div>`;
    MainconatainerElement.appendChild(itemElement);

    // updateTotalPrice();
   
  });


  const quantityButtons = document.querySelectorAll('.quantity-button');
  quantityButtons.forEach(button => {
    button.addEventListener('click', () => {
      // ...

      const input = button.parentElement.querySelector('.quantity-input');
      const totalprice = button.parentElement.querySelector('.total-price');
      const price=parseInt(button.parentElement.parentElement.querySelector(".itemprice").textContent);
     
       const action = button.dataset.action;
      const currentValue = parseInt(input.value);
      const currentTotalprice = parseInt(totalprice.value);
      
      let newValue;
      let newtotalprice;

      if (action === 'increase') {
        newValue = currentValue + 1;
        newtotalprice=currentTotalprice+price;

      } else {
        newValue = currentValue - 1 > 1? currentValue - 1 : 1;
        newtotalprice= currentTotalprice-price> 0? currentTotalprice-price: currentTotalprice;
      }

      input.value = newValue;
      totalprice.value=newtotalprice;
     
      
      
    });
  });

  const buttons = document.querySelectorAll(".remove-button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const id = parseInt(button.getAttribute("data-id"));
      removeItemtFromArray(cartItems, id); // remove object with the clicked button's ID
      console.log(cartItems); // log the updated array to the console
    
    });
  });





}

  function removeItemtFromArray(array, id) {
    const index = array.findIndex(obj => obj.id === id);
    if (index !== -1) {
      array.splice(index, 1);
    }

    showcartitems();
  }


 
 
















