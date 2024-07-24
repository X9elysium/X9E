

// ImageFallback.js
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageFallback = (props) => {
  const { src, fallback, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={imgSrc}
      fetchpriority="high"
      onError={() => {
        setImgSrc(fallback);
      }}
    />
  );
};

export default ImageFallback;
