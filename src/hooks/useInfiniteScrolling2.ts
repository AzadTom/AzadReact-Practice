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
  const response = await useFetchData(config);
  const result = await response.json();
  return { list: result.list, nextPage: pageParam + 1 };
};

const useInfiniteScrollBest = () => {


  const { data, fetchNextPage, hasNextPage,isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['infinte-scrolling'],
    queryFn:fetchList,
    initialPageParam:1,
    getNextPageParam:(lastpage)=> lastpage.nextPage ?? false,
  });

  const { ref, inView } = useInView();

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
