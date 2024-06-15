function changeImage() {
    const newImage ="owl.jfif";
    document.getElementById("image").src = newImage;
}

function changeBackImage() {
    const newImage ="lightbulb.jfif";
    document.getElementById("image").src = newImage;
}

function actSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    alert("Name: " + name + "Price: " + price + "Description: " + description);
    document.getElementById("productform").reset(); 
}

function cchange() {
    document.getElementById("change").classList.add("change");
}

function changePholder(event) {
    document.getElementById("phold").style.backgroundColor = "yellow";
}
