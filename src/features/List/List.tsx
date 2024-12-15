import { Fragment } from "react/jsx-runtime";

type TProps = {
  data: any[];
  renderItem: (item: any) => JSX.Element;
  keyExtractor: (item: any) => string;
};

const List = (props: TProps) => {
  const { data, renderItem,keyExtractor} = props;
  return (
    <Fragment>
      {data.map((item,index)=><Fragment key={keyExtractor(item)+(index+1)}>{renderItem(item)}</Fragment>)}
    </Fragment>
  );
};

export default List;
