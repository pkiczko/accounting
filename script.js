//
// let listPlaceholders = () => {
//
//   let input = document.querySelectorAll('input');
//   for (i = 0; i < input.length; i++)
//   {
//     if (input[i].attributes.placeholder)
//     {
//       console.log('yes!' + input[i].attributes.placeholder.value);
//     }
//   }
// };
//document.addEventListener("DOMContentLoaded", listPlaceholders);


// let placeholder = (field) => {
//
//   };
function divCreateInc(a) {
  let div = document.createElement('div');
            div.classList.add("incomes");
            inc.appendChild(div);
            for (i=0; i<(a.length-1); i++)
              {
                let span = document.createElement('span');
                span.innerHTML = a[i];
                div.appendChild(span);
              }
            }

function divCreateExp(a) {
    let div = document.createElement('div');
              div.classList.add("expenditures");
              exp.appendChild(div);
              for (i=0; i<(a.length-1); i++)
                {
                  let span = document.createElement('span');
                  span.innerHTML = a[i];
                  div.appendChild(span);
                }
              }
let total = 0;
let inc = document.getElementById('inc');
let exp = document.getElementById('exp');
let description = document.getElementById('description');
let amount = document.getElementById('amount');
let date = document.getElementById('date');
let time = document.getElementById('time');
let place = document.getElementById('place');
let main = document.querySelector('main');
let select = document.getElementById('selector');
//console.log(select.value);
let option = document.querySelectorAll('option');
// let button = document.querySelector('button');
//     button.addEventListener('click', function(){add()});
const twoDigit = (number) => {
  if (number < 10) {
    return `0${number}`;
  }
  else return number;
}
let dataArray = [];
let balance = document.getElementById('balance');
const refresh=()=>{
  // description.value='';
  // amount.value='';
  exp.innerHTML = '';
  inc.innerHTML = '';
  if (dataArray) {
    total = 0;
    inc.innerHTML = '<h2>Incomes</h2><br>';
    exp.innerHTML = '<h2>Expenses</h2><br>';
    for (j=0;j<dataArray.length;j++)
      {

        if (dataArray[j][5]=== '0')
          {
            console.log('inc: ' + dataArray[j][5]);
            divCreateInc(dataArray[j]);
            //console.log(dataArray[j]);
            let someData = dataArray[j][3].split(' ');
            console.log(someData[1]);
            total += parseInt(someData[1], 10);
          }
        else if (dataArray[j][5] === '1')
          { console.log('exp: ' + dataArray[j][5]);
            divCreateExp(dataArray[j]);
            let someData = dataArray[j][3].split(' ');
            console.log(someData[1]);
            total -= parseInt(someData[1], 10);
          }
      }

  balance.innerHTML= `Balance: ${total}` ;

}}

//   if (dataArray.length > 1)
//     {
//     dataArray.sort(compare(a,b));
//     for (i=0;i<dataArray.length;i++)
//       {
//       divCreate(dataArray[i]);
//       }
//     }
//   else divCreate(dataArray[0]);
//   //let array = ['Info: ' + description.value, `Date: ${twoDigit(d.getDate())} / ${twoDigit(d.getMonth())} / ${d.getFullYear()}`, 'Cash: ' + total(), placeValue ];
// };
// function compare(a,b) {      //for comparing strings
//     return new Date(b[1]) - new Date(a[1]);
//  }
const add = () => {
  if (description.checkValidity() && amount.checkValidity()) {
    let placeValue;
    if (place.value) {placeValue = `Place: ${place.value}`;}
    else {placeValue = '';}
    let clock;
    if (time.value) {
      clock = time.value;
    }
    else {clock = `${d.getHours()}:${d.getMinutes()}`}
    if (!date.value) {
      let d = new Date();
      let array = ['Info: ' + description.value, `${twoDigit(d.getDate())}/${twoDigit(d.getMonth())}/${d.getFullYear()}`, clock, 'Cash: ' + amount.value, placeValue, select.value ];
      //divCreate(array);
      dataArray.push(array);
      console.log(`pushing data to array: ${array}`)
      refresh();
      }

    else {
      console.log('here');
      let formatedDate = date.value.split('-');
      let array = ['Info: ' + description.value, `${formatedDate[2]}/${formatedDate[1]}/${formatedDate[0]}`, clock, 'Cash: ' + amount.value, placeValue, select.value ];
      //divCreate(array);
      dataArray.push(array);
      refresh();
    }


}};
