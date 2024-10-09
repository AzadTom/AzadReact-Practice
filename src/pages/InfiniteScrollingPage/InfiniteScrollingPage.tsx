import SkeletonLayout, {
  ShimmerShape,
} from "../../components/skeleton/SkeletonLayout";
import { ListType } from "../../hooks/useInfiniteScrolling";
import useInfiniteScrollBest from "../../hooks/useInfiniteScrollingBest";

function InfiniteScrollingPage() {


  const { data:list, isLoading, ref } = useInfiniteScrollBest();

  return (
    <main className="max-w-4xl mx-auto">
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {list &&
          list.length > 0 &&
          list.map((item: ListType,index:number) => (
            <div key={item.bloggerName + index} className="mt-4">
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
      <div ref={ref} className="bg-red-600 h-1"/>
    </main>
  );
}

export default InfiniteScrollingPage;
