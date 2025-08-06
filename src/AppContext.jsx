import { createContext } from "react";

export const AppContext = createContext({
  theme: "",
  data: {},
  editMode: Boolean,
  handleEditMode: () => {},
  handleData: () => {},
});
