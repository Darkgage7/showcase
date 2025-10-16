const BASE_URL = import.meta.env.BASE_URL;

export const videos = [
  {
    id: 1,
    title: "Introducing DC Universe",
    description: "Strategic product launch.",
    thumbnail: "https://img.youtube.com/vi/rSm8wq0YIuc/maxresdefault.jpg",
    videoId: "rSm8wq0YIuc",
    type: "youtube"
  },
  {
    id: 2,
    title: "DramaFever Movie Night",
    description: "Branded campaign for movie premieres.",
    thumbnail: "https://img.youtube.com/vi/oj0vIvvGEqg/maxresdefault.jpg",
    videoId: "oj0vIvvGEqg",
    type: "youtube"
  },
  {
    id: 3,
    title: "Swamp Thing Trailer",
    description: "DCU Original Title Marketing.",
    thumbnail: "https://img.youtube.com/vi/xVnHZ5SF1Jg/maxresdefault.jpg",
    videoId: "xVnHZ5SF1Jg",
    type: "youtube"
  },
  {
    id: 4,
    title: "Big Bang Concert Trailer",
    description: "Concert tour access campaign.",
    thumbnail: "https://img.youtube.com/vi/_PZiZhadsvI/maxresdefault.jpg",
    videoId: "_PZiZhadsvI",
    type: "youtube"
  },
  {
    id: 5,
    title: "DC Universe Merch Giveaway",
    description: "DCU Influencer Partnership.",
    thumbnail: "https://img.youtube.com/vi/uvpbNpSbsmg/maxresdefault.jpg",
    videoId: "uvpbNpSbsmg",
    type: "youtube"
  },
  {
    id: 6,
    title: "K-Pop Integrated Campaign",
    description: "DramaFever Influencer Partnership.",
    thumbnail: `${BASE_URL}images/original-kpop-campaign.jpg`,
    videoId: "Dep-KN94Rf4",
    type: "youtube"
  }
];

export const images = [
  {
    id: 1,
    title: "Swamp Thing Campaign Visuals",
    description: "DCU Original Title Marketing.",
    src: `${BASE_URL}images/dcu-swamp-thing-campign.jpg`,
    alt: "Swamp Thing Poster"
  },
  {
    id: 2,
    title: "DramaFever Valentines Day Campaign",
    description: "DramaFever Valentine's Day Campaign.",
    src: `${BASE_URL}images/df-valentines-campaign.png`,
    alt: "DF Valentines Day"
  },
  {
    id: 3,
    title: "DCU Digital Ad",
    description: "Performance-driven digital advertising creative.",
    src: `${BASE_URL}images/dcu-titans-campaign.jpg`,
    alt: "DCU Titans"
  },
  {
    id: 4,
    title: "DramaFever Platform",
    description: "DramaFever Platform Design.",
    src: `${BASE_URL}images/df-platform-experience-web.jpg`,
    alt: "DF Web Experience"
  },
  {
    id: 5,
    title: "DC Universe Landing Page Experience",
    description: "DC Universe Landing Page Design.",
    src: `${BASE_URL}images/dcu-landing-page-experience.png`,
    alt: "DCU Landing Page"
  },
  {
    id: 6,
    title: "DC Universe Brand Experience",
    description: "Four brand pillars in app experience.",
    src: `${BASE_URL}images/dcu-brand-identity.png`,
    alt: "DCU Brand Identity"
  }
];

export const articles = [
  {
    id: 1,
    title: "NY Times Feature",
    description: "The Addictive Charms of South Korean Drama.",
    url: "https://www.nytimes.com/2017/09/15/movies/korean-drama-streaming.html",
    color: "purple",
    thumbnail: "https://static01.nyt.com/images/2017/09/17/arts/17STREAMING/17STREAMING-superJumbo.jpg?quality=75&auto=webp",
    publication: "The New York Times"
  },
  {
    id: 2,
    title: "Rolling Stone K-pop Integrated Campaign",
    description: "Watch BIGBANG's Explosive Trailer for 'Made 2015 Concert' Film.",
    url: "https://www.rollingstone.com/music/music-news/watch-bigbangs-explosive-trailer-for-made-2015-concert-film-62068/",
    color: "blue",
    thumbnail: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-215886-GettyImages-489913804.jpg?w=910&h=511&crop=1",
    publication: "Rolling Stone"
  },
  {
    id: 3,
    title: "The Webby Awards",
    description: "DC Universe - People's Voice Winner.",
    url: "https://winners.webbyawards.com/2020/websites/general-websites/media-streaming/121129/dc-universe",
    color: "green",
    thumbnail: "https://assets.recogmedia.net/1/85/Entry_Uploads/121129-thumb.jpg",
    publication: "The Webby Awards"
  },
  {
    id: 4,
    title: "Korean Film News - Movie Growth Coverage",
    description: "DramaFever Launches CJ Movie Channel.",
    url: "https://www.koreanfilm.or.kr/eng/news/news.jsp?pageIndex=1&blbdComCd=601006&seq=3754&mode=VIEW&returnUrl=&searchKeyword=",
    color: "red",
    thumbnail: "https://mn.kobiz.or.kr/cheditor/attach/iKvDjJvjZHukksOReUbX.png",
    publication: "Korean Film News"
  }
];