import React, { useEffect, useState } from 'react';
import './PageStyle.css';
import { Song } from '../types/songInterface';
import { SongList } from '../components/SongList/SongList';

interface SongListPageProps {
  songs: Song[];
  onSongSelect?: (song: Song) => void;
  similarityList: Song[];
}

export const SongListPage: React.FC<SongListPageProps> = ({
  songs,
  onSongSelect,
  similarityList,
}) => {
  const [showRecommendedList, setShowRecommendedList] = useState<Boolean>(false);

  useEffect(() => {
    setShowRecommendedList(similarityList.length > 0);
  }, [similarityList]);

  return (
    <div className="song-list-page">
      <div className="song-list">
        <h2>Song List</h2>
        <SongList songs={songs} onSongSelect={onSongSelect} />
      </div>
      {showRecommendedList && (
        <div className="recommended-list">
          <h2>Recommended</h2>
          {similarityList.map((song, index) => (
            <div key={index} className="song-item">
              <p>{song.track}</p> - <p>{song.artist}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
