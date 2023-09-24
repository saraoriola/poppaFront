import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getEventById } from '../../../../features/dashboards/dashboardsSlice';

const HeaderEvent = () => {
  const { id } = useParams(); 
  
const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getEventById(id));
  }, []);

  return (
    <div>HeaderEvent de {id}</div>

  )
}

export default HeaderEvent
