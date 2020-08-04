import React from 'react'

const Like = ({liked, onClick}) =>  {
  let classes = "fa fa-heart"
  if (!liked) classes += "-o"
  
  return (
    <i 
      className={classes} 
      aria-hidden="true" 
      style={{cursor: 'pointer'}} 
      onClick={onClick}/>
  );
}

export default Like