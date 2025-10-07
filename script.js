// Sélection des éléments
const button = document.getElementById('actionButton');
const message = document.getElementById('message');

// Événement sur le clic du bouton
button.addEventListener('click', () => {
    // Bloque le bouton pour éviter le spam
    button.disabled = true;

    // Animation du bouton (effet néon au clic)
    button.classList.add('active');

    // Affiche le message de chargement
    message.textContent = "The Spotify playlist is loading...";
    message.style.color = "#1DB954";

    // Supprime l'ancienne iframe s’il y en a une
    const oldFrame = document.getElementById('spotify-frame');
    if (oldFrame) oldFrame.remove();

    // Après un petit délai → apparition de la playlist
    setTimeout(() => {
        const playlist = document.createElement("iframe");
        playlist.id = "spotify-frame";
        playlist.src = "https://open.spotify.com/embed/playlist/7Ik7bmmjhuCYDgkrHHML7A"; // 🔗 Remplace par la tienne
        playlist.width = "300";
        playlist.height = "380";
        playlist.frameBorder = "0";
        playlist.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";

        // Style initial (invisible au départ)
        playlist.style.marginTop = "20px";
        playlist.style.borderRadius = "12px";
        playlist.style.opacity = "0";
        playlist.style.transition = "opacity 1.2s ease";

        // Ajoute la playlist sous le message
        message.insertAdjacentElement("afterend", playlist);

        // Fait apparaître la playlist en fondu
        setTimeout(() => {
            playlist.style.opacity = "1";
            message.textContent = "Here’s my Spotify playlist!";
        }, 100);

        // Retire l'effet du bouton après un moment
        setTimeout(() => {
            button.classList.remove('active');
        }, 800);

    }, 1500);
});