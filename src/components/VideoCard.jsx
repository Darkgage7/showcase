import { useState } from 'react';
import LazyImage from './LazyImage';

const VideoCard = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleVideoClick = () => {
    setIsPlaying(!isPlaying);
  };

  const getEmbedUrl = (videoId, type) => {
    if (type === 'youtube') {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    return `https://www.behance.net/embed/project/${videoId}`;
  };

  return (
    <div className="card p-4 sm:p-6">
      <div className="video-thumbnail mb-4" onClick={handleVideoClick}>
        {!isPlaying ? (
          <div className="relative">
            <LazyImage
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-xl"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-300">
                <svg 
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="video-container">
            <iframe
              src={getEmbedUrl(video.videoId, video.type)}
              className="w-full h-32 sm:h-40 lg:h-48 rounded-xl"
              allowFullScreen
              frameBorder="0"
              title={video.title}
            />
          </div>
        )}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white leading-tight">
        {video.title}
      </h3>
      <p className="text-gray-400 text-sm sm:text-base">{video.description}</p>
    </div>
  );
};

export default VideoCard;