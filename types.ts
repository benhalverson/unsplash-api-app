export interface ImageProps {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ImagesProps {
  images: ImageProps[];
}