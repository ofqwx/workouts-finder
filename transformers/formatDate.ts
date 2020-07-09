export default function formatDate(date) {
  console.log(date);
  const dateObj = new Date(date);

  return dateObj.toLocaleDateString("en-US");
}
