import { createContext } from "react";

const UserContext = createContext({
  user: { name: "Demo", email: "demo@gmail.com" },
});

export default UserContext;
