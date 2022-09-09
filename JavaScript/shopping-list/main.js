const itemName = document.querySelector(".itemName");
const itemSubmit = document.querySelector(".itemSubmit");
const itemList = document.getElementById("itemList");

itemSubmit.onclick = function() {
    if(itemName.value !== "") {
        const name = itemName.value;
        itemName.value = "";
        const newItem = document.createElement("li");
        newItem.textContent = name;
        const btn = document.createElement("button");
        btn.textContent = "delete";
        btn.onclick = function() {
            newItem.parentNode.removeChild(newItem);
            btn.parentNode.removeChild(btn);
        };
        newItem.appendChild(btn);
        itemList.appendChild(newItem);
        itemName.focus();
    }
}