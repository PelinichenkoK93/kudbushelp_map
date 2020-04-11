// nav //
$("#navToggle").click(function() {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  $("body").toggleClass("locked"); 
});

// map //
var map = L.map('mapid').setView([59.90469288157049, 30.51280975341797], 15);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a rel="nofollow" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var LeafIcon = L.Icon.extend({
    options: {
        iconSize: [32, 37],

    }
});

var coffeeIcon = new LeafIcon({iconUrl: 'img/coffee.svg'}),
carWash = new LeafIcon({iconUrl: 'img/autowash.svg'}),
services = new LeafIcon({iconUrl: 'img/services.svg'}),
restaurantIcon = new LeafIcon({iconUrl: 'img/burger.svg'});

L.marker([59.899215726131644, 30.511259436607364], {icon: coffeeIcon}).bindPopup(`
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Название карточки</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<div class="card-body">
  <h5 class="card-title">Название карточки</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<div class="card-body">
  <a href="#" class="card-link">Другая ссылка</a>
</div>
</div>
`).addTo(map);
L.marker([59.8981072724078,30.522036552429203], {icon: carWash}).bindPopup(`
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Название карточки</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<div class="card-body">
  <h5 class="card-title">Название карточки</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<div class="card-body">
  <a href="#" class="card-link">Другая ссылка</a>
</div>
</div>
`).addTo(map);
L.marker([59.90946985912535,30.514461994171146], {icon: services}).bindPopup(`
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Название карточки</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<div class="card-body">
  <h5 class="card-title">Название карточки</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<div class="card-body">
  <a href="#" class="card-link">Другая ссылка</a>
</div>
</div>
`).addTo(map);
L.marker([59.90377829172123,30.512273311614994], {icon: restaurantIcon}).bindPopup(`
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Название карточки</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<div class="card-body">
  <h5 class="card-title">Название карточки</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<div class="card-body">
  <a href="#" class="card-link">Другая ссылка</a>
</div>
</div>
`).addTo(map);