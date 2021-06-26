export function getSeconds(countdown) {
  const days = countdown.days * 86400;
  const hours = countdown.hours * 3600;
  const minutes = countdown.minutes * 60;
  const { seconds } = countdown;

  return days + hours + minutes + seconds;
}

export function formatSeconds(rawSeconds) {
  let left;

  const days = Math.floor(rawSeconds / 86400);
  left = rawSeconds % 86400;

  const hours = Math.floor(left / 3600);
  left %= 3600;

  const minutes = Math.floor(left / 60);
  const seconds = left % 60;

  return { days, hours, minutes, seconds };
}
