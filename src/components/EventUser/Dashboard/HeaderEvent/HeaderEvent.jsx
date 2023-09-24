import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventById } from "../../../../features/dashboards/dashboardsSlice";

const HeaderEvent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { event } = useSelector(state => state.dashboards);

  useEffect(() => {
    dispatch(getEventById(id));
  }, [id, dispatch]);

  return (
    <div>
          {event.day}

            {event.month}

            {event.title}
           
            {event.description}
 
            {event.speacker}
            

    </div>
  );
}

export default HeaderEvent;
