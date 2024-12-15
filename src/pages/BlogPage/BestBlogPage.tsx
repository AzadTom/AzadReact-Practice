import { Suspense } from "react";
import List from "../../features/List/List";
import GoBack from "../../features/Utils/GoBack";
import { ListType } from "../../hooks/useInfiniteScrolling1";
import useInfiniteScrollBest from "../../hooks/useInfiniteScrolling2";
import Loading from "./Loading";

const LazyList  = ()=>{

  const { data: list, isLoading, ref } = useInfiniteScrollBest();

  return (
    <main className="max-w-4xl mx-auto px-4">
      <GoBack />
      <h2 className="font-bold text-2xl px-4 py-2 rounded-md mt-4">
        ReactIntersectionObserver <br /> TanstackQuery
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <List
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
          keyExtractor={(item: ListType) => item.bloggerName}
        />
      </section>
      {isLoading && (
        <section ref={ref}>
          <Loading />
        </section>
      )}
    </main>
  );
}



function BestBlogPage() {

  return(
    <Suspense fallback={<Loading/>}>
      <LazyList/>
    </Suspense>
  )
}

export default BestBlogPage;
