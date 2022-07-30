import React from 'react'

export default function Quotes() {
  let quote_data = null
  let quote_author= null
  function Api(){
    let quote = fetch('http://quotes.stormconsultancy.co.uk/random.json');
   quote.then(response=>response.json()).then(data => {
   console.log(data.author); 
   quote_data = `${data.quote}`
   quote_author= `${data.author}`
  })
 .catch(err => console.error(err));
 }

  return (
    <div className='quote-section'>
       <p>Get yourself motivated </p>
       <hr></hr>
       <hr></hr>
      <p>{Api}</p>
      <p>{quote_author}</p>
       
    </div>
  )
}
