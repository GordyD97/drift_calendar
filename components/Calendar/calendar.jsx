import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import "../src/index.css";

// imports are  INCORRECT THIS PAGE WAS COPIED FROM ANOTHER PERSONAL PROJECT PLEASE RECONFIGURE BEFORE RUNNING.

const Calendar = () => {
  return(
<div>
<Fullcalendar 
plugins={[dayuGridPlugin, timeGridPlugin,. interactionPlugin]}
intialView={"dayGridMonth"}
/>

</div>

)
};

export default Calendar;
