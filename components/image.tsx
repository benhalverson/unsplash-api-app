import Image from "next/image";

const MyImage = ({ src, alt, width, height }: Props) => {
  return (
    <>
      <Image src={src} alt={alt} width="1000" height="1000" />
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