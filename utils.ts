const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
export function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
export function date(dateString: string) {
  const date = new Date(dateString);
  const mount = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const day = date.getDay();
  let hour: string = date.getHours().toString();
  let minute: string = date.getMinutes().toString();
  if (parseInt(minute) < 10) minute = '0' + minute;
  if (parseInt(hour) < 10) hour = '0' + minute;
  return year + ' ' + mount + ' ' + day + '     ';
}
