<template>
  <div class="calendar-cont">
    <div class="background"></div>
    <full-calendar class="schedule-calendar" :options="options"></full-calendar>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import ltLocale from '@fullcalendar/core/locales/lt'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import listPlugin from '@fullcalendar/list'

export default {
  name: 'ScheduleCalendar',
  components: {
    FullCalendar
  },
  data() {
    return {
      maxWidthForList: 1000,
      options: {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin, googleCalendarPlugin, listPlugin],
        googleCalendarApiKey: process.env.VUE_APP_CALENDAR_API,
        events: {
          googleCalendarId: process.env.VUE_APP_CALENDAR_ID
        },
        locale: ltLocale,
        eventClick: e => {
          e.jsEvent.preventDefault()
        },
        eventDataTransform: eventData => {
          eventData.title = ''
          return eventData
        },
        eventDisplay: 'block',
        displayEventEnd: true,
        height: 'auto',
        headerToolbar: { left: 'title', right: 'prev,next' }
      }
    }
  },
  created() {
    if (window.screen.availWidth < this.maxWidthForList) {
      this.options.initialView = 'listMonth'
    }
  }
}
</script>

<style lang="scss">
.schedule-calendar th .fc-scrollgrid-sync-inner {
  background-color: var(--bg-color);
}
.schedule-calendar {
  padding-top: 20px;
  margin: 0 20px;
  font-family: Arial, Helvetica, sans-serif;
}
.schedule-calendar a {
  color: black;
  cursor: default;
}
.schedule-calendar .fc-daygrid-event a {
  cursor: default;
}
.schedule-calendar .fc-list-event-dot {
  display: none;
}
</style>
