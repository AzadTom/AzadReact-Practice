import { Suspense } from "react";
import GoBack from "../../features/Utils/GoBack";
import useInfiniteScrolling, {
  ListType,
} from "../../hooks/useInfiniteScrolling1";
import List from "../../features/List/List";
import Loading from "./Loading";

const LazyBlogList = () => {

  const { isLoading, list, refs } = useInfiniteScrolling();

  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <List
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
          keyExtractor={(item:ListType)=> `${item.bloggerName}${item.bloggerId}`}
        />
      </section>
      {isLoading && <Loading/>}
      <div ref={refs} />
    </div>
  );
};

function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-4">
      <GoBack />
      <h2 className="font-bold text-2xl px-4 py-2 rounded-md mt-4">
        IntersectionObserverAPI <br /> Data Fetching
      </h2>
      <Suspense fallback={<Loading/>}>
        <LazyBlogList />
      </Suspense>
    </main>
  );
}

export default BlogPage;
