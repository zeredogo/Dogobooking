import './featured.css'
import Paris4 from '../../assess/Paris4.jpg';
import Abuja2 from '../../assess/Abuja2.jpg';
import London from '../../assess/London.jpg';

const Featured = () => {
  return (
    <div className='featured' >
       <div className='featuredItem'>
         <img src={Abuja2} alt='' className='featuredImg' />
         <div className='featuredTiles'>
           <h1>Abuja</h1>
           <h2>350 properties</h2>
         </div>
       </div>
       <div className='featuredItem'>
         <img src={Paris4} alt='' className='featuredImg' />
         <div className='featuredTiles'>
           <h1>Paris</h1>
           <h2>532 properties</h2>
         </div>
       </div>
       <div className='featuredItem'>
         <img src={London} alt='' className='featuredImg' />
         <div className='featuredTiles'>
           <h1>London</h1>
           <h2>430 properties</h2>
         </div>
       </div>
    </div>
  )
}

export default Featured