import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export const MeetupPage = {
  name: 'MeetupPage',

  template: `<div id="app" v-cloak>
    <meetup-view :meetup="meetup"></meetup-view>
  </div>
  `,

  data: function() {
    return {
      meetup: {}
    }
  },

  components: {
    MeetupView
  },

  async mounted() {
    this.meetup = await fetchMeetup(MEETUP_ID)
  },
};
