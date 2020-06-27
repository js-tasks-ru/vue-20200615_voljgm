import { MeetupAgendaItem } from './MeetupAgendaItem.js';
import { agendaItemIcons, agendaItemTitles } from './data.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',

  template: `<div class="meetup-agenda">
    <p class="meetup-agenda__empty" 
      v-if="!agenda || !agenda.length" >Программа пока пуста, но когда-нибудь в ней обязательно что-нибудь появится!</p>
    <template v-else>
      <meetup-agenda-item v-for="item in agendaList" :key="item.id" :agenda-item="item"></meetup-agenda-item>
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
  },

  computed: {
    agendaList() {
      return this.agenda?.map((item) => ({
        ...item,
        iconUrl: `/assets/icons/icon-${agendaItemIcons[item.type]}.svg`,
        complexTitle: item.title ?? agendaItemTitles[item.type]
      }) ?? []); 
    }
  }
};
