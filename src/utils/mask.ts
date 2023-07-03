export function maskDate (date: string) {
  const dateFormated = date.replace(/\D/g,'').slice(0, 10);
  if (dateFormated.length >= 5) {
    return `${dateFormated.slice(0,2)}/${dateFormated.slice(2,4)}/${dateFormated.slice(4)}`;
  }
  else if (dateFormated.length >= 3) {
    return `${dateFormated.slice(0,2)}/${dateFormated.slice(2)}`;
  }
  return dateFormated;
}

export function maskTime(time: string) {
  const timeFormated = time.replace(/\D/g,'').slice(0, 10);
  if (timeFormated.length >= 3) {
    return `${timeFormated.slice(0,2)}:${timeFormated.slice(2)}`;
  }
  return timeFormated;
}
