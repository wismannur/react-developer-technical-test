export const fetchAPI = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
  return res.json();
};
