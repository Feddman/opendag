const calendarData = {
    "season": "2024-2025",
    "schedule": [
      {
        "title": "Training Session",
        "date": "2024-09-30T18:00:00",
        "color": "blue"
      },
      {
        "title": "Match vs Team A",
        "date": "2024-10-03T20:00:00",
        "color": "lightgreen"
      },
      {
        "title": "Training Session",
        "date": "2024-10-05T18:00:00"
      },
      {
        "title": "Match vs Team B",
        "date": "2024-10-10T19:30:00"
      },
      {
        "title": "Training Session",
        "date": "2024-10-12T18:00:00"
      },
      {
        "title": "Match vs Team C",
        "date": "2024-10-17T20:00:00"
      },
      {
        "title": "Training Session",
        "date": "2024-10-19T18:00:00"
      },
      {
        "title": "Match vs Team D",
        "date": "2024-10-24T19:30:00"
      },
      {
        "title": "Training Session",
        "date": "2024-10-26T18:00:00"
      },
      {
        "title": "Match vs Team E",
        "date": "2024-11-02T19:00:00"
      },
      {
        "title": "Training Session",
        "date": "2024-11-04T18:00:00"
      },
      {
        "title": "Match vs Team F",
        "date": "2024-11-09T20:30:00"
      },
      {
        "title": "Training Session",
        "date": "2024-11-11T18:00:00"
      },
      {
        "title": "Match vs Team G",
        "date": "2024-11-16T19:30:00"
      },
      {
        "title": "Training Session",
        "date": "2024-11-18T18:00:00"
      },
      {
        "title": "Match vs Team H",
        "date": "2024-11-23T20:00:00"
      },
      {
        "title": "Training Session",
        "date": "2024-11-25T18:00:00"
      },
      {
        "title": "Match vs Team I",
        "date": "2024-11-30T19:00:00"
      },
      {
        "title": "Training Session",
        "date": "2024-12-02T18:00:00"
      },
      {
        "title": "Match vs Team J",
        "date": "2024-12-07T19:30:00"
      },
      {
        "title": "Training Session",
        "date": "2024-12-09T18:00:00"
      },
      {
        "title": "Match vs Team K",
        "date": "2024-12-14T20:00:00"
      },
      {
        "title": "Training Session",
        "date": "2024-12-16T18:00:00"
      },
      {
        "title": "Match vs Team L",
        "date": "2024-12-21T19:30:00"
      },
      {
        "title": "Summer Camp",
        "description": "Welcome to our summer camp! We will be hosting a 5-day camp for kids aged 8-12. The camp will include training sessions, matches, and fun activities.",
        "start": "2025-08-18",
        "end": "2025-08-22",
      
      },
      {
        "title": "Opruimdag",
        "date": "2024-12-08",
        "allDay": true,
      }
    ]
  }
  


document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'listWeek',
        editable: true,
        durationEditable: true,
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'listWeek,dayGridMonth'
        },
        events: calendarData.schedule,
        eventClick: function(info) {
            document.getElementById('popup-title').textContent = info.event.title;
            if (info.event.allDay) {
                document.getElementById('popup-when').textContent = 'All day at ' + info.event.start.toLocaleString();
            } else {
                document.getElementById('popup-when').textContent = info.event.start.toLocaleString();
            }

            if (info.event.extendedProps.description) {
                document.getElementById('popup-description').textContent = info.event.extendedProps.description;
            } else {
                document.getElementById('popup-description').textContent = '';
            }
        }
    });
    calendar.render();
  });
