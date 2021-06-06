const api = {
  fetchUsers: () => {
    return fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

export default api;
