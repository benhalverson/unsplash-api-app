// import { ImagesProps } from "../types";
import MyImage from "./image";

const ImageList = ({ images }: any) => {
  return (
    <div>
      <h1>Image List</h1>
      <ul>
        {images.map((image: any) => (
          <li key={image.id}>
            <MyImage
              src={image.urls.small}
              alt={image.description}
              width={image.width}
              height={image.height}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageList;
