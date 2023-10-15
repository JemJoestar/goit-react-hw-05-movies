import React from 'react'

export const SearchForm = ({onSubmit, startVal}) => {
  let firstValue = startVal
  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="search" placeholder={firstValue}/>
        <button type="submit">submit</button>
      </form>
  )
}

 
