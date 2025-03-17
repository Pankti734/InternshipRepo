const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg=document.querySelector(".msg");

for (let select of dropdowns) {
    for (let currCode in countryList) {  // Added 'let' here
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        }
        if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (event) => {
       updateFlag(event.target);
    })
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
}


btn.addEventListener("click", async (evt) => {  // Changed 'Event' to 'event'
   evt.preventDefault();
   let amount = document.querySelector(".amount input");
   let amtval = amount.value;
   if (amtval === "" || amtval < 1) {
      amtval = 1;
      amount.value = "1";
   }
  
   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;  // Corrected string interpolation
   // Fetch and handle the exchange rate using the URL
   let response=await fetch(URL);
   let data=await response.json();
   let rate=data[toCurr.value.toLowerCase()];

   let finalAmount=amtVal*rate;
   msg.innerText=`${amtval} ${fromCurr.value}=${finalAmount} ${toCurr.value}`;
});
