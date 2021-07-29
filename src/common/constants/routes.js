export const ROUTES = {
  CHARACTERS: '/characters',
  LOCATIONS: '/locations',
  EPISODES: '/episodes',
  ROOT: '/',

  get CHARACTER() {
    return `${this.CHARACTERS}/:id`;
  },
  get LOCATION() {
    return `${this.LOCATIONS}/:id`;
  },
  get EPISODE() {
    return `${this.EPISODES}/:id`;
  },
};
