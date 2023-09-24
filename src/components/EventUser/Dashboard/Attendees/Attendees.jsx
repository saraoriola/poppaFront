import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAttendees } from "../../../../features/dashboards/dashboardsSlice";

const Attendees = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { location } = useSelector(state => state.dashboards);

  useEffect(() => {
    dispatch(getAttendees(id));
  }, []);


  return (
<>
{location.capacity}
</>
  );
}

export default Attendees;
