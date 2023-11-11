/**
 * Fetches data from the given URL and retrieves all values from paginated results.
 * @param {string} url - The URL to fetch data from.
 * @returns {Array} - An array containing all values.
 */
async function getAllValuesFromUrl(url) {
  let allValues = [];

  // Fetch the first page of data
  let response = await fetch(url);
  let data = await response.json();
  allValues = allValues.concat(data.results);

  // Fetch subsequent pages if they exist
  while (data.info.next !== null) {
    response = await fetch(data.info.next);
    data = await response.json();
    allValues = allValues.concat(data.results);
  }

  return allValues;
}

/**
 * Fetches all locations from the Rick and Morty API.
 * @returns {Array} - An array containing all location data.
 */
export async function getAllLocations() {
  const allLocationApi = "https://rickandmortyapi.com/api/location";
  return await getAllValuesFromUrl(allLocationApi);
}

/**
 * Fetches all episodes from the Rick and Morty API.
 * @returns {Array} - An array containing all episode data.
 */
export async function getAllEpisodes() {
  const allEpisodeApi = "https://rickandmortyapi.com/api/episode";
  return await getAllValuesFromUrl(allEpisodeApi);
}

export const getStatusBadgeClass = (status) => {
  switch (status) {
    case "Dead":
      return "badge bg-danger ";
    case "Alive":
      return "badge bg-success";
    default:
      return "badge bg-secondary";
  }
};

export const getGenderBadgeClass = (gender) => {
  switch (gender) {
    case "Male":
      return "badge bg-info";
    case "Female":
      return "badge bg-warning";
    default:
      return "badge bg-secondary";
  }
};

export const charachterApi = `https://rickandmortyapi.com/api/character/`;

export const episodeApi = `https://rickandmortyapi.com/api/episode/`;

export const locationApi = `https://rickandmortyapi.com/api/location/`;



export const species = [
  "Human",
  "Alien",
  "Humanoid",
  "Poopybutthole",
  "Mythological",
  "Unknown",
  "Animal",
  "Disease",
  "Robot",
  "Cronenberg",
  "Planet",
];

export const status = ["Alive", "Dead", "Unknown"];

export const gender = ["female", "male", "genderless", "unknown"];
