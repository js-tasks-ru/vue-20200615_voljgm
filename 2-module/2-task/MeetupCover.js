export const MeetupCover = {
  template: `<div class="meetup-cover" :style="meetupCover">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,

  props: {
    link: {
      type: String
    },
    title: {
      type: String
    }
  },

  computed: {
    meetupCover() {
      return this.link ? `--bg-url: url(${this.link})` : '';
    }
  }
}
