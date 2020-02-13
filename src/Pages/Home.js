import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import '../CSS/home.css';

export default (props) => {

const error = useSelector( s => {if (s.message){return s.message}})

return (
  <div className='home'>
    <h1>Home</h1>
    <span className='errorSpan'>{error}</span>

  <div className='parallax'>
    <div className='content'>
      <p className='firstP homepageText'>Sed posuere neque sed tortor luctus pharetra. Nullam in nisl metus. Donec ac ante lobortis, sagittis mauris eu, pulvinar leo. Morbi lacinia posuere quam, in bibendum augue lacinia id. Sed molestie ante lorem, sollicitudin facilisis urna tristique quis. Aliquam interdum consequat ante at suscipit. Donec vitae mi quis nisl ultrices tempor vel vitae lorem. In vitae eros eros. .</p>
    </div>
  </div>

  <div className='regular'>
    <div className='content'>
      <p className='secondP homepageText'>Sed magna erat, convallis ac ultricies sed, congue eu turpis. Pellentesque consectetur vehicula accumsan. Vestibulum tincidunt laoreet suscipit. Suspendisse mollis mauris sit amet tellus suscipit porttitor. Donec fermentum efficitur ante eget eleifend. Praesent id urna pellentesque felis viverra blandit id pretium dolor. Praesent nisi ex, pharetra nec vulputate ac, auctor eget mi.</p>
    </div>
  </div>

  <div className='parallax'>
    <div className='content'>
      <p className='thirdP homepageText'>Maecenas elementum mattis ultricies. Nullam convallis velit a est congue accumsan. Integer id arcu vitae nibh facilisis rhoncus. Praesent aliquam tristique augue quis lacinia. Phasellus vel rutrum diam. Nulla feugiat ultricies erat a aliquet. Nullam eget posuere mauris. Suspendisse ac elementum odio. Cras at egestas quam. Phasellus ultrices eros non gravida mollis. Donec ac nunc vulputate, iaculis quam eget, lacinia urna. Sed dapibus laoreet sem, id finibus nisl dignissim finibus. Donec a urna dui. Praesent dolor nunc, pharetra nec luctus ac, interdum a libero. Integer euismod porttitor elementum.</p>
    </div>
  </div>



<div className='regular'>
  <div className='content'>
      <p className='fourthP homepageText'>Donec in viverra dui. Praesent interdum ullamcorper rhoncus. Mauris ut dictum felis. Fusce consequat tellus vulputate, fringilla tellus at, dapibus ipsum. Aenean velit purus, hendrerit eget velit eget, accumsan scelerisque elit. Ut iaculis mollis arcu, vel eleifend dui elementum nec. Phasellus non hendrerit ipsum. Nulla quis pellentesque enim, non consectetur mi. Curabitur bibendum, massa sit amet sollicitudin fringilla, elit tortor tempus magna, at gravida erat purus ac nisl. Mauris sagittis ac nunc at fringilla. Nunc et rhoncus justo. Nam ut gravida risus, ut rhoncus arcu. Cras urna nisi, ultrices ac sollicitudin in, laoreet finibus risus.</p>
    </div>
  </div>

  <div className='parallax'>
    <div className='content'>
      <p className='fifthP homepageText'>Fusce bibendum enim sed justo varius ultrices. Nam tincidunt, tortor id tristique ultrices, tortor quam consectetur velit, at tempor leo leo ac turpis. Praesent sagittis massa eget nisl vehicula, eu bibendum nulla porta. Etiam condimentum dolor nec luctus tincidunt. Integer id blandit nisi. Nam sit amet congue leo. Donec vel pellentesque arcu. Aenean pulvinar erat nec condimentum egestas. </p>
    </div>
  </div>


        <h2 className='quizbutton'><Link onClick={()=>{console.log(props)}} to='/quiz'>Take Quiz!</Link></h2>

  </div>
)};
