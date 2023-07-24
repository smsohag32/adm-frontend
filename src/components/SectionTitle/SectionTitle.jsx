const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className=" py-4 px-5 flex flex-col items-center drop-shadow-2xl shadow-md">
      {title && (
        <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold">
          {title}
        </h2>
      )}

      {subTitle && <p>{subTitle}</p>}
    </div>
  );
};

export default SectionTitle;
