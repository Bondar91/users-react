export const formatDate = string => {
  const date = new Date(string);

  return new Intl.DateTimeFormat("pl-PL", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}