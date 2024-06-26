function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  


  // Path: /mnt/data/gallery.js

// Sample data for animals
const animals = [
    {
      name: "Belgium Malinois",
      origin: "Belgium",
      image: "/src/img/belgian-malinois.jpg",
      description: "The Belgian Malinois is a breed of dog that is known for its high energy and working ability."
    },
    {
      name: "Golden Retriever",
      origin: "Scotland",
      image: "/src/img/Golden-Retriever.webp",
      description: "The Golden Retriever is a friendly, intelligent, and devoted dog breed."
    },
    
    {
      name: "Siamese Cat",
      origin: "Thailand",
      image: "/src/img/siamese.jpg",
      description: "The Siamese cat is one of the first distinctly recognized breeds of Asian cat."
    },
    
    {
      name: "British Shorthair",
      origin: "United Kingdom",
      image: "/src/img/british.jpg",
      description: "The British Shorthair is a pedigreed version of the traditional British domestic cat."
    },
    {
      name: "Canary",
      origin: "Macaronesia",
      image: "/src/img/canary.webp",
      description: "The domestic canary is a domesticated form of the wild canary, a small songbird in the finch family originating from the Macaronesian Islands."
    },
    {
      name: "Parrot",
      origin: "Global",
      image: "/src/img/parrott.jpg",
      description: "Parrots, also known as psittacines, are birds of the roughly 393 species in 92 genera comprising the order Psittaciformes, found mostly in tropical and subtropical regions."
    }
    // Add more animals as needed
  ];
  
  // Function to display animal cards
  function displayAnimals(animals) {
    const animalCards = document.getElementById("animalCards");
    animalCards.innerHTML = ""; // Clear previous cards
  
    animals.forEach(animal => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${animal.image}" alt="${animal.name}" class="card-img">
        <h3 class="card-title">${animal.name}</h3>
      `;
      card.addEventListener("click", () => showPopup(animal));
      animalCards.appendChild(card);
    });
  }
  
  // Function to filter animals based on search input
  function filterAnimals() {
    const searchBar = document.getElementById("searchBar");
    const searchTerm = searchBar.value.toLowerCase();
    const filteredAnimals = animals.filter(animal =>
      animal.name.toLowerCase().includes(searchTerm)
    );
    displayAnimals(filteredAnimals);
  }
  
  // Function to show popup with animal details
  function showPopup(animal) {
    document.getElementById("popupTitle").innerText = animal.name;
    document.getElementById("popupImage").src = animal.image;
    document.getElementById("popupOrigin").innerText = `Origin: ${animal.origin}`;
    document.getElementById("popupDescription").innerText = animal.description;
    document.getElementById("popup").style.display = "block";
  }
  
  // Function to close the popup
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  // Event listener for search bar
  document.getElementById("searchBar").addEventListener("input", filterAnimals);
  
  // Display all animals initially
  displayAnimals(animals);