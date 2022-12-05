import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addUser, updateUser, readUser, removeUser } from "./utilities.js";

const yarg = yargs();

yarg.command({
  command: "add",
  describe: "Create user",
  builder: {
    id: {
      describe: "UserID",
      demandOption: false,
      type: "string",
    },
    name: {
      describe: "User name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "User email",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    addUser(argv.name, argv.email);
  },
});

yarg.command({
  command: "read",
  describe: "Read user",
  builder: {
    id: {
      describe: "UserID",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    readUser(argv.id);
  },
});

yarg.command({
  command: "delete",
  describe: "Delete user",
  builder: {
    id: {
      describe: "UserID",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    removeUser(argv.id);
  },
});

yarg.command({
  command: "update",
  describe: "Update user",
  builder: {
    name: {
      describe: "User Name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "User email",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    updateUser(argv.id, argv.name, argv.email);
  },
});

yarg.parse(hideBin(process.argv));
