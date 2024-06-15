/*  Document Manipulation with JavaScript  */
/* Tasks 1 thru 3 */

function Product(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
}

/* function printProducts() {
    let products = [
        { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
        { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
        { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
    ];
    for (let value in values) {
        products.innerHTML += "<p>$Name ${this.name}</p>";
        products.innerHTML += "<p>$Price ${this.price}</p>";
        products.innerHTML += "<p>$Description ${this.description}</p>"; 
    }

} */

function displayProduct() {
    return "Name: ${this.name}, Price: ${this.price}, Description: ${this.description}";

}

document.getElementById("productform").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    let newProduct = new Product(name, price, description);
    let productElement = document.createElement("div");
    productElement.innerHTML = newProduct.displayProduct();
    document.getElementById("productList").appendChild(productElement);
    document.getElementById("productform").innerHTML = printProducts;
    document.getElementById("productform").reset();
});