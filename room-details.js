document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const room = params.get("room");

  const roomData = {
executive: {
  title: "Executive 1-Bedroom Suite",
  description: `Experience top-tier living in our Executive 1-Bedroom Suite, designed for guests who value elegance, space, and modern comfort. This suite boasts a plush king-size bed, a spa-inspired luxury bathroom with a private jacuzzi, and floor-to-ceiling windows offering breathtaking city or garden views. 

Ideal for business travelers or couples seeking a lavish escape, this suite also includes a lounge area with sofa seating, mini-bar, smart lighting & climate control, and elegant work desk. Every detail is curated to offer an unmatched blend of privacy, sophistication, and convenience.`,
  beds: "1 King Bed with Premium Bedding",
  baths: "1 Spa Bathroom with Jacuzzi Tub & Rain Shower",
  wifi: "High-Speed Premium Wifi + Smart TV Streaming",
  features: [
    "Private jacuzzi in a marble-finish bathroom",
    "Spacious living/lounge area with designer furniture",
    "Mini-bar and in-room coffee/tea station",
    "Smart ambient lighting and thermostat controls",
    "Full-length windows with blackout curtains",
    "Elegant work desk with lamp and power outlets",
    "Complimentary toiletries and plush bathrobes",
    "Luxury tile or hardwood flooring",
    "Secure digital lock entry & daily housekeeping",
    "Air conditioning and ceiling fan combo",
    "Wall-mounted Smart TV with Netflix/YouTube"
  ],
  images: [
    "img/room-2.jpg",
    "img/room-2b.jpg",
    "img/room-2c.jpg",
    "img/room-2d.jpg",
    "img/room-2e.jpg",
    "img/room-2f.jpg",
    "img/room-2g.jpg",
    "img/room-2h.jpg",
    "img/room-2j.jpg",
    "img/room-2k.jpg",
    "img/exec-bedroom.jpg",
    "img/exec-bathroom.jpg",
    "img/exec-jacuzzi.jpg",
    "img/exec-lounge.jpg",
    "img/exec-tv.jpg",
    "img/exec-view.jpg",
    "img/exec-lighting.jpg"
  ]
},
    
studio: {
  title: "Deluxe Studio Apartment",
  description: `Our deluxe studio apartments offer the perfect blend of comfort, elegance, and smart space utilization. Ideal for solo travelers, remote workers, or couples, each unit features an open-plan layout with a cozy queen-size bed, a stylish modern bathroom, a fully equipped kitchenette, and a dedicated work desk with ergonomic seating. 

Relax in a peaceful, private environment that feels like home—with hotel-style convenience. Enjoy smart TV entertainment, a compact dining area, and ample natural light from large windows. The space is thoughtfully designed with modern furnishings, high-quality linens, and tasteful décor. Whether you're staying for a night or a month, you'll love the comfort, security, and seamless experience.`,
  beds: "1 Queen Bed with Premium Linens",
  baths: "1 Stylish Bathroom with Hot Shower",
  wifi: "Complimentary High-Speed Wifi",
  features: [
    "Smart TV with Netflix & YouTube",
    "Fully equipped kitchenette (microwave, fridge, utensils)",
    "Dedicated work desk and chair",
    "Compact dining space",
    "Secure access and 24/7 security",
    "Daily housekeeping upon request",
    "Soft lighting and blackout curtains",
    "Closet and storage space",
    "Tiled flooring with modern finish",
    "Private balcony (select units)",
    "Air conditioning / fan (depending on unit)"
  ],
  images: [
    "img/room-studio.jpg",
    "img/room-studio2.jpg",
    "img/studio-bed.jpg",
    "img/studio-bathroom.jpg",
    "img/studio-kitchen.jpg",
    "img/studio-workspace.jpg",
    "img/studio-tv.jpg",
    "img/studio-dining.jpg",
    "img/studio-closet.jpg"
  ]
},
    
"4bedroom": {
  title: "4 Bedroom Executive Apartment",
  description: `Perfect for families, long-term stays, or group getaways, this luxurious 4-bedroom apartment blends spacious living with modern elegance. Each bedroom is generously sized and includes its own full en-suite bathroom for complete privacy. The home boasts a fully equipped, spacious kitchen ideal for gourmet cooking, a stylish dining area, and a cozy lounge with plush seating and a smart TV.

Enjoy the serenity of your own private compound, complete with a beautifully landscaped green garden, an outdoor sitting area, and a private balcony perfect for morning coffee or evening relaxation. The property is secured with top-notch 24/7 security, perimeter wall, and controlled access to ensure maximum safety and peace of mind.

This suite is ideal for both work and leisure, offering complimentary ultra-fast Wi-Fi, ample parking space, and a peaceful environment just minutes away from the city center.`,
  beds: "4 Beds (2 King, 2 Queen)",
  baths: "4 En-suite Bathrooms + 1 Guest Washroom",
  wifi: "Complimentary Ultra-Fast Wi-Fi (100 Mbps+)",
  features: [
    "Top-notch 24/7 security",
    "Private compound with green garden",
    "Balcony with a view",
    "Spacious fully equipped kitchen",
    "Smart TV with streaming apps",
    "Comfortable modern seats",
    "Private dining area",
    "Daily housekeeping available",
    "Secure parking space",
    "On-demand laundry service",
    "Workspace-friendly with power backup",
    "Luxury towels, linens, and toiletries"
  ],
  images: [
    "img/four-bedroom.jpg",
    "img/room-4bed.jpg",
    "img/room-4bed2.jpg",
    "img/room-4bed0.jpg",
    "img/room-4bed1.jpg",
    "img/room-4bed4.jpg",
    "img/room-4bed5.jpg",
    "img/room-4bed6.jpg",
    "img/room-4bed7.jpg",
    "img/room-4bed8.jpg",
    "img/room-4bed9.jpg",
    "img/room-4bed10.jpg",
    "img/room-4bed11.jpg",
    "img/room-4bed12.jpg",
    "img/room-4bed13.jpg",
    "img/room-4bed14.jpg",
    "img/room-4bed15.jpg",
    "img/room-4bed16.jpg",
    "img/room-4bed17.jpg",
    "img/room-4bed18.jpg",
    "img/room-4bed19.jpg"
  ]
}
  };

  // If invalid room or no data
  if (!room || !roomData[room]) {
    document.body.innerHTML = `
      <div class="container text-center py-5">
        <h3 class="text-danger">Room not found</h3>
        <a href="/" class="btn btn-primary mt-3">Go Back</a>
      </div>`;
    return;
  }

  // Inject room data into page
  const data = roomData[room];
  const titleEl = document.getElementById("room-title");
  const descEl = document.getElementById("room-description");
  const bedsEl = document.getElementById("room-beds");
  const bathsEl = document.getElementById("room-baths");
  const wifiEl = document.getElementById("room-wifi");
  const carouselEl = document.getElementById("carousel-images");

  if (titleEl) titleEl.textContent = data.title;
  if (descEl) descEl.textContent = data.description;
  if (bedsEl) bedsEl.textContent = data.beds;
  if (bathsEl) bathsEl.textContent = data.baths;
  if (wifiEl) wifiEl.textContent = data.wifi;

  if (carouselEl) {
    data.images.forEach((src, i) => {
      const item = document.createElement("div");
      item.className = `carousel-item${i === 0 ? " active" : ""}`;
      item.innerHTML = `<img src="${src}" class="d-block w-100 rounded" alt="${data.title} image ${i + 1}">`;
      carouselEl.appendChild(item);
    });
  }
});


