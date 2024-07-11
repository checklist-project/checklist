// AppContext.js
import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, setAppState] = useState({
    country: "",
    equipe: "",
    responsavel: "",
    material: "",
    umidade: "",
    inicio: "",
    turnoPassado: "madrugada",
  });

  const [pierState, setPierState] = useState({
    pier: {
      concluido: undefined,
      list: [
        { index: 0, title: "BTT", status: undefined },
        { index: 1, title: "Retorno 101", status: undefined },
        { index: 2, title: "Cabeço 6 á 8", status: undefined },
        { index: 3, title: "Cabeço 8 á 12", status: undefined },
      ],
    },
  });


  const setAppStateField = (key, value) => {
    setAppState((prevState) => ({ ...prevState, [key]: value }));
  };

  const setPierStateField = (key, value) => {
    setPierState((prevState) => ({ ...prevState, [key]: value }));
  };


  const updatePierStatus = (index, statusNew) => {
    setPierState(prevState => {
      const updatedList = prevState.pier.list.map(item =>
        item.index === index ? { ...item, status: statusNew } : item
      );

      return {
        ...prevState,
        pier: {
          ...prevState.pier,
          list: updatedList,
        },
      };
    });
  };

  return (
    <AppContext.Provider
      value={{ state, setAppStateField, pierState, setPierStateField, updatePierStatus }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
