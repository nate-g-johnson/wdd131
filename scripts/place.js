const temp = 31; // °C
const windSpeed = 10; // km/h

function calculateWindChill(t, s) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16);
}

function displayWindChill() {
  const windChillSpan = document.getElementById("wind-chill");
  if (temp <= 10 && windSpeed > 4.8) {
    const wc = calculateWindChill(temp, windSpeed).toFixed(1);
    windChillSpan.textContent = `${wc} °C`;
  } else {
    windChillSpan.textContent = "N/A";
  }
}

function updateFooterDates() {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
}

displayWindChill();
updateFooterDates();
