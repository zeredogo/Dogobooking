import  './propertyList.css';
import Beach2 from '../../assess/Beach2.jpg';
import Room4 from '../../assess/images/Room-4.jpg';
import Room7 from '../../assess/images/Room-7.jpg';
import Room11 from '../../assess/images/Room-11.jpg';
import Room9 from '../../assess/images/Room-9.jpg';


const PropertyList = () => {
  return (
    <div className='pList' >
        <div className="pListItem">
            <img src={Room4} alt="" className='pListImg' />
            <div className="pListTitle">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Room11} alt="" className='pListImg' />
            <div className="pListTitle">
                <h1>Apartments</h1>
                <h2>2331 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Room9} alt="" className='pListImg' />
            <div className="pListTitle">
                <h1>Resort</h1>
                <h2>2331 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Room7} alt="" className='pListImg' />
            <div className="pListTitle">
                <h1>Villas</h1>
                <h2>2331 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Beach2} alt="" className='pListImg' />
            <div className="pListTitle">
                <h1>Cabins</h1>
                <h2>2331 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList