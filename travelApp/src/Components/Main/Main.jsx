import React ,{useEffect}from 'react';
import './main.css';
import Eiffel_Tower from '../../assets/EiffelTower.jpg'
import Great_Wall_Of_China from '../../assets/GreatWallOfChina.jpg'
import Grand_Canyon from '../../assets/GrandCanyon.jpg'
import Bali from '../../assets/Bali.jpg'
import Maldives from '../../assets/Maldives.jpg'
import Manali from '../../assets/Manali.jpg'
import Taj_Mahal from '../../assets/TajMahal.jpg'
import Ooty from '../../assets/Ooty.jpg'
import Pyramids_Of_Giza from '../../assets/PyramidOfGiza.jpg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: Eiffel_Tower,
    destTitle: 'Eiffel Tower',
    location: 'Paris, France',
    grade: 'Cultural',
    fees: '$120',
    description: 'The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.'
  },
  {
    id: 2,
    imgSrc: Great_Wall_Of_China,
    destTitle: 'Great Wall of China',
    location: 'Beijing, China',
    grade: 'Historical',
    fees: '$80',
    description: 'The Great Wall of China is a series of fortifications that were built across the historical northern borders of China to protect and consolidate territories of Chinese states and empires against various nomadic groups.'
  },
  {
    id:3,
    imgSrc: Grand_Canyon,
    destTitle: 'Grand Canyon',
    location: 'Arizona, USA',
    grade: 'Nature',
    fees: '$70',
    description: 'The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States. The canyon is 277 miles long, up to 18 miles wide, and attains a depth of over a mile.'
  },
  {
    id: 4,
    imgSrc: Bali,
    destTitle: 'Bali',
    location: 'Indonesia',
    grade: 'Relaxation',
    fees: '$150',
    description: 'Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.'
  },
  {
    id: 5,
    imgSrc: Maldives,
    destTitle: 'Maldives',
    location: 'Indian Ocean',
    grade: 'Relaxation',
    fees: '$300',
    description: 'The Maldives, officially the Republic of Maldives, is a small island nation in South Asia, situated in the Arabian Sea of the Indian Ocean. It is known for its clear blue waters, white sandy beaches, and luxurious resorts.'
  },
  {
    id: 6,
    imgSrc: Manali,
    destTitle: 'Manali',
    location: 'Himachal Pradesh, India',
    grade: 'Adventure',
    fees: '$100',
    description: 'Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination.'
  },
  {
    id: 7,
    imgSrc: Taj_Mahal,
    destTitle: 'Taj Mahal',
    location: 'Agra, India',
    grade: 'Historical',
    fees: '$50',
    description: 'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan.'
  },
  {
    id: 8,
    imgSrc: Ooty,
    destTitle: 'Ooty',
    location: 'Tamil Nadu, India',
    grade: 'Nature',
    fees: '$80',
    description: 'Ooty, short for Ootacamund, is a town in the Western Ghats mountains, in southern India’s Tamil Nadu state. It is known for its tea plantations and a preserved colonial architecture.'
  },
  {
    id: 9,
    imgSrc: Pyramids_Of_Giza,
    destTitle: 'Pyramids of Giza',
    location: 'Giza, Egypt',
    grade: 'Historical',
    fees: '$60',
    description: 'The Pyramids of Giza, situated in Egypt, are ancient pyramid structures that were built as tombs for pharaohs and are among the Seven Wonders of the Ancient World.'
  }
];


const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited Destinations
        </h3>
      </div>

      <div className="secContent grid">

        {
        Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div data-aos="fade-up" key={id} className="singleDestination">

                  <div className="imgDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">

                    <h4 className="destTitle">
                      {destTitle}
                    </h4>

                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className='name'>{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>
                          {grade}
                        </span>
                        <small>
                          +1
                        </small>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex">
                      DETAILS <HiOutlineClipboardCheck className='icon'/>
                    </button>
                  </div>
              </div>
            )
        })
        }

      </div>
    </section>
  )
}

export default Main