console.log("hello there from front-end");

function postData(data) {
  const url = 'http://localhost:3000/users';

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.text())
    .then(result => {
      console.log('Post request successful:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

const bookingBtn = document.getElementById("bookingBtn")
bookingBtn.addEventListener("click",(e)=>{
  e.preventDefault();

  const bookingForm = document.getElementById("bookingForm");
  const formData = new FormData(bookingForm);

  const formValues = {};
  for (let [key, value] of formData.entries()) {
    formValues[key] = value;
  }

  postData(formValues)

})






