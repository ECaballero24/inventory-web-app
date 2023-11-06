const form = document.querySelector("form");

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const {sneakerNumber, sneakerName, SneakerColor} = event.target;

    generateSneaker(sneakerNumber.value, sneakerName.value, SneakerColor.value);

    

    form.reset();

});

const listItems = document.querySelectorAll("li button");
for (item of listItems){
    item.addEventListener("click",(event)=>{
        event.target.closest(".single-sneaker").remove();
  });
};