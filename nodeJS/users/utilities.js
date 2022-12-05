import fs from "fs";
import uniqid from "uniqid";

const jsonToJs = () => {
  try {
    const dataJSON = fs.readFileSync("users.json", "utf8");
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const jsToJson = (users) => {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJSON);
};

export const addUser = (name, email) => {
  const users = jsonToJs();
  const duplicatedUser = users.find((user) => {
    return user.name === name && user.email === email;
  });
  if (!duplicatedUser) {
    users.push({
      id: uniqid(),
      name,
      email,
    });
    jsToJson(users);
  } else {
    console.log("Already exist!");
  }
};

export const readUser = (id) => {
  const users = jsonToJs();
  const user = users.find((user) => user.id === id);
  if (user) {
    console.log(
      `UserID: ${user.id}\nUser Name: ${user.name}\nUser Email: ${user.email}`
    );
  } else {
    console.log("User not found");
  }
};

export const updateUser = (id, updatedName, updatedEmail) => {
  const users = jsonToJs();
  const user = users.find((user) => {
    return user.id === id;
  });
  if (user) {
    if (updatedName === "") {
      user.email = updatedEmail;
    } else if (updatedEmail === "") {
      user.name = updatedName;
    } else if (updatedName === "" && updatedEmail === "") {
      console.log("No changes made");
    } else {
      user.name = updatedName;
      user.email = updatedEmail;
    }
    jsToJson(users);
  } else {
    console.log("User not found");
  }
};

export const removeUser = (id) => {
  const users = jsonToJs();
  const nonDeletedUsers = users.filter((user) => {
    return user.id !== id;
  });
  if (users.length === nonDeletedUsers.length) {
    console.log("User not found");
  } else {
    jsToJson(nonDeletedUsers);
  }
};
