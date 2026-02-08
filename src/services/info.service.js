// const api = "http://localhost:4500/info";

// export const getInfo = async () => {
//   const response = await fetch(`${api}/all`);
//   return response.json();
// };

// export const createInfo = async (info) => {
//   const response = await fetch(api, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(info),
//   });
//   return response.json();
// };

// export const updateInfo = async (info) => {
//   const response = await fetch(`${api}/${info.id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(info),
//   });
//   return response.json();
// };

// export const deleteInfo = async (id) => {
//   const response = await fetch(`${api}/${id}`, {
//     method: "DELETE",
//   });
//   return response.json();
// };
