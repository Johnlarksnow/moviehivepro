// Fetching the type and page parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type') || 'new';
const page = urlParams.get('page') || 1;

function fetchTVShowDetails() {
    fetch(`https://vidsrc.to/vapi/tv/${type}/${page}`)
        .then(response => response.json())
        .then(data => {
            const tvShowContainer = document.getElementById('tv-show-container');
            tvShowContainer.innerHTML = '';

            // Assuming the API response contains an array named 'episodes' containing the details of each episode
            data.episodes.forEach(episode => {
                let episodeElement = `
                <div class="episode-card">
                    <h2>${episode.title}</h2>
                    <p>${episode.description}</p>
                    <img src="${episode.thumbnail}" alt="${episode.title}">
                </div>`;

                tvShowContainer.innerHTML += episodeElement;
            });
        })
        .catch(error => {
            console.error('Failed to fetch TV show details', error);
        });
}

// Fetch the TV show details by default when the window loads
fetchTVShowDetails();
