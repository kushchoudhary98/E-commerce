import { Link } from 'react-router-dom'
import './middlecard.css'

export default function MiddleCard(props) {
  let link = '/' + props.item
  console.log(props.item)

  return (
      <div className='text-lg font-sans md:text-2xl h-[120px] w-[170px] m-[6px] md:m-[10px] md:h-[200px] md:w-[220px] lg:m-[20px]' id="category-card" type='submit'>
          {props.item}
      </div>
    
  )
}
