import ReactResponsiveGallery from "react-responsive-gallery";
import { imageData } from "./imageData";
import "./gallery.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Gallery = () => {
  return (
    <div className="min-h-screen">
      <div className=" gallery adm-container">
        <div className="mb-10">
          <SectionTitle title="College Gallery" />
        </div>
        <ReactResponsiveGallery images={imageData} />
      </div>
    </div>
  );
};

export default Gallery;
