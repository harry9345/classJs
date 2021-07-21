let main = document.getElementById("main");
let brandIn = document.getElementById("brand");
let colorIn = document.getElementById("color");
let yearIn = document.getElementById("year");
let form = document.getElementById("submit");

class Car {
  constructor(brand, year, color) {
    this.brand = brand;
    this.year = year;
    this.color = color;
  }
  age(x) {
    return x - this.year;
  }
}
let date = new Date();
let thisYear = date.getFullYear();

form.addEventListener("submit", (e) => {
  let myCar = new Car(brandIn.value, yearIn.value, colorIn.value);
  e.preventDefault();
  main.innerHTML = `
    <div>
        <p> my car is a 
            <span style="color: ${myCar.color};">
              ${myCar.brand} 
            </span>
        and it is from ${myCar.age(thisYear)} years ago</p>
    </div>
`;
});

let formCounting = document.getElementById("counting");
let inputCon = document.getElementById("counter");
let result = document.getElementById("result");

formCounting.addEventListener("keyup", (e) => {
  e.preventDefault();
  let str = inputCon.value;
  let charCount = str.length;
  var wordCount = str.match(/(\w+)/g).length;
  let sentenceCount = str.split(/[.!?]+\s/).filter(Boolean).length;
  result.innerHTML = `
    <div class="col-sm-12 mt-3 p-5 " style="border: 2px solid red; border-radius: 5px">
     <p> Number of character  is :${charCount}</p>
     <p> Number of word  is : ${wordCount}</p>
     <p> Number of sentence  is : ${sentenceCount}</p>
    </div>
`;
});
