function generateSneaker(styleNumber, sneakerName, sneakerColor,){

const li = sneakerTemplate(styleNumber, sneakerName, sneakerColor)

const ul = document.querySelector("ul");

ul.append(li);

}

function sneakerTemplate(styleNumber, sneakerName, sneakerColor){
    const li = document.createElement("li");
    li.classList.add("single-sneaker");


const removeButton = document.createElement("button");

removeButton.textContent= "Remove Sneaker";
//adding eventlistener
removeButton.addEventListener("click",(event)=>{
    //need to find the closest li
   event.target.closest(".single-sneaker").remove();
});

if(styleNumber && sneakerName && sneakerColor){
    li.innerHTML = `
    <h3><img src="https://media1.giphy.com/media/ftqAaoF88HfWJpDyTP/200w.gif?cid=82a1493bw8szcav0vy80vouwqwnrw7j7j576ywahwzlirays&ep=v1_gifs_related&rid=200w.gif&ct=s" alt="Swoosh rotating"></h3>
    <p><strong>Style Number</strong>: ${styleNumber}</p>
    <p><strong>Sneaker Name:</strong></strong> ${sneakerName}</p>
    <p><strong>Color:</strong> ${sneakerColor}</p>`

    li.append(removeButton);

}

return li;




};

// const listItems = document.querySelectorAll("li button");
// for (item of listItems){
//     item.addEventListener("click",(event)=>{
//         event.target.closest(".single-sneaker").remove();
//   });
// };