// Skicka ett play-event till den lokala servern. / Send a play event to the local server.
window.dataLayer = window.dataLayer || [];
document.querySelector("#send").addEventListener("click", async () => {
  const visitorId = localStorage.getItem("visitorId") || crypto.randomUUID (); // TODO(): Ge besökaren ett giltigt ID / Give the visitor a valid ID.
  localStorage.setItem("visitorId", visitorId);
  const event = { type: "play", trackId: "night-drive", visitorId: visitorId };
  window.dataLayer.push(event)
  const response = await fetch("/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  });
  const receipt = await response.json();
  document.querySelector("#status").textContent =
    response.status + " " + JSON.stringify(receipt);
});
