const services = {
  "rooms": {
    title: "Rooms & Apartments",
    description: "Luxurious rooms and spacious apartments for short or long stays. Ideal for couples, families, or solo travelers looking for top-tier comfort and convenience.",
    features: [
      "Private balcony with scenic views",
      "High-speed WiFi and Smart TV",
      "Fully equipped kitchenette with modern appliances",
      "24/7 Room Service",
      "Luxury bedding and linens"
    ],
    images: ["images/rooms1.jpg", "images/rooms2.jpg"],
  },
  "starter-kit": {
    title: "Starter Kit",
    description: "Enjoy welcome packages and dining essentials to make your stay feel just like home from day one.",
    features: [
      "Local breakfast options with fruits & snacks",
      "Coffee and tea maker with premium blends",
      "Daily housekeeping and linen replacement",
      "Toiletries and welcome gifts"
    ],
    images: ["images/starter1.jpg", "images/starter2.jpg"],
  },
  // Add more services similarly
};

// Get service from query string
const urlParams = new URLSearchParams(window.location.search);
const serviceKey = urlParams.get('service');
const service = services[serviceKey];

// If valid service found
if (service) {
  // Set title and description
  document.getElementById('service-title').textContent = service.title;
  document.getElementById('service-description').textContent = service.description;

  // Populate features
  const featureList = document.getElementById('service-features');
  service.features.forEach(f => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `<i class="fa fa-check-circle text-success me-2"></i> ${f}`;
    featureList.appendChild(li);
  });

  // Build Bootstrap Carousel
  const carousel = document.getElementById('carousel-images');
  const carouselId = "serviceCarousel";
  let indicators = '', inner = '';

  service.images.forEach((img, index) => {
    indicators += `
      <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${index}" ${index === 0 ? 'class="active"' : ''} aria-label="Slide ${index + 1}"></button>
    `;

    inner += `
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <img src="${img}" class="d-block w-100 rounded" alt="Service image ${index + 1}">
      </div>
    `;
  });

  carousel.innerHTML = `
    <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        ${indicators}
      </div>
      <div class="carousel-inner rounded shadow">
        ${inner}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  `;

  // Kenya Attractions
  const attractions = [
    { name: "Maasai Mara", img: "images/attraction1.jpg" },
    { name: "Diani Beach", img: "images/attraction2.jpg" },
    { name: "Mount Kenya", img: "images/attraction3.jpg" },
    { name: "Lake Nakuru", img: "images/attraction4.jpg" }
  ];

  const attractionHTML = attractions.map(att => `
    <div class="col-md-6 col-lg-3">
      <div class="card shadow-sm h-100">
        <img src="${att.img}" class="card-img-top" alt="${att.name}">
        <div class="card-body">
          <h6 class="card-title"><i class="fa fa-map-pin text-danger me-1"></i>${att.name}</h6>
        </div>
      </div>
    </div>
  `).join("");

  document.getElementById('kenya-attractions').innerHTML = `
    <div class="row">
      ${attractionHTML}
    </div>
  `;

  // About PolarHomes
  document.getElementById('about-polarhomes').innerHTML = `
    <p>PolarHomes offers premium stays across Kenya with unmatched convenience, luxury, and proximity to key urban and travel hotspots. Whether you’re here for business or leisure, we ensure a world-class experience.</p>
    <ul class="list-unstyled mt-3">
      <li><i class="fa fa-check text-primary me-2"></i> Located near Nairobi Expressway</li>
      <li><i class="fa fa-check text-primary me-2"></i> Just 15 minutes from SGR station</li>
      <li><i class="fa fa-check text-primary me-2"></i> Quick access to JKIA Airport</li>
      <li><i class="fa fa-check text-primary me-2"></i> Walking distance to major shopping centers</li>
      <li><i class="fa fa-check text-primary me-2"></i> In the heart of Kenya’s capital city</li>
      <li><i class="fa fa-check text-primary me-2"></i> Surrounded by tourist and business landmarks</li>
    </ul>
  `;
} else {
  // Show not found
  document.body.innerHTML = `
    <div class="container py-5 text-center">
      <h2 class="text-danger"><i class="fa fa-exclamation-circle me-2"></i>Service Not Found</h2>
      <p>Please check the URL or return to the homepage.</p>
      <a href="index.html" class="btn btn-outline-primary mt-3">Go to Homepage</a>
    </div>
  `;
}

