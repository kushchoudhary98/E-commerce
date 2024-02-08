import './middlecard.css'

export default function MiddleCard(props) {
  let link = '/' + props.item

  return (
    <form method='get' action={link}>
      <button id="category-card" type='submit'>
          {props.item}
      </button>
    </form>
  )
}
