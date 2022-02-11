// import { ImagesProps } from "../types";
import MyImage from "./image";

const ImageList = ({ images }: any) => {
  return (
    <div className="flex flex-center">
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {images.map((image: any) => (
          <li key={image.id} className="relative">
            <MyImage
              src={image.urls.small}
              alt={image.description}
              width={image.width}
              height={image.height}
            />
            <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
              <a href={image.links.html} target="_blank" rel="noopener noreferrer">Link</a>
            </p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              {image.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageList;
