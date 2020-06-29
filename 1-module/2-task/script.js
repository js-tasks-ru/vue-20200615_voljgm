import Vue from '/vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение митапа для митапа
 * @param meetup - объект с описанием митапа (и параметром meetupId)
 * @return {string} - ссылка на изображение митапа
 */
function getMeetupCoverLink(meetup) {
  return `${API_URL}/images/${meetup.imageId}`;
}

/**
 * Словарь заголовков по умолчанию для всех типов элементов программы
 */
const agendaItemTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов элементов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

export const app = new Vue({
  el: '#app',

  data: {
    meetupId: MEETUP_ID,
    meetup: {}
  },

  async mounted() {
    this.meetup = await this.fetchMeetupData()
  },

  computed: {
    meetupCover() {
      return this.meetup.imageId ? `${API_URL}/images/${this.meetup.imageId}` : undefined;
    },
    meetupDate() {
      return new Date(this.meetup.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })      
    },
    agendaList() {
      return this.meetup.agenda?.map((item) => ({
        ...item,
        iconUrl: `/assets/icons/icon-${agendaItemIcons[item.type]}.svg`,
        complexTitle: item.title ?? agendaItemTitles[item.type]
      }) ?? []); 
    }
  },

  methods: {
    async fetchMeetupData(){
      const response = await fetch(`${API_URL}/meetups/${this.meetupId}`);

      if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        return await response.json();
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    }
  },
});
