const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");
const main = document.getElementById("main");

let data=[];

getRandomUser();
getRandomUser();
getRandomUser();

function formatMoney(money){
  return "$" + money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
}

function updateDOM(providedData = data){
  main.innerHTML ="<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach(item =>{
    const div = document.createElement("div");

    div.classList.add("person");

    div.innerHTML = `<strong>${item.name}</strong> ${formatMoney(+item.money)}`

    main.appendChild(div);
  })

  
}

function addNewData(newUser){
  data.push(newUser);

  updateDOM();
}


async function getRandomUser(){
  const res = await fetch("https://randomuser.me/api");

  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,

    money: `${Math.floor(Math.random()*1000000)}`
  }

  addNewData(newUser);
}

function doubleMoney(){
  data = data.map(user=>{
    return {...user,money: user.money * 2}
  })
  updateDOM();
}

function sortByRichest(){
  data.sort(function(a,b){
    return b.money - a.money;
  })

  updateDOM();
}

function showMillionaires(){
  data = data.filter((item)=>{
    return item.money>1000000;
  })
  updateDOM();
}

function calculateWealth(){
  const wealth = data.reduce((acc,user)=>( acc+= +user.money),0);
  console.log(wealth);
  const total = document.createElement("div");

  total.innerHTML = `<h3><strong>Total</strong>${formatMoney(wealth)}</h3>`
  main.appendChild(total);

  let oldWealth = wealth;

}
// event listeners
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionairesBtn.addEventListener("click", showMillionaires);
calculateWealthBtn.addEventListener("click", calculateWealth);