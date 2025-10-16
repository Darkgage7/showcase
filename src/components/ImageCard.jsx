import LazyImage from './LazyImage';

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className="card p-3 sm:p-4 image-container">
      <LazyImage
        src={image.src}
        alt={image.alt}
        className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => onImageClick(image.src)}
      />
      <h3 className="text-base sm:text-lg font-semibold mt-3 sm:mt-4 text-white leading-tight">
        {image.title}
      </h3>
      <p className="text-gray-400 text-xs sm:text-sm mt-1">{image.description}</p>
    </div>
  );
};

export default ImageCard;