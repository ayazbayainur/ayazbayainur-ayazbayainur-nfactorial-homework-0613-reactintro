import './App.css';
import img1 from './img/1.jpeg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpeg'
import img4 from './img/4.jpeg'
import img5 from './img/5.jpeg'

import {StyleSheet, Text, ImageBackground, View} from 'react';
function App() {
  const imgs = [
    {id: 1, imgSrc:img1},
    {id: 2, imgSrc:img2},
    {id: 3, imgSrc:img3},
    {id: 4, imgSrc:img4},
    {id: 5, imgSrc:img5},

  ]
  return (
    <div className='images' >
      <div className='gallery'>
        {/* {imgs.map((item,index)=>{
          return (
            <div className='pics' key={index}>
                <img src = {item.imgSrc} alt="background" style={{width:"100%", height:'100vh'}}/>
                <div className='text'>great</div>
              </div>
          )
        })} */}


        <div className='pics'>
        <img src={img1} height='100%' style={{width:"100%", height:'100vh'}}/>
        <div className='text'>HEY</div>
        </div>
        <div className='pics'>
        <img src={img2} height='100%' style={{width:"100%", height:'100vh'}}/>
        <div className='text'>LET'S</div>
        </div>
        <div className='pics'>
        <img src={img3} height='100%' style={{width:"100%", height:'100vh'}}/>
        <div className='text'>GIVE</div>
        </div>
        <div className='pics'>
        <img src={img4} height='100%' style={{width:"100%", height:'100vh'}}/>
        <div className='text'>ALL</div>
        </div>
        <div className='pics'>
        <img src={img5} height='100%' style={{width:"100%", height:'100vh'}}/>
        <div className='text'>YOU CAN</div>
        </div>
       </div>


     
    </div>
  );
}

export default App;
