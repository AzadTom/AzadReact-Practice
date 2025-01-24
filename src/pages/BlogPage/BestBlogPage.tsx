import { Suspense } from "react";
import GoBack from "../../components/Utils/GoBack";
import { ListType } from "../../hooks/useInfiniteScrolling1";
import useInfiniteScrollBest from "../../hooks/useInfiniteScrolling2";
import Loading from "./Loading";
import FlatList from "../../Hoc/FlatList";

const LazyList = () => {
  const { data: list, isLoading, ref } = useInfiniteScrollBest();

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FlatList
          data={list}
          renderItem={(item: ListType) => {
            return (
              <div className="mt-4">
                <img
                  src={item.thumb}
                  alt={item.bloggerName}
                  className="w-full h-[250px] object-cover"
                />
              </div>
            );
          }}
        />
      </section>
      {isLoading && (
        <section ref={ref}>
          <Loading />
        </section>
      )}
    </>
  );
};

function BestBlogPage() {
  return (
    <main className="max-w-[1000px] mx-auto p-4">
      <GoBack />
      <h2 className="font-bold text-2xl px-4 py-2 rounded-md mt-4 text-[#7c7c7c] hover:text-white">
        ReactIntersectionObserver <br /> TanstackQuery
      </h2>
      <Suspense fallback={<Loading />}>
        <LazyList />
      </Suspense>
    </main>
  );
}

export default BestBlogPage;
