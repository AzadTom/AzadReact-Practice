import SkeletonLayout, {
  ShimmerShape,
} from "../../components/ReusableComponent/Skeleton/SkeletonLayout";
import useInfiniteScroll, { ListType } from "../../hooks/useInfiniteScrolling1";
import MetaTags from "./MetaTags";
import { useNavigate } from "react-router-dom";

function Homepage() {

  const { isLoading, list, refs } = useInfiniteScroll();
  const navigate = useNavigate();

  return (
    <>
      <MetaTags />
      <div className={"p-4 flex flex-wrap gap-4 sticky top-0 bg-white"}>
        <button
          className="px-4 py-2 rounded-md bg-blue-600 text-white"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
        <button
          className="px-4 py-2 rounded-md bg-blue-600 text-white"
          onClick={() => navigate("/nested-comment")}
        >
          Nested comment
        </button>
        <button
          className="px-4 py-2 rounded-md bg-blue-600 text-white"
          onClick={() => navigate("/model")}
        >
          Model
        </button>
        <button
          className="px-4 py-2 rounded-md bg-blue-600 text-white"
          onClick={() => navigate("/infinite-scrolling")}
        >
          Tanstack Query <br /> ReactIntersectionObserver 
        </button>
      </div>



      <main className="max-w-4xl mx-auto px-4">  
      <h2 className="font-bold text-2xl px-4 py-2 rounded-md mt-4">IntersectionObserverAPI <br /> Data Fetching</h2>
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
    </>
  );
}

export default Homepage;
