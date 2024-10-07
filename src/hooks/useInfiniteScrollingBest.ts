import { useInfiniteQuery } from '@tanstack/react-query';
import {useEffect } from 'react';
import { useInView } from 'react-intersection-observer';



const fetchList = async ({ pageParam = 1 }) => {
  const response = await fetch(`https://api9.parentune.com/blogs/blogs?page=${pageParam}`);
  const result = await response.json();
  return { list: result.list, nextPage: pageParam + 1 };
};

const useInfiniteScrollBest = () => {


  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['infinte-scrolling'],
    queryFn:fetchList,
    initialPageParam:1,
    getNextPageParam:(lastpage)=> lastpage.nextPage ?? false,
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return {
    data: data?.pages.flatMap((page) => page.list) ?? [],
    isLoading: isFetching && !isFetchingNextPage,
    ref,
  };
};

export default useInfiniteScrollBest;
