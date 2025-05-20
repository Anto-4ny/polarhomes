const services = {
  "rooms": {
    title: "Rooms & Apartments",
    description: "Luxurious rooms and spacious apartments for short or long stays.",
    features: [
      "Private balcony",
      "High-speed WiFi",
      "Fully equipped kitchenette"
    ],
    images: ["images/rooms1.jpg", "images/rooms2.jpg"]
  },
  "starter-kit": {
    title: "Starter Kit",
    description: "Enjoy welcome packages and dining essentials.",
    features: [
      "Local breakfast options",
      "Coffee and tea maker",
      "Daily housekeeping"
    ],
    images: ["images/starter1.jpg", "images/starter2.jpg"]
  },
  "spa-fitness": {
    title: "Spa & Fitness",
    description: "Rejuvenate with spa treatments and a state-of-the-art fitness center.",
    features: [
      "Massage therapy",
      "Sauna and steam rooms",
      "Modern gym equipment"
    ],
    images: ["images/spa1.jpg", "images/fitness1.jpg"]
  },
  "sports-gaming": {
    title: "Sports & Gaming",
    description: "Thrilling sports and gaming facilities for all ages.",
    features: [
      "Indoor games",
      "Swimming pool",
      "Sports courts"
    ],
    images: ["images/sports1.jpg", "images/gaming1.jpg"]
  },
  "event-party": {
    title: "Event & Party",
    description: "Celebrate with style in our modern event and party venues.",
    features: [
      "Banquet halls",
      "Event planning",
      "Catering services"
    ],
    images: ["images/event1.jpg", "images/party1.jpg"]
  },
  "gym-yoga": {
    title: "Gym & Yoga",
    description: "Stay healthy and centered with our gym and yoga sessions.",
    features: [
      "Yoga mats provided",
      "Personal trainers",
      "Peaceful workout environment"
    ],
    images: ["images/gym1.jpg", "images/yoga1.jpg"]
  }
};

// URL query handler
const urlParams = new URLSearchParams(window.location.search);
const serviceKey = urlParams.get('service');
const service = services[serviceKey];

if (service) {
  document.getElementById('service-title').textContent = service.title;
  document.getElementById('service-description').textContent = service.description;

  const featureList = document.getElementById('service-features');
  service.features.forEach(f => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `<i class="fa fa-check text-primary me-2"></i>${f}`;
    featureList.appendChild(li);
  });

  const carouselInner = document.getElementById('carousel-inner');
  service.images.forEach((img, index) => {
    const div = document.createElement('div');
    div.className = `carousel-item${index === 0 ? ' active' : ''}`;
    div.innerHTML = `<img src="${img}" class="d-block w-100 rounded" alt="Service Image">`;
    carouselInner.appendChild(div);
  });

  document.getElementById('kenya-attractions').innerHTML = `
    <h4 class="mb-3 text-uppercase text-primary"><i class="fa fa-map-marker-alt me-2"></i>Nearby Attractions</h4>
    <div class="row g-3">
      <div class="col-md-6"><i class="fa fa-check text-success me-2"></i>Maasai Mara National Reserve</div>
      <div class="col-md-6"><i class="fa fa-check text-success me-2"></i>Diani Beach</div>
      <div class="col-md-6"><i class="fa fa-check text-success me-2"></i>Mount Kenya</div>
      <div class="col-md-6"><i class="fa fa-check text-success me-2"></i>Lake Nakuru</div>
    </div>
  `;

  document.getElementById('about-polarhomes').innerHTML = `
    <h4 class="text-primary mb-3">Why Choose PolarHomes?</h4>
    <p>Located in the capital city of Nairobi, PolarHomes is strategically situated near major shopping centers, the SGR station, JKIA airport, and the expressway. Whether you're visiting for business or pleasure, PolarHomes provides luxury, accessibility, and unforgettable experiences under one roof.</p>
    <ul class="list-unstyled">
      <li><i class="fa fa-map-marker-alt text-primary me-2"></i>Near Expressway</li>
      <li><i class="fa fa-train text-primary me-2"></i>Close to SGR station</li>
      <li><i class="fa fa-plane text-primary me-2"></i>10 mins from JKIA Airport</li>
      <li><i class="fa fa-shopping-cart text-primary me-2"></i>Minutes from major malls</li>
      <li><i class="fa fa-city text-primary me-2"></i>In the heart of Nairobi</li>
    </ul>
  `;
} else {
  document.body.innerHTML = "<h2 class='text-danger text-center mt-5'>Service not found</h2>";
}
