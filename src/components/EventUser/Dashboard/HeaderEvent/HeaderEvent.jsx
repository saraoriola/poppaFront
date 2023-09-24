import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventById } from "../../../../features/dashboards/dashboardsSlice";

const HeaderEvent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
console.log(id)

useEffect(() => {
  dispatch(getEventById(id));
}, [id, dispatch]);


  return (
<>

HOLA
</>  )
}

export default HeaderEvent