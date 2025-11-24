import { featureContentData } from "../../utils/featureContentData";
import Feature from "./Feature";

interface MappedFeatureProps{
    sliceStart: number,
    sliceEnd: number,
    vertical: true | false
}

const MappedFeature = ({sliceStart, sliceEnd, vertical} : MappedFeatureProps) => {
  return (
    <>
      {featureContentData.slice(sliceStart, sliceEnd).map((data, key) => (
        <Feature
          key={key}
          vertical={vertical}
          icon={data.icon}
          featureHeader={data.header}
          featureDescription={data.description}
        />
      ))}
    </>
  );
};

export default MappedFeature;
