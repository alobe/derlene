import { useEffect, useState } from 'react';

export default (url: string, crossOrigin = '*') => {
  const [image, set] = useState<HTMLImageElement | undefined>(undefined);
  useEffect(() => {
    const reset = () => set(undefined);

    if (!url) return reset;
    const img = document.createElement('img');
    img.onload = () => set(img);
    img.onerror = reset;
    img.crossOrigin = crossOrigin || '*';
    img.src = url;

    return reset;

  }, [url, crossOrigin]);

  return image;
};
