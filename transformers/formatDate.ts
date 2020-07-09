export default function formatDate(date) {
  const dateObj = new Date(date);

  return dateObj.toLocaleDateString("en-US");
}
