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
