import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAttendees } from '../../../../features/dashboards/dashboardsSlice';

const Attendees = () => {
  const { id } = useParams();
  const { metrics } = useSelector(state => state.dashboards);
  console.log(metrics.registered); // Acceder a registered
  console.log(metrics.confirmed); // Acceder a confirmed
  console.log(metrics.present); // Acceder a present
  console.log(metrics.capacity); // Acceder a capacity
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAttendees(id));
  }, [dispatch, id]);

  return (
    <>
      <div>Attendees de {id}</div>
      <div>
        <p>Registered: {metrics.attendees?.registered}</p>
        <p>Confirmed: {metrics.attendees?.confirmed}</p>
        <p>Present: {metrics.attendees?.present}</p>
      </div>
    </>
  );
};

export default Attendees;
