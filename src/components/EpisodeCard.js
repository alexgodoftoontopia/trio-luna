import React from 'react';

function EpisodeCard({ episode }) {
  return (
    <li>
      <strong>{episode.number}:</strong> {episode.title}
    </li>
  );
}

export default EpisodeCard;