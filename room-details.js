document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const room = params.get("room");

    const roomData = {
        executive: {
            title: "Executive Suite",
            images: ["img/room-2.jpg", "img/room-2b.jpg", "img/room-2c.jpg"],
            description: "This Executive Suite includes a king-size bed, hot tub, modern bathroom, and premium decor for luxurious comfort."
        },
        studio: {
            title: "Studios",
            images: ["img/room-studio.jpg", "img/room-studio2.jpg"],
            description: "Perfect for solo travelers or couples, this studio includes a kitchenette, WiFi, and modern design for compact comfort."
        },
        "4bedroom": {
            title: "4 Bedroom",
            images: ["img/room-4bed.jpg", "img/room-4bed2.jpg", "img/room-4bed3.jpg"],
            description: "Ideal for families or groups, this 4-bedroom unit includes a living area, kitchen, private baths, and breathtaking views."
        }
    };

    if (!room || !roomData[room]) {
        document.body.innerHTML = "<h3 class='text-center'>Room not found</h3>";
        return;
    }

    const { title, images, description } = roomData[room];

    document.getElementById("room-title").textContent = title;
    document.getElementById("room-description").textContent = description;

    const carouselDiv = document.getElementById("room-carousel");
    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = title;
        img.style = "width: 100%; max-width: 600px; display: block; margin: 10px auto;";
        carouselDiv.appendChild(img);
    });
});
