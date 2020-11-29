const items = [
    {
        title: "Елочные игрушки",
        price: 50,
        img: "Red_Christmas_Ball_PNG_Clipart-41.png", 
        inStock: 20,
        description: "" 
    },
    {
        title: "Подарки",
        price: 50,
        img: "gift_PNG5983.png", 
        inStock: 20,
        description: "" 
    },
    {
        title: "Конфеты",
        price: 50,
        img: "unnamed.png", 
        inStock: 20,
        description: "" 
    },
]

function addCard(arr) {
    for (let i = 0; i < arr.length; i++) {
        
        let title = document.createElement("h3");
        title.innerText = arr[i].title;

        let img = document.createElement("img");
        img.setAttribute("src", "img/" + arr[i].img)
        
        let price = document.createElement("p");
        price.innerText = arr[i].price + "руб.";

        let div = document.createElement('div');
        div.classList.add("card");
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(img);

        let shopping = document.getElementById("shopping");
        shopping.appendChild(div);
    }
}


addCard(items) 
