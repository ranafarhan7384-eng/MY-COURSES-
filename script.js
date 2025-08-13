const urlParams = new URLSearchParams(window.location.search);
const course = urlParams.get('course');
const price = urlParams.get('price');

document.getElementById('courseName').innerText = course;
document.getElementById('coursePrice').innerText = "Price: PKR " + price;
document.getElementById('paymentLink').href = "https://www.jazzcash.com.pk";