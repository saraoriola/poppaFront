import React from 'react'
import { useParams } from 'react-router-dom'

const HeaderEvent = () => {
  const {id} = useParams();
  return (
    <div>HeaderEvent</div>
  )
}

export default HeaderEvent