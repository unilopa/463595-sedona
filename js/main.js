var serchBtn = window.document.getElementById('search-hotel-btn');
var form = window.document.getElementsByClassName('search-hotel-form')[0];
form.style.display = 'none';

serchBtn.onclick = function () {
  var isShown = form.style.display !== 'none';
  isShown ? form.style.display = 'none' : form.style.display = 'block';
};

