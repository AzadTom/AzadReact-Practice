import SkeletonLayout, {
  ShimmerShape,
} from "../../components/ui/Skeleton/SkeletonLayout";

const Loading = () => {
  return (
    <div>
      <SkeletonLayout>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ShimmerShape
            width="100%"
            height="250px"
            shape="roundedshape"
            borderRadius="8px"
          />
          <ShimmerShape
            width="100%"
            height="250px"
            shape="roundedshape"
            borderRadius="8px"
          />
          <ShimmerShape
            width="100%"
            height="250px"
            shape="roundedshape"
            borderRadius="8px"
          />
          <ShimmerShape
            width="100%"
            height="250px"
            shape="roundedshape"
            borderRadius="8px"
          />
        </div>
      </SkeletonLayout>
    </div>
  );
};

export default Loading;
