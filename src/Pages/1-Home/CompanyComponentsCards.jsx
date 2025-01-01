import React from 'react'
import { useNavigate } from 'react-router-dom';
const CompanyComponentsCards = ({img ,title, description, url}) => {
  const navigate = useNavigate();
  return (
    <card className="shadow-lg col-lg-3   card1">
    <img className="mx-auto d-flex my-3" src={img} alt="" width={"100%"} />
    <h5 className="text-center"> {title}</h5>
    <p style={{textAlign:"center"}}> {description}</p>
    <button className='btn2 my-3'onClick={()=>{
      navigate('/' + url);
    }}> المزيد </button>
   </card>
  )
}

export default CompanyComponentsCards
