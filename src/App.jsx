import { useState } from 'react';
import VideoCard from './components/VideoCard';
import ImageCard from './components/ImageCard';
import ArticleCard from './components/ArticleCard';
import ImageModal from './components/ImageModal';
import { videos, images, articles } from './data/projects';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-dark-bg min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            From Audience Insights to Cultural Impact
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Marketing campaigns that moved from discovery to community-building to measurable growth.
          </p>
        </header>

        {/* Video Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="section-title">Project Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="section-title">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {images.map((image) => (
              <ImageCard 
                key={image.id} 
                image={image} 
                onImageClick={handleImageClick}
              />
            ))}
          </div>
        </section>

        {/* Articles Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="section-title">Sample Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-dark-border">
          <p className="text-gray-500 text-sm sm:text-base">
            © 2025 Yakubu Budu-Saaka Marketing Showcase. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Image Modal */}
      <ImageModal 
        isOpen={!!selectedImage} 
        imageSrc={selectedImage} 
        onClose={closeModal} 
      />
    </div>
  );
}

export default App;