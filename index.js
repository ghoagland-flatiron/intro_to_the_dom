function snakeCase(str) {
  // debugger
  return str.toLowerCase().split(' ').join('_')
}

const items = [
  {
    name: 'Chainmail Coaster',
    price: '$40'
  },
  {
    name: 'Chainmail Earrings',
    price: '$25'
  },
  {
    name: 'Curves Ball',
    price: '$23'
  },
  {
    name: 'Dragonscale Bracelet',
    price: '$30'
  },
  {
    name: 'Flower Kusadama',
    price: '$50'
  },
  {
    name: 'Origami Star',
    price: '$12'
  },
  {
    name: 'Saying Pillow',
    price: '$27'
  },
  {
    name: 'Tardis Bookmark',
    price: '$30'
  }
]

/*

*/



const cardContainer = document.getElementById('card-container')

const makeCard = ({name, price}, container) => {
  const newCard = document.createElement("div")
  newCard.classList.add("ui", "card")
  newCard.id = snakeCase(name)
  newCard.innerHTML += `
    <div class="image">
      <img src='./images/${snakeCase(name)}.jpg'>
    </div>
    <div class="content">
      <span class="header">${name}</span>
      <div class="description">
        ${price}
      </div>
    </div>
  `

  newCard.addEventListener('click', (evt) => {
    const desc = newCard.querySelector('.description')
    desc.innerText = "Sold"
  })
  container.append(newCard)

}
