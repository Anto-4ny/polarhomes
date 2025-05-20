const services = {
  "rooms": {
    title: "Rooms & Apartments",
    description: "Luxurious rooms and spacious apartments for short or long stays.",
    features: [
      "Private balcony",
      "High-speed WiFi",
      "Fully equipped kitchenette"
    ],
    images: ["images/rooms1.jpg", "images/rooms2.jpg"],
  },
  "starter-kit": {
    title: "Starter Kit",
    description: "Enjoy welcome packages and dining essentials.",
    features: [
      "Local breakfast options",
      "Coffee and tea maker",
      "Daily housekeeping"
    ],
    images: ["images/starter1.jpg", "images/starter2.jpg"],
  },
  // Add more services similarly
};

const urlParams = new URLSearchParams(window.location.search);
const serviceKey = urlParams.get('service');
const service = services[serviceKey];

if (service) {
  document.getElementById('service-title').textContent = service.title;
  document.getElementById('service-description').textContent = service.description;

  const featureList = document.getElementById('service-features');
  service.features.forEach(f => {
    const li = document.createElement('li');
    li.textContent = f;
    featureList.appendChild(li);
  });

  const carousel = document.getElementById('carousel-images');
  service.images.forEach(img => {
    const image = document.createElement('img');
    image.src = img;
    image.style.width = "100%";
    image.style.marginBottom = "10px";
    carousel.appendChild(image);
  });

  document.getElementById('kenya-attractions').innerHTML = `
    <h3>Top Attractions in Kenya</h3>
    <ul>
      <li>Maasai Mara National Reserve</li>
      <li>Diani Beach</li>
      <li>Mount Kenya</li>
      <li>Lake Nakuru</li>
    </ul>
  `;

  document.getElementById('about-polarhomes').innerHTML = `
    <h3>About PolarHomes</h3>
    <p>PolarHomes offers premium stays across Kenya. Our mission is to provide a blend of comfort, culture, and convenience to every traveler.</p>
  `;
} else {
  document.body.innerHTML = "<h2>Service not found</h2>";
}
