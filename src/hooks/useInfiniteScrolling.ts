import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState, useCallback, RefObject, useRef } from "react";

export interface ListType {
  bloggerAvatar: string;
  bloggerId: number;
  bloggerName: string;
  canViewBlog: boolean;
  isProBlog: boolean;
  is_bookmarked: boolean;
  itemId: number;
  meta_data: string;
  primaryAgeGroup: string;
  proText: string;
  thumb: string;
  title: string;
  type: string;
  url: string;
  viewsCount: string;
}

const useInfiniteScrolling = () => {

  const [page, setPage] = useState(1);
  const [list, setList] = useState<ListType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const refs  = useRef<HTMLDivElement|null>(null);

  const getList = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api9.parentune.com/blogs/blogs?page=${page}`
      );
      const result = await response.json();
      setList((prevList) => [...prevList, ...result.list]);

      console.log("result:",result)
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [page]);


  useEffect(()=>{
    getList();
  },[getList])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isLoading) {
        setPage((prev) => prev + 1);
      }
    }, options);

    if (refs.current) {
      observer.observe(refs.current);
    }

    return () => {
      if (refs.current) {
        observer.unobserve(refs.current);
      }
    };
  }, [refs,isLoading]);

  return { isLoading, list ,refs };


};

export default useInfiniteScrolling;

