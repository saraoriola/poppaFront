import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getEventById } from '../../../../features/dashboards/dashboardsSlice';

const HeaderEvent = () => {
  const { id } = useParams(); 
  const {event} = useSelector(state =>state.dashboards)
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getEventById(id));
  }, []);

  return (
    <>
    <div>HeaderEvent de {id}</div>
    <div>{event.title}</div>
    <div>{event.description}</div>
    <div>{event.speacker}</div>
    <div>{event.day}</div>
    <div>{event.month}</div>
    </>
  )
}

export default HeaderEvent
