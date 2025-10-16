import { useLazyLoad } from '../hooks/useLazyLoad';

const LazyImage = ({ src, alt, className, onClick, ...props }) => {
  const { imgRef, isLoaded, setIsLoaded, isInView } = useLazyLoad();

  return (
    <div ref={imgRef} className={`${className} relative overflow-hidden`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-dark-card animate-pulse rounded-xl" />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={() => setIsLoaded(true)}
          onClick={onClick}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;