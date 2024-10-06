interface Props{
    name:string
}

function Card(props:Props) {
  const { name } = props;  
  return (
    <div className='w-[100px] h-[100px] flex justify-center items-center'>
        <h1>{name}</h1>
    </div>
  )
}

export default Card