
function addUnicCard (name, root) {
    return(
        name.map((i)=>{
        var container = document.createElement('div')
       container.innerHTML = `
       <div class="card">
       <img src="${i.img}" alt="${i.alt}">
       <div class="card-text">
           <h3>${i.name}</h3>
           <h4>${i.text}</h4>
           <div class="card-bay">
               <p>${i.cash}</p>
               <button class="unic-btn">${i.btn}</button>
           </div>
           <div class="card-bay-mobile ">
           <button class="btn-bay-mobile class-for-modal">${i.btnMobile}</button>
           </div>
       </div>
       </div>`

        document.querySelector(root).append(container)
    }))
}
// функция создает уникальную карточку конструктора пицца
function addCards (name, root){
    return(
        name.map((i)=>{
        var container = document.createElement('div')
        container.innerHTML = `
       <div class="card">
       <img src="${i.img}" alt="${i.alt}">
       <div class="card-text">
           <h3>${i.name}</h3>
           <h4>${i.text}</h4>
           <div class="card-bay">
               <p>${i.cash}</p>
               <button class="btn-bay">${i.btn}</button>
           </div>
           <div class="card-bay-mobile ">
           <button class="btn-bay-mobile class-for-modal">${i.btnMobile}</button>
           </div>
       </div>
       </div>`
        document.querySelector(root).append(container)
    })
)
}
// функция с добавление карточек с товарами
function addPopular (name, root){
    return(
        name.map((i)=>{
    var containerPopular = document.createElement('div')
    containerPopular.innerHTML =`<div class="card">
                    <img src="${i.img}" alt="${i.alt}">
                    <div class="card-info">
                        <h3>${i.name}</h3>
                        <span>${i.cash}</span>
                    </div>
                </div>` 
    document.querySelector(root).append(containerPopular)
})
    )

}
// функция с добавления популярных товаров
addUnicCard(pizzaSlice, '.main-pizza-price')
addPopular(popular, '.main-new-popular-price')
addCards(pizza, '.main-pizza-price');
addCards(pizza, '.main-pizza-price');
addCards(combo, '.main-combo-price');
addCards(combo, '.main-combo-price');
addCards(snacks, '.main-snacks-price')
addCards(deserts, '.main-deserts-price')
addCards(drinks, '.main-drinks-price')

