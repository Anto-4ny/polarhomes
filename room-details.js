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
        images: ["img/room-4bed.jpg", "img/room-4bed2.jpg", "img/room-4bed3.jpg"]
      }
    };

    if (!room || !roomData[room]) {
      document.body.innerHTML = '<div class="container text-center py-5"><h3 class="text-danger">Room not found</h3></div>';
    } else {
      const data = roomData[room];

      document.getElementById("room-title").textContent = data.title;
      document.getElementById("room-description").textContent = data.description;
      document.getElementById("room-beds").textContent = data.beds;
      document.getElementById("room-baths").textContent = data.baths;
      document.getElementById("room-wifi").textContent = data.wifi;

      const carousel = document.getElementById("carousel-images");
      data.images.forEach((src, i) => {
        const div = document.createElement("div");
        div.className = `carousel-item${i === 0 ? ' active' : ''}`;
        div.innerHTML = `<img src="${src}" class="d-block w-100" alt="${data.title} image ${i + 1}">`;
        carousel.appendChild(div);
      });
    }
