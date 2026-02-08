const api = "http://localhost:4500/user";

export const getUser = async () => {
  const response = await fetch(api);
  return response.json();
};

export const createUser = async (user) => {
  const response = await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const updateUser = async (user) => {
  const response = await fetch(`${api}/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const deleteUser = async (id) => {
  const response = await fetch(`${api}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
