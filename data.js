const ROLE = {
  ADMIN: "admin",
  USER: "user",
};

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: "Temitope", role: ROLE.ADMIN },
    { id: 2, name: "Tolu", role: ROLE.USER },
    { id: 3, name: "Tire", role: ROLE.USER },
  ],
  tasks: [
    { id: 1, name: "Temitope's taks", userId: 1 },
    { id: 2, name: "Tolu's tasks", userId: 2 },
    { id: 3, name: "Tire's tasks", userId: 3 },
  ],
};
