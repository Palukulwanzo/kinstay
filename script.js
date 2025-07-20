document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formReservation");
  const confirmationDiv = document.getElementById("confirmation");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nom = form.nom.value;
    const prenom = form.prenom.value;
    const email = form.email.value;
    const hotel = form.hotel.value;
    const arrivee = form.arrivee.value;
    const depart = form.depart.value;
    const chambres = form.chambres.value;

    const message = `
      ✅ Merci ${prenom} ${nom},<br>
      Votre réservation à l'hôtel <strong>${hotel}</strong> est confirmée du <strong>${arrivee}</strong> au <strong>${depart}</strong>.<br>
      Nombre de chambres : ${chambres}<br>
      Un email de confirmation a été envoyé à <strong>${email}</strong>.
    `;

    confirmationDiv.innerHTML = message;
  });
});