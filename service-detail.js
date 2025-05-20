const services = {
  "rooms": {
    title: "Rooms & Apartments",
    description: "Experience unmatched comfort in our spacious rooms and fully-furnished apartments. Whether you're here for a quick getaway or an extended stay, our accommodations are tailored to provide privacy, luxury, and convenience.",
    features: [
      "Private balcony with scenic views",
      "High-speed WiFi & Smart TV",
      "Fully equipped kitchenette with modern appliances",
      "Room service and concierge support",
      "Daily housekeeping and laundry options"
    ],
    images: ["images/rooms1.jpg", "images/rooms2.jpg", "images/rooms3.jpg", "images/apartment1.jpg"]
  },
  "starter-kit": {
    title: "Starter Kit",
    description: "Start your day with our thoughtfully crafted starter kit featuring delightful local tastes and practical essentials. Ideal for travelers settling in.",
    features: [
      "Daily local breakfast options",
      "Coffee & tea maker with welcome treats",
      "Refrigerated mini bar",
      "Essential toiletries and fresh towels",
      "Daily housekeeping service"
    ],
    images: ["images/starter1.jpg", "images/starter2.jpg", "images/starter3.jpg", "images/starter4.jpg"]
  },
  "spa-fitness": {
    title: "Spa & Fitness",
    description: "Rejuvenate your body and mind at our spa and fitness zone. Unwind with tranquil therapies or energize in our modern gym facilities.",
    features: [
      "Professional massage therapy & body scrubs",
      "Sauna, steam room & Jacuzzi",
      "Modern gym with cardio and weights",
      "Certified fitness trainers",
      "Relaxation lounge and detox drinks"
    ],
    images: ["images/spa1.jpg", "images/fitness1.jpg", "images/spa2.jpg", "images/gym2.jpg"]
  },
  "sports-gaming": {
    title: "Sports & Gaming",
    description: "Stay active and entertained with our diverse range of indoor and outdoor recreational activities. Perfect for all age groups.",
    features: [
      "Billiards, darts & board games lounge",
      "Olympic-size swimming pool",
      "Basketball and tennis courts",
      "Mini soccer turf",
      "Children’s play area & video game arcade"
    ],
    images: ["images/sports1.jpg", "images/gaming1.jpg", "images/swimming1.jpg", "images/court1.jpg"]
  },
  "event-party": {
    title: "Event & Party",
    description: "Celebrate milestones or host corporate events in style. Our venues blend elegance and flexibility, perfect for both grand and intimate gatherings.",
    features: [
      "Elegant banquet halls & outdoor garden spaces",
      "Event planning support & decor setup",
      "DJ booth and lighting systems",
      "Professional catering services",
      "Private lounges and VIP suites"
    ],
    images: ["images/event1.jpg", "images/party1.jpg", "images/event2.jpg", "images/party2.jpg"]
  },
  "gym-yoga": {
    title: "Gym & Yoga",
    description: "Find balance and build strength with our dynamic fitness and mindfulness routines. Our serene wellness space supports your full-body journey.",
    features: [
      "Dedicated yoga studio with mats and props",
      "Guided meditation and yoga classes",
      "Full gym access with personal trainer sessions",
      "Hydration station with herbal teas",
      "Peaceful environment for wellness seekers"
    ],
    images: ["images/gym1.jpg", "images/yoga1.jpg", "images/yoga2.jpg", "images/fitness2.jpg"]
  }
};

// Universal Nairobi attractions
const attractionsHTML = `
  <h4 class="mb-3 text-uppercase text-primary"><i class="fa fa-map-marker-alt me-2"></i>Nearby Attractions</h4>
  <div class="row g-3">
    <div class="col-md-6"><i class="fa fa-check text-success me-2"></i>Nairobi National Park</div>
    <div class="col-md-6"><i class="fa fa-check text-success me-2"></i>Giraffe Centre</div>
    <div class="col-md-6"><i class="fa fa-check text-success me-2"></i>David Sheldrick Elephant Orphanage</div>
    <div class="col-md-6"><i class="fa fa-check text-success me-2"></i>Karen Blixen Museum</div>
    <div class="col-md-6"><i class="fa fa-check text-success me-2"></i>Bomas of Kenya</div>
    <div class="col-md-6"><i class="fa fa-check text-success me-2"></i>Maasai Market</div>
  </div>
`;

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

  document.getElementById('kenya-attractions').innerHTML = attractionsHTML;

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
