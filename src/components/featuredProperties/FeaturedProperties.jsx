import './featuredProperties.css'
import Room3 from "../../assess/images/room-3.jpg"

const FeaturedProperties = () => {
  return (
    <div className='fp' >
        <div className="fpItem">
        <img src={Room3} alt="" className='fpImg' />
        <span className='fpName'>Aparthotel stare Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from $120</span>
        <div className='fpRating'>
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className='fpItem' >
          <img src={Room3} alt="" className='fpImg' />
          <span className='fpName'>Aparthotel stare Miasto</span>
          <span className='fpCity'>Madrid</span>
          <span className='fpPrice'>Starting from $120</span>
          <div className='fpRating'>
             <button>8.9</button>
             <span>Excellent</span>
            </div>
        </div>
    <div className='fpItem' >
        <img src={Room3} alt="" className='fpImg' />
        <span className='fpName'>Aparthotel stare Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from $120</span>
        <div className='fpRating'>
            <button>8.9</button>
            <span>Excellent</span>
        </div>
    </div>
    <div className='fpItem' >
        <img src={Room3} alt="" className='fpImg' />
        <span className='fpName'>Aparthotel stare Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from $120</span>
        <div className='fpRating'>
            <button>8.9</button>
            <span>Excellent</span>
        </div>
    </div>
    </div>
  )
}

export default FeaturedProperties