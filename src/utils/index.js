const monthNames = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]

export const transformDate = (date) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const hour = newDate.getHours();
  const minutes = newDate.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  return `${day < 10 ? '0' + day : day} de ${monthNames[month - 1]} de ${year} ${hour}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
}