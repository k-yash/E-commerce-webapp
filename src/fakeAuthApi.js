// import {useAuth} from "./authContext.js";

// Database
export const Users = [
  {
    name: "Yash",
    email: "Yash@gmail.com",
    password: "Yash"
  },
  {
    name: "Tanay",
    email: "Tanay@gmail.com",
    password: "Tanay"
  }
];

const findUserByUserName = (email) => {
  return Users.find((user) => user.email === email);
};

export const fakeAuthApi = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = findUserByUserName(email);
      if (user?.password === password) {
        resolve({ success: true, status: 200 });
      }
      reject({ success: false, status: 401 });
    }, 1000);
  });
};
