document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const room = params.get("room");

  const roomData = {
    executive: {
      title: "Executive Suite",
      description: "The Executive Suite offers unmatched luxury with a plush king-size bed, spa-style bathroom, a private jacuzzi, and full-length windows with breathtaking city views. Enjoy premium furnishings, a lounge area, mini-bar, and smart automation for lighting and temperature.",
      beds: "1 King Bed",
      baths: "1 Luxury Bath with Jacuzzi",
      wifi: "High-speed Premium Wifi",
      images: ["img/room-2.jpg", "img/room-2b.jpg", "img/room-2c.jpg"]
    },
    studio: {
      title: "Studios",
      description: "Our studio apartments are compact, efficient, and beautifully designed. Perfect for solo travelers or couples, they feature a queen-size bed, modern bathroom, kitchenette, and a work-friendly desk area. A true blend of style and functionality.",
      beds: "1 Queen Bed",
      baths: "1 Modern Bathroom",
      wifi: "Free Wifi Access",
      images: ["img/room-studio.jpg", "img/room-studio2.jpg"]
    },
    "4bedroom": {
      title: "4 Bedroom",
      description: "Designed for families or groups, this spacious 4-bedroom apartment features large bedrooms, en-suite bathrooms, a fully equipped kitchen, elegant dining area, and a private terrace. Experience the comfort of home with hotel-grade services.",
      beds: "4 Beds (2 King, 2 Queen)",
      baths: "4 Full Bathrooms",
      wifi: "Complimentary Ultra-Fast Wifi",
      images: ["img/four-bedroom.jpg", "img/room-4bed.jpg", "img/room-4bed2.jpg", "img/room-4bed0.jpg", "img/room-4bed1.jpg", "img/room-4bed4.jpg", "img/room-4bed5.jpg", "img/room-4bed6.jpg", "img/room-4bed7.jpg", "img/room-4bed8.jpg", "img/room-4bed9.jpg", "img/room-4bed10.jpg", "img/room-4bed11.jpg", "img/room-4bed12.jpg", "img/room-4bed13.jpg", "img/room-4bed14.jpg", "img/room-4bed15.jpg", "img/room-4bed16.jpg", "img/room-4bed17.jpg", "img/room-4bed18.jpg", "img/room-4bed19.jpg"]
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


