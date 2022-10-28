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
  return mount + ' ' + year;
}
