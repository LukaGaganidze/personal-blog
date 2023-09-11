"use client";

import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

const Coffee = (className: DetailedHTMLProps<ImgHTMLAttributes>) => {
  return (
    <img
      width="50"
      height="50"
      src="https://img.icons8.com/ios/50/coffee-to-go.png"
      alt="coffee-to-go"
      className={className}
    />
  );
};

export default Coffee;
