import { Suspense } from "react";
import GoBack from "../../components/Utils/GoBack";
import useInfiniteScrolling, {
  ListType,
} from "../../hooks/useInfiniteScrolling1";
import Loading from "./Loading";
import FlatList from "../../Hoc/FlatList";

const LazyBlogList = () => {
  const { isLoading, list, refs } = useInfiniteScrolling();

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FlatList
          data={list}
          renderItem={(item: ListType) => (
            <div key={item.bloggerName} className="mt-4">
              <img
                src={item.thumb}
                alt={item.bloggerName}
                className="w-full h-[250px] object-cover"
              />
            </div>
          )}
        />
      </section>
      {isLoading && <Loading />}
      <div ref={refs} />
    </>
  );
};

function BlogPage() {
  return (
    <main className="max-w-[1000px] mx-auto p-4">
      <GoBack />
      <h2 className="font-bold text-2xl px-4 py-2 rounded-md mt-4 text-[#7c7c7c] hover:text-white">
        IntersectionObserverAPI <br /> Data Fetching
      </h2>
      <Suspense fallback={<Loading />}>
        <LazyBlogList />
      </Suspense>
    </main>
  );
}

export default BlogPage;
