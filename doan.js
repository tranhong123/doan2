
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1};
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Đổi ảnh sau mỗi 2 giây
  }
  
  function buy() {
    // Xử lý sự kiện nhấp vào nút "Mua hàng".

    // Mở một bảng phản hồi đánh giá.
    var feedbackDialog = document.createElement("dialog");
    feedbackDialog.innerHTML = `
      <form>
        <label for="name">Tên:</label>
        <input type="text" id="name">

        <label for="email">Email:</label>
        <input type="email" id="email">

        <label for="feedback">Phản hồi:</label>
        <textarea id="feedback"></textarea>

        <button type="submit">Gửi</button>
      </form>
    `;
    document.body.appendChild(feedbackDialog);

    feedbackDialog.showModal();
  }

  // Function to add item to the cart
  function addToCart() {
      // Get product details
      var productName = "ABC";
      var productPrice = 19.99;

      // Create a new list item for the cart
      var listItem = document.createElement("li");
      listItem.textContent = productName + " - $" + productPrice;

      // Append the list item to the cart
      document.getElementById("cart").appendChild(listItem);
  }
  function showcart(){
    var x= document.getElementById("showcart")
    if(x.style.display=="none"){
        x.style.display ="block"
    } 
    else{
        x.style.display ="none"
    }
}

const btn = document.querySelectorAll(".buy-item")
//console.log(btn)
 btn.forEach(function(button,index){
  button.addEventListener("click",function(event){{
      var btnItem = event.target
      var product = btnItem.parentElement
      //console.log(product) 
      var productImg = product.querySelector("img").src
      //console.log(productImg)
      var productName = product.querySelector("a").innerText
      //console.log(productName)
      var productPrice = product.querySelector("span").innerHTML
      //console.log(productPrice)
      //console.log(productImg,productName,productPrice)
      addcart(productPrice,productImg,productName)
  }})
})
function addcart(productPrice,productImg,productName){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML == productName){
        alert("Sản phẩm của bạn đã có trong giỏ hàng")
        return
        }
    }
    var trcontent = '<tr><td style="display: flex;align-items: center;"><img src='+productImg+' style="width: 70px;"><a class="title">'+productName+'</a></td><td><span>'+productPrice+'</span></td><td><input style="outline: none;width: 30px;cursor: pointer;" type="number" value=1 , min="1"></td><td style="cursor: pointer;"><i class="fa-solid fa-trash-can"></i><a class ="xoa">Xóa</a></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addtr)
    carttotal()
    deletecart()
}
function carttotal(){
  var cartItem = document.querySelectorAll("tbody tr")
  totalC=0
  //console.log(cartItem.length)
  for(var i=0;i<cartItem.length;i++){
    var inputValue = cartItem[i].querySelector("input").value
    //console.log(inputValue)
    var productPrice = cartItem[i].querySelector("span").innerHTML
    //console.log(productPrice)
    totalA = inputValue*productPrice*1000
    //console.log(totalA)
    totalC = totalC + totalA
  }
  var carttotalA = document.querySelector(".price-total span")
  carttotalA.innerHTML = totalC.toLocaleString('de-DE')
  inputchange()
  
}
function inputchange(){
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i=0;i<cartItem.length;i++){
      var inputValue = cartItem[i].querySelector("input")
      inputValue.addEventListener("change",function(){
          carttotal()
      })
      
  }
}

function deletecart(){
    var cartItem = document.querySelectorAll("tbody tr")
    //console.log(cartItem)
    for(var i=0;i<cartItem.length;i++){
        var productDelete = document.querySelectorAll(".xoa")
        productDelete[i].addEventListener("click",function(event){
            var xoa=event.target
            var Delete =xoa.parentElement.parentElement
            //console.log(Delete)
            Delete.remove()
            carttotal()
        })
    }
}


