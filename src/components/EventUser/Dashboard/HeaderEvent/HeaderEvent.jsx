import React from 'react'
import { useParams } from 'react-router-dom'

const HeaderEvent = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <div>HeaderEvent</div>
  )
}

export default HeaderEvent