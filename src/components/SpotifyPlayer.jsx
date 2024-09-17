import React from 'react';

const SpotifyPlayer = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Reproductor de Spotify */}
      <iframe
        src="https://open.spotify.com/embed/playlist/6lqpxTqS6bB8xqLfrQ1Gbv?utm_source=generator&theme=0"// Autoplay habilitado
        width="300"
        height="80"  // Tamaño mínimo
        allow="autoplay; encrypted-media"
        allowtransparency="true"
        title="Spotify Playlist"
        className="rounded-lg shadow-lg"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;

