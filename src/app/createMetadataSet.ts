interface IMetaData {
  title: string;
  description?: string;
  keywords?: string;
  imageURL?: string;
}

export function createMetadataSet(componentMetadata: IMetaData | undefined, pageURL: string) {
  const title = `${componentMetadata?.title} | Millionaire Mindset`;
  const description = componentMetadata?.description || 'Who wants to be a millionaire?';
  const imageUrl = '';

  return {
    title,
    description,
    icons: {
      icon: '/images/favicon.ico',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@iandreevich228',
      images: imageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageURL,
      siteName: 'Millionaire Mindset',
      images: imageUrl,
      locale: 'en_US',
      type: 'website',
    },
  };
}
