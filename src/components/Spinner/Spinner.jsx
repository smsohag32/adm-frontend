import { Puff } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[90vh]">
      <Puff
        height="60"
        width="60"
        radius={1}
        color="#073fc0"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
