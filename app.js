function fetchGitHub(urlLink) {
    return fetch(urlLink)
    .then(response => response).catch(err => console.log(err));
}
fetchGitHub('https://api.github.com/users/charan51');