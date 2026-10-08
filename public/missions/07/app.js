document.querySelector("#load").addEventListener("click", async () => {
  const encoreEl = document.querySelector("#encore");
  const statusEl = document.querySelector("#status");
  try {
    const response = await fetch('/api/encore');
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    const data = await response.json();
    encoreEl.textContent = data.title;
  } catch (error) {
    statusEl.textContent = "Could not load encore track. Please try again later.";
  }
});