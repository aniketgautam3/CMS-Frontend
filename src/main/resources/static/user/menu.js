/**
 * 
 */

const $$ = document.querySelectorAll.bind(document);


    // Manipulate the DOM to display the data
   

   

    // menuItems.forEach(item => {
    //   const itemElement = document.createElement('div');
    //   itemElement.innerHTML = `<h2>${item.itemName}</h2><p>${item.price}</p>`;
    //   menuElement.appendChild(itemElement);
    //   console.log(menuElement);
    // });
    
    // var tmp = `<h3>tmp</h3>`
    // menuElement.innerHTML = tmp;

    // console.log("line 65");
    // console.log(menuItems);
    // menuItems.forEach(item => {
    //     var val = `<div>${item.itemName}</div>`
    // })
    



  //   <div class="content-bar">
	// 	<div class="itemid">#0000</div>
	// 	<div class="itemtitle">Socks Red</div>
	// 	<div class="itemprice">$19.99 ea</div>
		
	// 	<div class="btncontainer">
	// 		<button class="quantity-button" data-action="decrease">-</button>
  //           <input type="text" class="quantity-input" value="0">
  //           <button class="quantity-button" data-action="increase">+</button>
	// 		<button class="add-button">Add</button></td>
	// 	</div>
	// </div>




//   const date = '2023-03-05'; // date to filter data by
// const apiUrl = `https://example.com/api/data?date=${date}`;



const tags = $$(".tag")
let menuType = "lunch";

tags.forEach((t)=>
t.addEventListener('click',(e)=>{
  // console.log(e.target.innerHTML);
  menuType = e.target.innerHTML;
  refreshItemsList();
}))

refreshItemsList();

$('input[type=radio][name=type-input]').change(function(e) {
  refreshItemsList();
});


async function refreshItemsList() {
  
  var itemlist = [
    
    
    
      {
          "id": 2,
          "quantity": 3,
          "price": 40.0,
          "itemType": "NonVeg",
          "imagePath": "",
          "name": "chicken biryani"
      },

      {
        "id": 3,
        "quantity": 4,
        "price": 40.0,
        "itemType": "Veg",
        "imagePath": "",
        "name": "veg biryani"
    }
  
  
  ]


  var itemlist2 = [
    
    
    
    {
        "id": 2,
        "quantity": 3,
        "price": 40.0,
        "itemType": "NonVeg",
        "imagePath": "",
        "name": "xyz biryani"
    },

    {
      "id": 3,
      "quantity": 4,
      "price": 40.0,
      "itemType": "Veg",
      "imagePath": "",
      "name": "veg biryani"
  }


]



  let Menu1 = {
    id:12,
    menuType: "Breakfast",
    date:"2023-03-06",
    orderPlaced:"91623982",
    orderDelivered:null,
    items: itemlist2
  }

  let Menu2 = {
    id:12,
    menuType: "Lunch",
    date:"2023-03-06",
    orderPlaced:"91623982",
    orderDelivered:null,
    items: itemlist
  }

 let menus = [Menu1,Menu2]
  

  

  //menu 

  let menu = menus.filter(m => m.menuType.toLowerCase() === menuType.toLowerCase())[0];


const dataElement = document.getElementById(menuType.toLowerCase());

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {

itemlist = menu?.items.filter((item) => {
  return item.itemType.toLowerCase() == document.querySelector('input[name="type-input"]:checked').value ; 
});
  

dataElement.innerHTML=``;
itemlist.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.innerHTML = `<div class="content-bar">
      <div class="itemid">${item.id}</div>
      <div class="itemtitle">${item.name}</div>
      <div class="itemprice">${item.price}</div>

      <div class="itemtype">
      <span style="color:${item.itemType.toLowerCase() == "veg" ?"green":"red" }"  >&#8865;</span>
      </div>

      <div class="btncontainer">
        <button class="quantity-button" data-action="decrease">-</button>
              <input type="number" class="quantity-input" min="1" max="2" value="${item.quantity}">
              <button class="quantity-button" data-action="increase">+</button>
        <button class="add-button">Add</button></td>
      </div>
    </div>`;
      dataElement.appendChild(itemElement);
    });
  // })
  // .catch(error => console.error(error));




  //add and increase button

 



const quantityButtons = document.querySelectorAll('.quantity-button');
const addButton = document.querySelectorAll('.add-button');

quantityButtons.forEach(button => {
  button.addEventListener('click', () => {
    // ...

    const input = button.parentElement.querySelector('.quantity-input');
    const action = button.dataset.action;
    const currentValue = parseInt(input.value);

    let newValue;

    if (action === 'increase') {
      newValue = currentValue + 1;
    } else {
      newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
    }

    input.value = newValue;
  });
});

addButton.forEach(button => {
  button.addEventListener('click', async () => {
    const row = button.parentElement.parentElement;
    const itemid = row.querySelector('.itemid').textContent;
    
    const quantity = row.querySelector('.quantity-input').value;

     const cartitem = 
     {
           itemid : itemid,
           quantity: quantity

     }
      const cartitemlist =[cartitem];
     console.log(cartitemlist);




     const res = await fetch('http://localhost:8080/cart/addtocart/12', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartitemlist)
    });
    if (res.status === 200) {
      refreshItemsList();
    } else {
      alert('Error creating item');
    }

    });

  });


}


		const lunchBtn = document.querySelector('[href="#lunch"]');
		const breakfastBtn = document.querySelector('[href="#breakfast"]');
		const lunchSection = document.getElementById("lunch");
		const breakfastSection = document.getElementById("breakfast");

		lunchBtn.addEventListener("click", function(event) {
			event.preventDefault();
			lunchSection.style.display = "block";
			breakfastSection.style.display = "none";
			lunchBtn.classList
			.add("active");
		breakfastBtn.classList.remove("active");
	});

	breakfastBtn.addEventListener("click", function(event) {
		event.preventDefault();
		breakfastSection.style.display = "block";
		lunchSection.style.display = "none";
		breakfastBtn.classList.add("active");
		lunchBtn.classList.remove("active");
	});




  