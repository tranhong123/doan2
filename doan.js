
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