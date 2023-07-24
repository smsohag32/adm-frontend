import { Link } from "react-router-dom";
import researchData from "./researchData";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ResearchPaper = () => {
  return (
    <section className="research-papers-section py-8">
      <div className="adm-container mb-10">
        <SectionTitle title="Research Papers Recommended by College Students" />
        {researchData.length === 0 ? (
          <p className="text-gray-600 py-10">
            No research papers available at the moment.
          </p>
        ) : (
          <div className="grid gap-4 mt-10">
            {researchData.map((paper) => (
              <div key={paper.id} className="bg-white p-4 shadow-md rounded-md">
                <h3 className="text-lg font-semibold mb-2">{paper.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Author: {paper.author}
                </p>
                <p className="text-gray-700 mb-2">Abstract: {paper.abstract}</p>
                <p className="text-sm text-gray-600 mb-2">
                  Publication Date: {paper.publicationDate}
                </p>
                <Link
                  to={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  Read Paper <i className="ml-2 fas fa-external-link-alt"></i>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ResearchPaper;
