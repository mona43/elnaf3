import React from 'react'

const CompanyComponentsCards = ({img ,title, description, url}) => {
  return (
    <card className="shadow-lg col-lg-3   card1">
    <img className="mx-auto d-flex my-3" src={img} alt="" width={"100%"} />
    <h5 className="text-center"> {title}</h5>
    <p style={{textAlign:"center"}}> {description}</p>
    <button className='btn2 my-3'onClick={()=>{
      document.location.href = `/${url}`
    }}> المزيد </button>
   </card>
  )
}

export default CompanyComponentsCards
