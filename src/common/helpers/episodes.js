export const getEpisodePosition = (episode) => {
  if (!episode) return {};

  const [season, index] = episode.match(/\d+/g) || [];

  return {
    season: +season,
    index: +index,
  };
};
