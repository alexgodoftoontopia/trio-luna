import React from 'react';

function EpisodeCard({ episode }) {
  return (
    <li>
      <strong>Episodio {episode.number}:</strong> {episode.title}
    </li>
  );
}

export default EpisodeCard;