/*  Form Manipulation with JavaScript  */
/* Tasks 1 thru 3 */

function Messages(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
}

Products.prototype.displayInfo = function() {
    console.log("Name: ${this.name}, email: ${this.email}, Message: ${this.message}");
}

document.getElementById("productform").addEventListener("Products are:", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let newMessage = new Message(name, email, message);
    let newElement = document.createElement("div");
    newElement.innerHTML = newMessage.displayInfo();
    document.getElementById("messages").appendChild(newElement);
    document.getElementById("messageform").reset();
});




