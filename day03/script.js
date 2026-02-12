let total = 0;

function addItem(itemId) {
    const item = document.getElementById("item" + itemId);
    const cartItems = document.getElementById("cartItems");
    const totalElement = document.getElementById("total");
    const item1_price = 10;
    const item2_price = 20;
    const item3_price = 30;
    let itemPrice = 0;
    if (itemId === 1) {
        itemPrice = item1_price;
    } else if (itemId === 2) {
        itemPrice = item2_price;
    } else if (itemId === 3) {
        itemPrice = item3_price;
    }
    const cartItem = document.createElement("li");
    cartItem.textContent = "Item " + itemId + ": $" + itemPrice;
    cartItems.appendChild(cartItem);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
        cartItems.removeChild(cartItem);
        removeItem(itemId);
    };

    removeButton.classList.add("remove-btn");
    cartItem.appendChild(removeButton);


    total += itemPrice;
    totalElement.textContent = "Total: $" + total.toFixed(2);
    console.log(total);
}

function removeItem(itemId) {
    const item = document.getElementById("item" + itemId);
    const cartItems = document.getElementById("cartItems");
    const totalElement = document.getElementById("total");
    const item1_price = 10;
    const item2_price = 20;
    const item3_price = 30;
    let itemPrice = 0;
    if (itemId === 1) {
        itemPrice = item1_price;
    }
    else if (itemId === 2) {
        itemPrice = item2_price;
    }
    else if (itemId === 3) {
        itemPrice = item3_price;
    }

    total -= itemPrice;
    totalElement.textContent = "Total: $" + total.toFixed(2);
    console.log(total);
}
