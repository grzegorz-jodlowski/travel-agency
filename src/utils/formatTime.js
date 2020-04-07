export const formatTime = (seconds) => {
  if (seconds === undefined || typeof seconds !== 'number' || seconds < 0) {
    return null;
  } else {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds / 60) % 60);
    const s = Math.floor(seconds % 60);

    return `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
  }
};
