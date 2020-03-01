import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import '../CSS/home.css';

export default (props) => {

const error = useSelector( s => {if (s.message){return s.message}})

return (
  <div className='home'>
    <h1>Home</h1>

  <div className='parallax'>
    <span className='errorSpan'>{error}</span>
    <p className='firstP homepageText logo'>Bees</p>
  </div>

  <div className='regular'>
    <div className='content'>
      <p className='secondP homepageText'>Do you love bees? Of course you do! Everyone loves bees. They are our favorite cute little flying friend. Do you like honey? How about flowers? Fruits and vegetables? If you said 'Yes' to any one of these things, then you have bees to thank. This app is dedicated to all the lovely bees around the world. </p>
    </div>
  </div>

  <div className='parallax'>
    <div className='content'>
      <p className='thirdP homepageText'>Honey bees are responsible for almost 80% of all pollination that occurs worldwide. Most of the flowering plants you know and love require bees to help them propagate! This includes over 75% of all crops that are cultivated and eaten by humans - more than 90% of global human nutrition! Humans absolutely need bees to survive.</p>
    </div>
  </div>



<div className='regular'>
  <div className='content'>
      <p className='fourthP homepageText'>But wait! Bees are in trouble! Every year, a huge chunk of existing beehives dies out - roughly 30% of ALL hives annually - in a phenomenon known as Colony Collapse Disorder. If serious measures are not taken to curb this decline, then the vast majority of food worldwide AND our friends the bees will continue to be at risk!</p>
    </div>
  </div>

  <div className='parallax'>
    <div className='content'>
      <p className='fifthP homepageText'>What could be killing so many billions of bees each year? A combination of factors: habitat destruction, pesticides, disease, parasites, and poor nutrition. All of which are symptomatic of unchecked corporate greed and destructive farming practices. The massive global farming and chemical industries have placed profit over sustainability for the past century and completely destroyed the stable natural ecology that bees require in order to survive.</p>
    </div>
  </div>

  <div className='regular'>
    <div className='content'>
        <p className='fourthP homepageText'>How can we stop this from happening and save the bees? By preserving natural wild habitats, restoring sustainable ecological agricultural practices, and banning the most destructive pesticides and fertilizers, we can begin to preserve the remaining bee populations. Vote for candadates, locally and nationally, who have strong environmental policies. Buy products that support environmental organizations. Grow bee and other pollinator friendly plants in your garden. All of these things can help save our friends.</p>
      </div>
    </div>


        <h2 className='quizbutton'><Link to='/quiz'>Take Quiz!</Link></h2>

  </div>
)};
