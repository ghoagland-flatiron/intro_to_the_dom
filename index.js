function snakeCase(str) {
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
<div class="ui card">
  <div class="image">
    <img src='./images/<image name>.jpg'>
  </div>
  <div class="content">
    <span class="header">Name</span>
    <div class="description">
      Price
    </div>
  </div>
</div>
*/
