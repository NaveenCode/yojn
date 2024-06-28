export const yojn = {
  init: async (url, config) => {
    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during initAPI call:", error.message);
      throw error;
    }
  },
  complete: async (url, config) => {
    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during runAPI call:", error.message);
      throw error;
    }
  },
  history: async (url, config) => {
    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during historyAPI call:", error.message);
      throw error;
    }
  },
};
