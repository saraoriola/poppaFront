import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAttendees } from '../../../../features/dashboards/dashboardsSlice';

const Attendees = () => {
  const { id } = useParams();
  const { metrics } = useSelector(state => state.dashboards);
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
