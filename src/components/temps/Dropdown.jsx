import React from 'react'

const Dropdown = ({options,title,setCategory}) => {
  return (
    <div className='select'>
        <select defaultValue="0" onChange={setCategory} name="format" id='format'>
        <option value="0" disabled>
              {title}
        </option>
              {options.map((i,ind)=>(
                <option key={ind} value={i} >
              {i.toUpperCase()}
        </option>
              ))}
        </select>
    </div>
  )
}

export default Dropdown