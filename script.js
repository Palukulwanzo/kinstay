
window.onload = function() {
  document.getElementById("popup").style.display = "flex";
};

function fermerPopup() {
  document.getElementById("popup").style.display = "none";
}


document.getElementById("recherche").addEventListener("input", function () {
  let filtre = this.value.toLowerCase();
  let hotels = document.querySelectorAll("#liste-hotels li");
  hotels.forEach(function (hotel) {
    hotel.style.display = hotel.textContent.toLowerCase().includes(filtre) ? "block" : "none";
  });
});