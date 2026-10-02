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
    ThaiTea : {
        "thai-tea-name": document.getElementById("thai-tea-name").innerText = drinks[0].name,
        "thai-tea-price": document.getElementById("thai-tea-price").innerText = `฿${drinks[0].price}`,
        "thai-tea-image": document.getElementById("thai-tea-image").src = drinks[0].image
    },
    IcedCocoa : {
        "cocoa-name": document.getElementById("cocoa-name").innerText = drinks[1].name,
        "cocoa-price": document.getElementById("cocoa-price").innerText = `฿${drinks[1].price}`,
        "cocoa-image": document.getElementById("cocoa-image").src = drinks[1].image
    },
    IcedAmericano : {
        "americano-name": document.getElementById("americano-name").innerText = drinks[2].name,
        "americano-price": document.getElementById("americano-price").innerText = `฿${drinks[2].price}`,
        "americano-image": document.getElementById("americano-image").src = drinks[2].image
    },
    MatchaLatte : {
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