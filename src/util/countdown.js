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

export function getStatus() {
  const now = new Date();

  if (now.getMonth() !== 6) {
    return "NOT_SOON";
  }

  if (now.getDate() > 8) {
    return "NOT_SOON";
  }

  if (now.getDate() < 8) {
    return "SOON";
  }

  return "TODAY";
}

function getBirthdateDate() {
  const year = new Date().getFullYear();
  const date = new Date(year, 6, 8);

  return date;
}

export function getBirthdateDiff() {
  const now = Date.now();
  const birthdate = getBirthdateDate().getTime();

  return Math.floor((birthdate - now) / 1000);
}

export function getHeading(status) {
  if (status === "TODAY") {
    return "It's my birthday";
  }

  if (status === "SOON") {
    return "It's my birthday soon";
  }

  return "We're launching soon";
}
