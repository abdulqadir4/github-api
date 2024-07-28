const usernameInput = document.getElementById('username');
const getProfileButton = document.querySelector('button[type="submit"]');
const profileContainer = document.querySelector('.profile-container');

getProfileButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    if (username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                const profileHTML = `
                    <div class="profile">
                        <img src="${data.avatar_url}" alt="${data.name}">
                        <h2>${data.name}</h2>
                        <p>Username: ${data.login}</p>
                        <p>Location: ${data.location}</p>
                        <p>Followers: ${data.followers}</p>
                        <p>Following: ${data.following}</p>
                        <p>Repositories: ${data.public_repos}</p>
                    </div>
                `;
                profileContainer.innerHTML = profileHTML;
            })
            .catch(error => console.error(error));
    } else {
        alert('Please enter a valid GitHub username');
    }
});