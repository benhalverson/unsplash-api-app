import Image from "next/image";

const ImageCard = ({ src, alt }: Props) => {
  return (
    <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width="1000"
        height="1000"
        className="object-cover pointer-events-none group-hover:opacity-75"
      />
    </div>
  );
};
export default ImageCard;

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}
