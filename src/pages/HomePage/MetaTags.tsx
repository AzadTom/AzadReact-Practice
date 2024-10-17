import { Helmet } from "react-helmet";

function MetaTags() {
  return (
    <Helmet>
      {/* commen data: */}
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="https://img1.parentune.com/images/logo/ParentuneFavicon.png"
      />
      <link rel="dns-prefetch" href="https://www.parentune.com" />
      <link rel="dns-prefetch" href="https://img1.parentune.com" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="generator" content="Parentune" />
      <meta
        name="google-site-verification"
        content="fe9G53IP506VvljmNqGxKdBQZZfNzuAslU6WKZ8jazM"
      />
      <meta name="robots" content="index, follow" />
      <link
        rel="icon"
        type="image/png"
        href="https://img1.parentune.com/images/logo/ParentuneFavicon.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://img1.parentune.com/images/logo/ParentuneFavicon.png"
        sizes="16x16"
      />
      <link
        rel="shortcut icon"
        href="https://img1.parentune.com/images/logo/ParentuneFavicon.png"
      />
      <link
        rel="manifest"
        href="https://www.parentune.com/react/build/manifest.json"
      />
      <meta property="fb:app_id" content="331498810359251" />
      <meta property="og:type" content="article" />
      <meta property="fb:pages" content="120033631475442,338119813349681" />
      <meta
        name="facebook-domain-verification"
        content="8hw77zb7v05agvjmiul7bl4sc03kub"
      />

      {/* Data what i want to put in my graph: */}
      <meta
        name="keywords"
        content="travel, adventure, vacation, nature, photography, outdoor"
      />
      <meta
        name="title"
        content="Explore the World's Most Breathtaking Destinations"
      />
      <meta
        name="image"
        content="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@AdventureTravel" />
      <meta
        name="twitter:title"
        content="Discover Beautiful Places for Your Next Adventure"
      />
      <meta
        name="twitter:description"
        content="Join us as we explore the most scenic and awe-inspiring travel destinations around the globe."
      />
      <meta
        name="twitter:image:src"
        content="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
      />
      <meta name="twitter:creator" content="@AdventureTravel" />
      <meta
        name="description"
        content="Discover awe-inspiring destinations around the world and make your next adventure unforgettable."
      />
      <meta
        property="og:title"
        content="Explore the World's Most Breathtaking Destinations"
      />
      <meta
        property="og:image"
        content="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
      />
      <meta
        property="og:description"
        content="Join us in uncovering the most scenic travel spots for your next adventure."
      />
      <meta property="og:site_name" content="Adventure Travel" />
      <meta
        property="og:url"
        content="https://www.adventure-travel.com/explore-destinations"
      />
      <meta property="article:author" content="John Doe" />
      <meta
        property="article:publisher"
        content="Adventure Travel Publications"
      ></meta>
      <link
        rel="canonical"
        href="https://www.adventure-travel.com/explore-destinations"
      />
      <title>Explore the World's Most Breathtaking Destinations</title>
    </Helmet>
  );
}

export default MetaTags;
