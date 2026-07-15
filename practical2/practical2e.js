let Laptop = {
    name: "Lenovo legion",
    price: 273890,
    Graphic_card: "RTX 5070 TI"
};
console.log("orignal object");
console.log(Laptop);
//2.accessing properties
console.log("Laptop name:", Laptop.name);
console.log("Laptop graphic card:", Laptop.Graphic_card);
//3.updating a property
Laptop.price = 250000;
console.log("After updating price");
console.log(Laptop);
//4.adding a new properties
Laptop.ram = "64 GB LPDDR7";

console.log("After adding ram");
console.log(Laptop);
//5.delete a properties
delete Laptop.price;
console.log("After deleting price");
console.log(Laptop);