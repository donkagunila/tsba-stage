import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';



const events = [
    {   title: 'Meeting',
        start: new Date(),
        className : "change-me-now",
        extendedProps: {
            priority: 'high'
        }
        },
    { title: 'Birthday Greetings', start: new Date().setDate(19), borderColor: 'green' },
    { title: 'Another Event here', start: new Date(), extendedProps: {
            status: 'done'
        } },
    { title: 'Test this please', start: new Date(), borderColor: 'green', backgroundColor: "green" }
]
const AppCalendar = () => {
    return (
        <FullCalendar
            plugins={[ dayGridPlugin, timeGridPlugin, listPlugin ]}
            initialView="dayGridMonth"
            events={events}
            aspectRatio={1.88}
            headerToolbar={
               {
                   start: "prev,next,today,nextYear",
                   center: 'title',
                   right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
               }
            }
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            nowIndicator={true}

        />
    );
}
export default AppCalendar