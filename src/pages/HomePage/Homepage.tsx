import SkeletonLayout, {
  ShimmerShape,
} from "../../components/skeleton/SkeletonLayout";
import useInfiniteScroll, {
  ListType,
} from "../../hooks/useInfiniteScrolling1";

function Homepage() {
  const { isLoading, list, refs } = useInfiniteScroll();

  return (
    <main className="max-w-4xl mx-auto">
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {list &&
          list.length > 0 &&
          list.map((item: ListType) => (
            <div key={item.bloggerName} className="mt-4">
              <img
                src={item.thumb}
                alt={item.bloggerName}
                className="w-full h-[250px] object-cover"
              />
            </div>
          ))}
      </section>
      {isLoading && (
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
      )}
      <div ref={refs} />
    </main>
  );
}

export default Homepage;
