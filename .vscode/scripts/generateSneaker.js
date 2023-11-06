function generateSneaker(styleNumber, sneakerName, sneakerColor,){

const li = sneakerTemplate(styleNumber, sneakerName, sneakerColor)

const ul = document.querySelector("ul");

ul.append(li);

};

function sneakerTemplate(styleNumber, sneakerName, sneakerColor){
    const li = document.createElement("li");
    li.classList.add("single-sneaker");


const removeButton = document.createElement("button");





}