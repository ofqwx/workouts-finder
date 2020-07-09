export default function createQueryString(obj) {
  const str = [];

  for (const p in obj)
    if (obj[p]) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }

  return str.join("&");
}
