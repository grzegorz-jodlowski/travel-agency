export const formatTime = (seconds) => {
  if (seconds === undefined || typeof seconds !== 'number' || seconds < 0) {
    return null;
  } else {
    return `${String(Math.floor(seconds / 3600)).padStart(2, '0')}:${String(Math.floor((seconds / 60) % 60)).padStart(2, '0')}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
  }
};
