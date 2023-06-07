import React from 'react'

const Body = (props) => {
    //console.log(props)
  return (
    <div>{props.name}는 {props.location}에 삽니다.</div>
  )
}

export default Body