import { getMeetupCoverLink } from './data.js';
import { MeetupCover } from './MeetupCover.js';
import { MeetupDescription } from './MeetupDescription.js';
import { MeetupAgenda } from './MeetupAgenda.js';
import { MeetupInfo } from './MeetupInfo.js';

export const MeetupView = {
  name: 'MeetupView',

  template: `<div>
    <meetup-cover :link="getCoverLink(meetup)" :title="meetup.title"></meetup-cover>

    <div class="container">
      <div class="meetup">
        <div class="meetup__content">
          <h3>Описание</h3>
          <meetup-description :description="meetup.description"></meetup-description>

          <h3>Программа</h3>
          <meetup-agenda :agenda="meetup.agenda"></meetup-agenda>
        </div>

        <div class="meetup__aside">
          <meetup-info :meetup="meetup"></meetup-info>
        </div>
      </div>
    </div>
  </div>
  `,

  components: {
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
    MeetupAgenda
  },

  props: {
    meetup: {
      type: Object,
      required: true
    }
  },

  methods: {
    getCoverLink(meetup) {
      return getMeetupCoverLink(meetup);
    }
  }
};
