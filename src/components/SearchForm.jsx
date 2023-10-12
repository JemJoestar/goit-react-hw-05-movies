import React from 'react'

export const SearchForm = ({onSubmit, }) => {
  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="search" />
        <button type="submit">submit</button>
      </form>
  )
}

 
