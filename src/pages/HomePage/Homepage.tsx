import { useState } from "react";
import SkeletonLayout, {
  ShimmerShape,
} from "../../components/ReusableComponent/Skeleton/SkeletonLayout";
import useInfiniteScroll, { ListType } from "../../hooks/useInfiniteScrolling1";
import ShowModel from "../../components/ReusableComponent/Dialog/ShowModel";
import MetaTags from "./MetaTags";

function Homepage() {
  const { isLoading, list, refs } = useInfiniteScroll();
  const [state, setState] = useState<boolean>(false);

  return (
    <>
      <MetaTags/>
      <main className="max-w-4xl mx-auto">
        {state && (
          <ShowModel bg="#F0F0F0">
            <div className="bg-slate-950 max-w-[300px] text-white px-4 py-2 rounded-md">
              <h2 className="text-lg font-medium">Lorem</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                perferendis placeat quas nesciunt beatae rerum error nulla quod
                dolorum magnam reiciendis sapiente ratione voluptas hic, esse
                corporis ea possimus, eligendi atque, debitis quasi.
              </p>
              <div className="flex justify-between items-center my-2">
                <button className="px-4 py-2 border ">Thank You</button>
                <button
                  className="px-4 py-2 bg-black border"
                  onClick={() => setState(!state)}
                >
                  Close
                </button>
              </div>
            </div>
          </ShowModel>
        )}
        <div className="flex justify-end">
          <button
            className="px-4 py-2 rounded-md bg-blue-600 text-white my-2"
            onClick={() => setState(!state)}
          >
            Show me
          </button>
        </div>
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
