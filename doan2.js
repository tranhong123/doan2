var mockData =[{
    name: 'Sp 1',
    price: 999,
    picture:''
  }, {
    name: 'Sp 2',
    price: 999,
    picture:''
  },{
  name: 'Sp 3',
  price: 999,
  picture:''
  }]
  var products = document.querySelector('products-find')
  
  
  products-find.innerHTML =''
  mockData.forEach(item=>{
    <div class ="products">
  
    </div>
  var newProduct = document.createElement('div')
  newProduct.classList.add('products')
  newProduct.innerHTML = `
  <img src ="${item.image}" >
  <div class="info">
    <div class="name">${item.name}</div>
    <div class="price">${item.price}</div>
  </div>`
  products-find.appendChild(newProduct)
  })
  
  
  