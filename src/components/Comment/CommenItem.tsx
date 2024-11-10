
import { Comment } from '../../constants/constant'
import { formatTimestamp } from '../../utils/utils';

const CommenItem = (props:Comment) => {
   
    const  {author,content,id,replies,timestamp} = props;

  return (
    <div className=''>
       <div className='bg-gray-400 px-4 py-2 max-w-[max-content] flex gap-2 justify-start items-start'>
        <h2 className='px-4 py-2 rounded-full bg-black text-white'>{id}</h2>
         <div className='bg-gray-200 px-4 py-2'>
         <p className='font-medium'>{author}</p>
         <p>{content}</p>
         <p className='font-light'>{formatTimestamp(timestamp)}</p>
         </div>
        </div> 

        <div>
        {replies.length>0 && <h2 className='font-medium text-[18px]'>Replies:</h2> }
        <div className='flex mx-4 justify-start'>
           <div className='w-1 h-auto bg-red-600 hover:bg-pink-600'></div> 
           <div>
          
           {replies.map((item)=>{

             return <div className='flex justify-start items-start'>
             <div className='mt-4 h-1 w-4 bg-red-600 hover:bg-pink-600'></div>
             <CommenItem{...item}/>
                </div>
           })}

           </div>
        </div>
        </div>
      
       
    </div>
  )
}

export default CommenItem;