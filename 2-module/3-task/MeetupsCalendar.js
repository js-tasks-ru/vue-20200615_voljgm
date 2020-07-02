/*
  Полезные функции по работе с датой можно описать вне Vue компонента
 */

export const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  template: `<div class="rangepicker">
    <div class="rangepicker__calendar">
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <button class="rangepicker__selector-control-left" @click="addMonth(-1)"></button>
          <div>{{ currentMonth }}</div>
          <button class="rangepicker__selector-control-right" @click="addMonth(1)"></button>
        </div>
      </div>
      <div class="rangepicker__date-grid" v-for="week in weeks">
        <div class="rangepicker__cell" 
              v-for="day in week" :class="{ 'rangepicker__cell_inactive': !day.isCurrentMonth }">{{ day.day }}
          <a class="rangepicker__event" v-for="meetup in day.meetups">{{ meetup.title }}</a>
          </div>  
      </div>
    </div>
  </div>`,

  data: () => ({
    showDateFrom: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  }),

  props: {
    meetups: {
      type: Array,
      required: true
    }
  },

  computed: {
    meetupDates() {
      return [...this.meetups.map(i => ({
        date: this.dateAsString(new Date(i.date)),
        title: i.title
      }))];
    },

    weeks() {
      const weekStart = this.showDateFrom.getDay() === 0 ? 7 : this.showDateFrom.getDay();
      const currentMonth = this.showDateFrom.getMonth();
      let currentDate = new Date(this.showDateFrom.getFullYear(), this.showDateFrom.getMonth(), 2 - weekStart);
      let res = [];
      let week = [];

      const mm = this.meetupDates;

      do {
        for (let step = 0; step < 7; step++) {
          const currentDateString = this.dateAsString(currentDate);
          week.push({
            day: currentDate.getDate(),
            isCurrentMonth: currentDate.getMonth() === currentMonth,
            meetups: [...this.meetupDates.filter(i => i.date === currentDateString)]
          });
          currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
        }
        res.push(week);
        week = [];
      } while (currentDate.getMonth() === currentMonth)

      return res;
    },

    currentMonth() {
      const month = this.firstLetterUpper(this.showDateFrom.toLocaleString(navigator.language, { month: 'long' }));
      return `${month} ${this.showDateFrom.getFullYear()}`;
    }
  },

  methods: {
    firstLetterUpper(str) {
      return str[0].toUpperCase() + str.slice(1);
    },

    dateAsString(date) {
      return `${date.getFullYear()}|${date.getMonth()}|${date.getDate()}`;
    },
    
    addMonth(cnt) {
      this.showDateFrom = new Date(this.showDateFrom.getFullYear(), this.showDateFrom.getMonth() + cnt, 1);
    }
  },

};
