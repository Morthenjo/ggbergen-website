import { LoadingBall, LoadingBg, LoadingH1 } from "../AppStyles";

const Loading = () => {
  return (
    <LoadingBg>
      <div>
        <LoadingBall />
        <LoadingH1>LOADING</LoadingH1>
      </div>
    </LoadingBg>
  );
};

export default Loading;
