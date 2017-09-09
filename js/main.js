var serchBtn = window.document.getElementById('search-hotel-btn');
var form = window.document.getElementsByClassName('search-hotel-form')[0];
var formOpenClass = 'search-open';
form.classList.add(formOpenClass);

serchBtn.onclick = function () {
  form.classList.toggle(formOpenClass);
};

