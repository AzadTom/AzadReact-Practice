import { useInfiniteQuery } from '@tanstack/react-query';
import {useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useFetchData, { UseFetchDataProps } from './useFetchData';



const fetchList = async ({ pageParam = 1 }) => {
  const config:UseFetchDataProps = {
    url:'https://qa7.parentune.com/api/blog/blogs/blogs',
    params:{
      page:pageParam
    }
  }
  const result = await useFetchData(config);
  return { list: result.list, nextPage: pageParam + 1 };
};


const useInfiniteScrollBest = () => {

  const { ref, inView } = useInView();
  
  const { data, fetchNextPage, hasNextPage,isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['infinte-scrolling'],
    queryFn:fetchList,
    initialPageParam:1,
    getNextPageParam:(lastpage)=> lastpage.list.length > 0 ? lastpage.nextPage : undefined,
  });

 

  useEffect(() => {
    if (inView &&  hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return {
    data: data?.pages.flatMap((page) => page.list) ?? [],
    isLoading: hasNextPage,
    ref,
  };
};

export default useInfiniteScrollBest;
