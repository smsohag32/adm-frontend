import ReactResponsiveGallery from "react-responsive-gallery";
import { imageData } from "./imageData";
import "./gallery.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Gallery = () => {
  return (
    <div className="min-h-screen">
      <div className=" gallery adm-container pb-10">
        <div className="mb-10">
          <SectionTitle title="College Gallery" />
        </div>
        <div className="flex items-center justify-center h-full">
          <ReactResponsiveGallery images={imageData} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
