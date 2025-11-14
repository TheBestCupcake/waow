const apiURL = "http://localhost:3000";

export const fetchVideos = async () => {
  const response = await fetch(`${apiURL}/Anime`);

  const data = await response.json();
  return data;
};
