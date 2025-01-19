interface Props<T> {
    data: T[];
    renderItem: (item: T,index:number,list:T[]) => JSX.Element;
  }
  
  const FlatList = <T,>(props: Props<T>) => {
    const { data, renderItem } = props;
  
    return <>{data.map((item: T,index:number,list:T[]) => renderItem(item,index,list))}</>;
  };
  
  export default FlatList;
  