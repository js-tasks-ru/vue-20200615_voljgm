import { agendaItemIcons, agendaItemTitles } from './data.js';

export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  template: `<div class="meetup-agenda__item">
    <div class="meetup-agenda__item-col">
      <img class="icon" alt="icon" :src="iconUrl" />
    </div>
    <div class="meetup-agenda__item-col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
    <div class="meetup-agenda__item-col">
      <h5 class="meetup-agenda__title">{{ complexTitle }}</h5>
      <p v-if="agendaItem.speaker"><span>{{agendaItem.speaker}}</span><span class="meetup-agenda__dot"></span><span class="meetup-agenda__lang">{{agendaItem.language}}</span></p>
      <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
    </div>
  </div>
  `,

  props: {
    agendaItem: {
      type: Object,
      required: true
    }
  },

  computed: {
    iconUrl() {
      return `/assets/icons/icon-${agendaItemIcons[this.agendaItem.type]}.svg`;
    },

    complexTitle() {
      return this.agendaItem.title ?? agendaItemTitles[this.agendaItem.type]
    }
  }
};
