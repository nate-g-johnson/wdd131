const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area'); // Fix: change querySelector('area') to getElementById('area')

const PI = 3.14159;
let radius = 10;

let area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;
