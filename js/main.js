// localStorage.setItem("dark" , "black")
function toggleMode() {
  const body = document.body;
  const modeToggle = document.getElementById("mode-toggle");
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  body.classList.toggle("dark-mode");
  // body.classList.toggle("black")
  if (body.classList.contains("dark-mode")) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";
    moonIcon.style.color = "white";
  } else {
    sunIcon.style.display = "inline";
    sunIcon.style.color = " #FFA500";
    moonIcon.style.display = "none";
  }

  // Save user preference to local storage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("isDarkMode", isDarkMode);
}

// Check for user preference and apply it
const isDarkMode = localStorage.getItem("isDarkMode") === "true";
if (isDarkMode) {
  document.body.classList.add("dark-mode");
  document.getElementById("sun-icon").style.display = "none";
  document.getElementById("moon-icon").style.display = "inline";
  document.getElementById("moon-icon").style.color = "white";
} else {
  document.getElementById("sun-icon").style.display = "inline";
  document.getElementById("sun-icon").style.color = "#FFA500";
  document.getElementById("moon-icon").style.display = "none";
}
// get total
// create product
// save project in local storage
// clear data
// read
// delete
// count
// update
// search
// clean data

let title = document.getElementById("title");
let price = document.getElementById("price");
let taxas = document.getElementById("taxas");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let create = document.getElementById("submit");
let mood = 'create'
let tem;
// get total
function gettotal() {
  if (price.value != "") {
    let result = +price.value + +taxas.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.backgroundColor = "green";
  } else {
    total.innerHTML = "";
    total.style.backgroundColor = "red";
  }
}



// create product
let datapro = [];
if (localStorage.product != null) {
datapro = JSON.parse(localStorage.product)
}else{
  datapro = []
}


create.onclick = function () {
  // mood = 'create'
  let newPro = {
    title: title.value.toLowerCase(),
    price: price.value,
    taxas: taxas.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value.toLowerCase(),
  };
  // count
  // clear data 
  if (title.value != "" && price.value != "" && category.value != "" && count.value < 300) {
    if (mood === 'create') {
      if (newPro.count > 1) {
      for (let i = 0 ; i < newPro.count ; i++) {
        datapro.push(newPro);
        read()
      }
    }else{
      datapro.push(newPro);
      }
    }else{
      datapro[  tem  ] = newPro
    }
  cleardata() 
  }
  localStorage.setItem("product", JSON.stringify(datapro));
  read()
};


// clear data
function cleardata() {
title.value = ''
price.value = ''
taxas.value = ''
ads.value = ''
discount.value = ''
count.value = ''
category.value = ''
total.innerHTML = ''
count.style.display = 'block'; // عرض حقل count مرة أخرى
  create.innerHTML = "create"; // تحديث نص الزر إلى "create"
mood = 'create'
}

// read
function read() {
  gettotal()
   let table = ''
   for (let i = 0; i < datapro.length; i++) {
    table += `
    <tr>
    <td>${i + 1}</td>
    <td>${datapro[i].title}</td>
    <td>${datapro[i].price}</td>
    <td>${datapro[i].taxas}</td>
    <td>${datapro[i].ads}</td>
    <td>${datapro[i].discount}</td>
    <td>${datapro[i].total}</td>
    <td>${datapro[i].category}</td>
    <td > <button id="update" onclick = "update(${i})">update</button></td>
    <td > <button id="delete" onclick = "deletedata(${i})">delete</button></td>
  </tr>`
   }
   document.getElementById("tbody").innerHTML = table
   let btndelete = document.getElementById("deleteall")
   if (datapro.length > 0) {
   btndelete.innerHTML = `
   <button onclick = "deleteall()">delete all(${datapro.length})</button>
   `
   }
   else{
    btndelete.innerHTML = ''
   }
}
  read()
// delete
 function deletedata(i) {
  // console.log(i)
  datapro.splice(i , 1)
  localStorage.product = JSON.stringify(datapro)
  read()
 }
 function deleteall() {
  localStorage.clear()
  datapro.splice(0)
  read()
 }

// update()
function update(i) {
 title.value = datapro[i].title
 price.value = datapro[i].price
 taxas.value = datapro[i].taxas
 ads.value = datapro[i].ads
 discount.value = datapro[i].discount
 category.value = datapro[i].category
 count.style.display = 'none'
 create.innerHTML = "update"
 mood = 'update'
  tem = i 
  gettotal()
}


// search
let searchmode = "title";
function search (id) {
  let search = document.getElementById("search")
  if (id == "searchtitle") {
   searchmode = "title"
   search.placeholder = 'search by title'
  }else{
    searchmode = "category"
    search.placeholder = 'search by category'
  }
  search.focus()
  search.value = ''
  read()
}


function searchdata(value) {
  let table = ''
  if (searchmode === "title") {
  for (let i = 0; i < datapro.length; i++) {
   if (datapro[i].title.includes(value.toLowerCase())) {
    table += `
    <tr>
    <td>${i}</td>
    <td>${datapro[i].title}</td>
    <td>${datapro[i].price}</td>
    <td>${datapro[i].taxas}</td>
    <td>${datapro[i].ads}</td>
    <td>${datapro[i].discount}</td>
    <td>${datapro[i].total}</td>
    <td>${datapro[i].category}</td>
    <td > <button id="update" onclick = "update(${i})">update</button></td>
    <td > <button id="delete" onclick = "deletedata(${i})">delete</button></td>
  </tr>`
   }
  }
  }else{
    for (let i = 0; i < datapro.length; i++) {
      if (datapro[i].category.includes(value.toLowerCase())) {
       table += `
       <tr>
       <td>${i}</td>
       <td>${datapro[i].title}</td>
       <td>${datapro[i].price}</td>
       <td>${datapro[i].taxas}</td>
       <td>${datapro[i].ads}</td>
       <td>${datapro[i].discount}</td>
       <td>${datapro[i].total}</td>
       <td>${datapro[i].category}</td>
       <td > <button id="update" onclick = "update(${i})">update</button></td>
       <td > <button id="delete" onclick = "deletedata(${i})">delete</button></td>
     </tr>`
      }
     }
  }
  document.getElementById("tbody").innerHTML = table
}



// clean data
  