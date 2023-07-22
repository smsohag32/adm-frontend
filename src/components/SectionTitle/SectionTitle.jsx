const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className=" py-4 px-5 flex flex-col drop-shadow-2xl shadow-md">
      {title && (
        <h2 className="text-2xl md:text-4xl text-gray-700 font-bold">
          {title}
        </h2>
      )}

      {subTitle && <p>{subTitle}</p>}
    </div>
  );
};

export default SectionTitle;
