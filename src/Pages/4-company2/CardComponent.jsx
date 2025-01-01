
const CardComponent = ({img ,title ,description}) => {
  return (
    <card className="shadow-lg col-lg-3  card1">
      <img className="mx-auto d-flex my-3" src={img} alt="" width={40} />
      <h4 className="text-center"> {title}</h4>
      <p style={{textAlign:"justify" }}> {description}</p>
    </card>
  )
}

export default CardComponent
