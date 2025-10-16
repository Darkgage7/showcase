import LazyImage from './LazyImage';

const ArticleCard = ({ article }) => {
  const colorClasses = {
    purple: 'text-purple-500 bg-purple-600 hover:bg-purple-700',
    blue: 'text-blue-500 bg-blue-600 hover:bg-blue-700',
    green: 'text-green-500 bg-green-600 hover:bg-green-700',
    red: 'text-red-500 bg-red-600 hover:bg-red-700'
  };

  const buttonColor = colorClasses[article.color]?.split(' ').slice(1).join(' ') || 'bg-purple-600 hover:bg-purple-700';

  return (
    <div className="card p-0 overflow-hidden">
      {/* Article thumbnail */}
      <div className="relative">
        <LazyImage
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-32 sm:h-40 lg:h-48 object-cover"
        />
        {/* Publication badge */}
        {article.publication && (
          <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
            {article.publication}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white leading-tight">
          {article.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
          {article.description}
        </p>
        <div className="text-center">
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-block ${buttonColor} text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition duration-300 text-sm sm:text-base font-medium`}
          >
            Read Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;