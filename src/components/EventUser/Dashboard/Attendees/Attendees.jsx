import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getAttendees } from '../../../../features/dashboards/dashboardsSlice';

const Attendees = () => {
  const { id } = useParams(); 
  const {metrics} = useSelector(state =>state.dashboards)
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getAttendees(id));
  }, []);

  return (
    <>
    <div>Atteendees de {id}</div>
    </>
  )
}

export default Attendees
