import Image from "next/image";

const MyImage = ({ src, alt, width, height }: Props) => {
  return (
    <>
      <Image src={src} alt={alt} width={width} height={height} />
    </>
  );
};
export default MyImage;

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}