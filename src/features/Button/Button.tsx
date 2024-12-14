
type TButtonProps = {
    className: string;
    text: string;
    icon?:JSX.Element;
    onClick?:()=>void;
};

const Button = (props: TButtonProps) => {
  const { icon,text, className ,onClick=()=>{}} = props;
  return (
    <button aria-label="button" className={`${className} flex items-center`} onClick={onClick}>
      {icon? icon:null}{text}
    </button>
  );
};

export default Button;




