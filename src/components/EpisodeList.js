import React from 'react';
import episodes from '../data/episodes';
import EpisodeCard from './EpisodeCard';

function EpisodeList() {
  return (
    <section className="section">
      {episodes.map((season) => (
        <div key={season.season}>
          <h2>{season.title}</h2>
          <ul>
            {season.episodes.map((ep, index) => (
              <EpisodeCard key={index} episode={ep} />
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default EpisodeList;