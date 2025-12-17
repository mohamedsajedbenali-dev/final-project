// Movie data - hardcoded array of movie objects
const movies = [
    {
        id: 1,
        title: "The Last Adventure",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=925&q=80",
        releaseDate: "2023-07-15",
        description: "A thrilling adventure of a group of explorers discovering a hidden civilization in the Amazon rainforest.",
        rating: 8.5,
        genre: ["action", "adventure"],
        trailerLink: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 2,
        title: "Midnight in Paris",
        poster: "https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        releaseDate: "2023-03-22",
        description: "A romantic drama set in the city of lights, following two strangers who meet by chance one magical night.",
        rating: 7.9,
        genre: ["drama", "romance"],
        trailerLink: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 3,
        title: "Galaxy Warriors",
        poster: "https://images.unsplash.com/photo-1533616688419-b7a585564f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        releaseDate: "2023-11-10",
        description: "In a distant future, a team of elite soldiers must defend Earth from an alien invasion.",
        rating: 8.2,
        genre: ["sci-fi", "action"],
        trailerLink: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 4,
        title: "Laugh Out Loud",
        poster: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80",
        releaseDate: "2023-05-18",
        description: "A hilarious comedy about a stand-up comedian navigating life, love, and the pursuit of laughter.",
        rating: 7.4,
        genre: ["comedy"],
        trailerLink: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 5,
        title: "The Haunted Mansion",
        poster: "https://images.unsplash.com/photo-1504735217151-bfc6f2f7b7ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        releaseDate: "2023-10-31",
        description: "A family moves into a mansion only to discover it's haunted by spirits with a dark past.",
        rating: 6.8,
        genre: ["horror"],
        trailerLink: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 6,
        title: "Fantasy Kingdom",
        poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=868&q=80",
        releaseDate: "2023-08-05",
        description: "A young hero embarks on a quest to save a magical kingdom from an evil sorcerer.",
        rating: 8.7,
        genre: ["fantasy", "adventure"],
        trailerLink: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 7,
        title: "Under the Neon Lights",
        poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        releaseDate: "2023-04-12",
        description: "A crime drama set in 1980s Los Angeles, following a detective solving a mysterious murder case.",
        rating: 8.1,
        genre: ["drama", "crime"],
        trailerLink: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 8,
        title: "Space Odyssey 3000",
        poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
        releaseDate: "2023-12-01",
        description: "Astronauts on a mission to Jupiter encounter mysterious phenomena that challenge their understanding of reality.",
        rating: 8.9,
        genre: ["sci-fi", "adventure"],
        trailerLink: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
];

// DOM Elements
const moviesGrid = document.getElementById('moviesGrid');
const searchInput = document.getElementById('searchInput');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const genreFilter = document.getElementById('genreFilter');
const mobileGenreFilter = document.getElementById('mobileGenreFilter');
const themeSwitch = document.getElementById('themeSwitch');
const trailerModal = document.getElementById('trailerModal');
const trailerFrame = document.getElementById('trailerFrame');
const modalTitle = document.getElementById('modalTitle');
const closeModalBtn = document.querySelector('.close-modal');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const currentYearSpan = document.getElementById('currentYear');

// Initialize the website
function init() {
    displayMovies(movies);
    setupEventListeners();
    setCurrentYear();
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('nekoReelTheme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        themeSwitch.checked = true;
    }
}

// Display movies in the grid
function displayMovies(moviesArray) {
    moviesGrid.innerHTML = '';
    
    if (moviesArray.length === 0) {
        moviesGrid.innerHTML = `
            <div class="no-movies">
                <h3>No movies found</h3>
                <p>Try adjusting your search or filter</p>
            </div>
        `;
        return;
    }
    
    moviesArray.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesGrid.appendChild(movieCard);
    });
}

// Create a movie card element
function createMovieCard(movie) {
    const card = document.createElement('article');
    card.className = 'movie-card';
    card.dataset.id = movie.id;
    card.dataset.genre = movie.genre.join(' ');
    
    // Format release date
    const releaseDate = new Date(movie.releaseDate);
    const formattedDate = releaseDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Create genre tags HTML
    const genreTags = movie.genre.map(genre => 
        `<span class="genre-tag">${genre.charAt(0).toUpperCase() + genre.slice(1)}</span>`
    ).join('');
    
    // Create rating stars
    const ratingStars = createRatingStars(movie.rating);
    
    card.innerHTML = `
        <div class="poster-container">
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span class="release-date">${formattedDate}</span>
                <div class="movie-rating">
                    <i class="fas fa-star"></i>
                    <span>${movie.rating}/10</span>
                </div>
            </div>
            <div class="genre-tags">
                ${genreTags}
            </div>
            <p class="movie-description">${movie.description}</p>
            <button class="watch-trailer-btn" data-trailer="${movie.trailerLink}" data-title="${movie.title}">
                <i class="fas fa-play"></i> Watch Trailer
            </button>
        </div>
    `;
    
    return card;
}

// Create rating stars based on rating value
function createRatingStars(rating) {
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 >= 1;
    let starsHTML = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    
    return starsHTML;
}

// Filter movies based on search input and genre
function filterMovies() {
    const searchTerm = searchInput.value.toLowerCase() || mobileSearchInput.value.toLowerCase();
    const selectedGenre = genreFilter.value || mobileGenreFilter.value;
    
    const filteredMovies = movies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm) || 
                             movie.description.toLowerCase().includes(searchTerm);
        const matchesGenre = selectedGenre === 'all' || movie.genre.includes(selectedGenre);
        
        return matchesSearch && matchesGenre;
    });
    
    displayMovies(filteredMovies);
}

// Open trailer modal
function openTrailerModal(trailerLink, movieTitle) {
    trailerFrame.src = trailerLink;
    modalTitle.textContent = `${movieTitle} - Trailer`;
    trailerModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close trailer modal
function closeTrailerModal() {
    trailerModal.style.display = 'none';
    trailerFrame.src = '';
    document.body.style.overflow = 'auto';
}

// Toggle theme
function toggleTheme() {
    if (themeSwitch.checked) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        localStorage.setItem('nekoReelTheme', 'dark');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('nekoReelTheme', 'light');
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
}

// Set current year in footer
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
}

// Setup all event listeners
function setupEventListeners() {
    // Search input events
    searchInput.addEventListener('input', filterMovies);
    mobileSearchInput.addEventListener('input', filterMovies);
    
    // Genre filter events
    genreFilter.addEventListener('change', filterMovies);
    mobileGenreFilter.addEventListener('change', filterMovies);
    
    // Theme toggle event
    themeSwitch.addEventListener('change', toggleTheme);
    
    // Trailer modal events
    moviesGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('watch-trailer-btn') || 
            e.target.closest('.watch-trailer-btn')) {
            const btn = e.target.classList.contains('watch-trailer-btn') 
                ? e.target 
                : e.target.closest('.watch-trailer-btn');
            const trailerLink = btn.dataset.trailer;
            const movieTitle = btn.dataset.title;
            openTrailerModal(trailerLink, movieTitle);
        }
    });
    
    closeModalBtn.addEventListener('click', closeTrailerModal);
    
    // Close modal when clicking outside
    trailerModal.addEventListener('click', (e) => {
        if (e.target === trailerModal) {
            closeTrailerModal();
        }
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on a link
    mobileMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') {
            return;
        }
        mobileMenu.classList.remove('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);