import SkeletonLayout, {
  ShimmerShape,
} from "../../components/skeleton/SkeletonLayout";
import { ListType } from "../../hooks/useInfiniteScrolling1";
import useInfiniteScroll from "../../hooks/useInfiniteScrolling2";


function BlogPage() {


  const { data: list, isLoading, ref } = useInfiniteScroll();

  return (
    <main className="max-w-4xl mx-auto">
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

export default BlogPage;
