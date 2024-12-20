import ShowWithCard from "../../features/Utils/ShowWithCard";
import MetaTags from "./MetaTags";
import { useNavigate } from "react-router-dom";

type TListType = {
  text:string;
  route:string;
  img:string;
}

function Homepage() {

  const navigate = useNavigate();

  const list:TListType[] = [
    {
      text:'Buttons',
      route:'/button',
      img:'https://images.pexels.com/photos/7190953/pexels-photo-7190953.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      text:'Model',
      route:'/model',
      img:'https://images.pexels.com/photos/7190953/pexels-photo-7190953.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      text:'ScrollModel',
      route:'/scroll-model',
      img:'https://images.pexels.com/photos/7190953/pexels-photo-7190953.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      text:'InfiniteScrolling',
      route:'/infnite-scrolling',
      img:'https://images.pexels.com/photos/7190944/pexels-photo-7190944.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      text:'BestInfiniteScrolling',
      route:'/better-infinite-scrolling',
      img:'https://images.pexels.com/photos/7190944/pexels-photo-7190944.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      text:'NestedComment',
      route:'/nested-comment',
      img:'https://images.pexels.com/photos/7190944/pexels-photo-7190944.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      text:'Register',
      route:'/register',
      img:'https://images.pexels.com/photos/7190944/pexels-photo-7190944.jpeg?auto=compress&cs=tinysrgb&w=600',
    }
  ];

  return (
    <>
      <MetaTags />
      <main className="max-w-[1000px] mx-auto p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {list.map((item:TListType,index:number)=>(<ShowWithCard key={index+1} index={index+1} img={item.img} onClick={()=> navigate(item.route)} text={item.text}/>))}
      </main>
    </>
  );
}

export default Homepage;
