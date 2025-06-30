document.getElementById("formReservation").addEventListener("submit", function(e) {
  e.preventDefault();

  const nom = this.nom.value;
  const prenom = this.prenom.value;
  const email = this.email.value;
  const hotel = this.hotel.value;
  const arrivee = this.arrivee.value;
  const depart = this.depart.value;
  const chambres = this.chambres.value;

  const confirmation = `
    ✅ Merci ${prenom} ${nom},<br>
    Votre réservation à l'hôtel <strong>${hotel}</strong> est confirmée du <strong>${arrivee}</strong> au <strong>${depart}</strong><br>
    Nombre de chambres : ${chambres}<br>
    Un email de confirmation a été envoyé à <strong>${email}</strong>.
  `;

  document.getElementById("confirmation").innerHTML = confirmation;
});