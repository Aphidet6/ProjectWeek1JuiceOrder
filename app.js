class Drink {
    constructor(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

const drinks = [
    new Drink("ชาไทย", 50, "images/menu/thai-tea.png"),
    new Drink("โกโก้เย็น", 55, "images/menu/iced-cocoa.png"),
    new Drink("อเมริกาโน่เย็น", 55, "images/menu/iced-americano.png"),
    new Drink("มัทฉะลาเต้", 65, "images/menu/matcha-latte.png")
];

const drinksData = {
    ThaiTea: {
        "thai-tea-name": document.getElementById("thai-tea-name").innerText = drinks[0].name,
        "thai-tea-price": document.getElementById("thai-tea-price").innerText = `฿${drinks[0].price}`,
        "thai-tea-image": document.getElementById("thai-tea-image").src = drinks[0].image
    },
    IcedCocoa: {
        "cocoa-name": document.getElementById("cocoa-name").innerText = drinks[1].name,
        "cocoa-price": document.getElementById("cocoa-price").innerText = `฿${drinks[1].price}`,
        "cocoa-image": document.getElementById("cocoa-image").src = drinks[1].image
    },
    IcedAmericano: {
        "americano-name": document.getElementById("americano-name").innerText = drinks[2].name,
        "americano-price": document.getElementById("americano-price").innerText = `฿${drinks[2].price}`,
        "americano-image": document.getElementById("americano-image").src = drinks[2].image
    },
    MatchaLatte: {
        "matcha-name": document.getElementById("matcha-name").innerText = drinks[3].name,
        "matcha-price": document.getElementById("matcha-price").innerText = `฿${drinks[3].price}`,
        "matcha-image": document.getElementById("matcha-image").src = drinks[3].image
    }
};

const menuList = document.querySelector(".menu-button ul");

menuList.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const selectedItem = button.closest("li");

    menuList.querySelector(".active")?.classList.remove("active");
    selectedItem.classList.add("active");
});

let orderNum = 0;
let drinkName = []
let totalPrice = []
let startNum = 1

const decreaseQuantity = (id) => {
    
    if (startNum == 1) {
        return;
    } else {
        startNum -= 1
        document.getElementById('quantity').innerHTML = startNum
        console.log(id)
    }
}
const increaseQuantity = (id) => {
    startNum += 1
    document.getElementById('quantity').innerHTML = startNum

}

const addElement = (img, name, price) => {

    const orderList = document.getElementById("orderContainer");
    const orderTemplate = document.getElementById("orderItemTemplate");

    const row = orderTemplate.content.cloneNode(true);
    const orderItem = row.querySelector(".order-list");
    orderItem.dataset.drinkId = name;
    row.getElementById('drink-img').src = img;
    row.getElementById("order-name").textContent = name;
    row.getElementById("order-price").textContent = `฿${price}`;
    row.getElementById("total-price").textContent = `฿${price * startNum}`;
    row.getElementById("quantity").textContent = 1;

    if (drinkName[orderNum] !== name) {
        drinkName.push(name)
        orderList.append(row);
        orderNum += 1
    } else if (drinkName[orderNum] === name) {
        return;
    }
}

const totlePrice = (price) => {
    const allPrice = document.getElementById("all-total-price");
    totalPrice.push(price)
    let sum = 0
    totalPrice.forEach(x => {
        sum += x;
    });


    allPrice.textContent = `฿${sum}`
}

const addToOrder = (drink) => {

    if (!drinkName.includes(drink.name)) {
        addElement(drink.image, drink.name, drink.price)
        totlePrice(drink.price)
        const orderList = document.querySelector('order-list')
    } else if (drinkName[orderNum - 1] === drink.nameame) {
        return;
    }

}

const clearOrder = () => {
    const orderList = document.getElementById("orderContainer");
    const orderTemplate = document.getElementById("orderItemTemplate");

    const row = orderTemplate.content.cloneNode(true);
    orderList.remove(row);
}