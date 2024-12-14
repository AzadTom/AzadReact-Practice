import ShowWithCard from "../../features/Utils/ShowWithCard";
import MetaTags from "./MetaTags";
import { useNavigate } from "react-router-dom";

type TListType = {
  text:string;
  route:string;
}

function Homepage() {

  const navigate = useNavigate();

  const list:TListType[] = [
    {
      text:'Buttons',
      route:'/button'
    },
    {
      text:'Model',
      route:'/model'
    },
    {
      text:'ScrollModel',
      route:'/scroll-model'
    },
    {
      text:'InfiniteScrolling',
      route:'/infnite-scrolling'
    },
    {
      text:'BestInfiniteScrolling',
      route:'/better-infinite-scrolling'
    },
    {
      text:'NestedComment',
      route:'/nested-comment'
    }
  ];

  return (
    <>
      <MetaTags />
      <main className="max-w-[1000px] mx-auto p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {list.map((item:TListType,index:number)=>(<ShowWithCard key={index+1} index={index+1} onClick={()=> navigate(item.route)} text={item.text}/>))}
      </main>
    </>
  );
}

export default Homepage;
