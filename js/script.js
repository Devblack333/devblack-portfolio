// Gallery images
const galleryImages = [
    "images/sample1.jpg",
    "images/sample2.jpg",
    "images/sample3.jpg"
];

// Add gallery images
const galleryContainer = document.getElementById("galleryContainer");
galleryImages.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Gallery Image";
    galleryContainer.appendChild(img);
});

// Games section
const games = [
    {
        name: "اسرق المشاهير",
        image: "images/game1.jpg",
        link: "https://www.roblox.com/games/103938520476530/unnamed",
        stats: "130k+ Visits • 15k+ Favorites"
    }
];

const gamesContainer = document.getElementById("gamesContainer");
games.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("game-card");

    card.innerHTML = `
        <img src="${game.image}" alt="${game.name}">
        <h3>${game.name}</h3>
        <p>${game.stats}</p>
        <a href="${game.link}" target="_blank">Play Now</a>
    `;
    gamesContainer.appendChild(card);
});
