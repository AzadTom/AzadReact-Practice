
import './practice.style.css';

const PracticeClock = () => {

  return (
    <div className="container">
        <div className="clock">

          <div className="hand" id="hour">
                <span></span>
            </div>
            <div className="hand" id="min">
                <span></span>
            </div>
            <div className="hand" id="sec">
                <span></span>
            </div>

            {Array.from({length:12},(_,index:number)=>(
                <span className='nums' style={{"--i":index+1} as React.CSSProperties}>{index+1}</span>
            ))}

        </div>

    </div>
  )
}

export default PracticeClock