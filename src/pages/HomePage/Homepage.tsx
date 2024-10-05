import SkeletonLayout, {
  ShimmerShape,
} from "../../components/skeleton/SkeletonLayout";
import useFetchDemoData from "../../hooks/useFetchDemoData";

function Homepage() {
  
  const { isLoading, data } = useFetchDemoData("DemoData");

  if (isLoading) {
    return (
      <SkeletonLayout>
        <ShimmerShape height="50px" width="100%" shape="rectangle" />
        <div className="flex justify-between mx-4">
          <ShimmerShape height="50px" width="50%" shape="rectangle" />
          <ShimmerShape height="50px" width="30%" shape="rectangle" />
        </div>
        <ShimmerShape width="100%" height="300px" shape="rectangle" />
        <div className="mx-4">
          <ShimmerShape width="100px" height="30px" shape="rectangle" />
          <ShimmerShape width="200px" height="30px" shape="rectangle" />
          <ShimmerShape width="300px" height="30px" shape="rectangle" />
          <ShimmerShape width="150px" height="30px" shape="rectangle" />
        </div>
      </SkeletonLayout>
    );
  }

  return (
    <main>
      <section className="w-full h-screen flex justify-center items-center">
          {data && <h2>{data}</h2> }
      </section>
    </main>
  );
}

export default Homepage;
