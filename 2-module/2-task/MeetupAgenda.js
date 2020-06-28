import { MeetupAgendaItem } from './MeetupAgendaItem.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',

  template: `<div class="meetup-agenda">
    <p class="meetup-agenda__empty" 
      v-if="!agenda || !agenda.length" >Программа пока пуста, но когда-нибудь в ней обязательно что-нибудь появится!</p>
    <template v-else>
      <meetup-agenda-item v-for="item in agenda" :key="item.id" :agenda-item="item"></meetup-agenda-item>
    </template>
  </div>`,

  components: {
    MeetupAgendaItem
  },

  props: {
    agenda: {
      type: Array,
      default: () => []
    }
  }
};
