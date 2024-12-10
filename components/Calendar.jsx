import React from "react";
import FullCalendar from "@fullcalendar/react";

// import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
// import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

// imports are  INCORRECT THIS PAGE WAS COPIED FROM ANOTHER PERSONAL PROJECT PLEASE RECONFIGURE BEFORE RUNNING.

const Calendar = () => {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
      />
    </div>
  );
};

export default Calendar;
