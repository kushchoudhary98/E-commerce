import './card.css'

export default function Card(props) {
    console.log(props.item)
  return (
    <div id='card'>
        <img src={props.item["image"]}></img>
    </div>
  )
}
