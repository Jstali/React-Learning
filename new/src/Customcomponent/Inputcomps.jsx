import React from 'react'

const Inputcomps = ({type,placeholder}) => {
  return (
    <div>
      <input className='border-b-2' type={type } placeholder={placeholder} />
    </div>
  );
}

export default Inputcomps
