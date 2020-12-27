export const fetcher = (url) =>
  fetch(url).then((res) => {
    return res.json();
  });
