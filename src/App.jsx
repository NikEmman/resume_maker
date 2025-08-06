import { useState } from "react";
import { AppContext } from "./AppContext";
import defaultData from "./assets/data";

function App() {
  const [theme, setTheme] = useState("classic");
  const [data, setData] = useState(defaultData);
  const [editMode, setEditMode] = useState(false);

  function handleEditMode(value) {
    setEditMode(value);
  }
  function handleData(incomingData) {
    let newData = { data, ...incomingData };
    setData(newData);
  }

  return (
    <>
      <AppContext.Provider
        value={{
          theme: theme,
          data: data,
          editMode: editMode,
          handleEditMode: handleEditMode,
          handleData: handleData,
        }}
      >
        <select onChange={(e) => setTheme(e.target.value)}>
          <option value="modern">Modern</option>
          <option value="classic">Classic</option>
        </select>
      </AppContext.Provider>
    </>
  );
}

export default App;
