import SkeletonLayout, {
  ShimmerShape,
} from "../../components/ReusableComponent/Skeleton/SkeletonLayout";
import GoBack from "../../features/Utils/GoBack";
import { ListType } from "../../hooks/useInfiniteScrolling1";
import useInfiniteScrollBest from "../../hooks/useInfiniteScrolling2";


function BestBlogPage() {
  const { data: list, isLoading, ref } = useInfiniteScrollBest();

  return (
    <main className="max-w-4xl mx-auto px-4">
      <GoBack/>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {list &&
          list.length > 0 &&
          list.map((item: ListType, index: number) => (
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
        <section ref={ref}>
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
        </section>
      )}
    </main>
  );
}

export default BestBlogPage;
