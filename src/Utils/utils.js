const turnos = [
  { nome: "madrugada", inicio: 0, fim: 1 },
  { nome: "manha", inicio: 6, fim: 7 },
  { nome: "tarde", inicio: 12, fim: 13 },
  { nome: "noite", inicio: 18, fim: 19 },
];

export function calcularTurno(turnoAtual) {
  // Encontrar o turno atual
  const turnoEncontrado = turnos.find((turno) => turno.nome === turnoAtual);

  if (!turnoEncontrado) {
    throw new Error("Turno especificado não encontrado.");
  }

  const { inicio, fim } = turnoEncontrado;

  // Calcular a previsão de término do turno
  const horaInicio = inicio; // Hora de início é o início do turno
  const horaTermino = fim; // Hora de término é o fim do turno
  const previsaoTermino = new Date();
  previsaoTermino.setHours(horaTermino, 0, 0, 0);

  // Formatar os dados para retorno
  const data = new Date().toLocaleDateString("pt-BR");
  const horaInicioFormatada = `${horaInicio.toString().padStart(2, "0")}:00`;
  const previsaoTerminoFormatada = previsaoTermino.toLocaleTimeString("pt-BR");

  return {
    data: data,
    horaInicio: horaInicioFormatada,
    previsaoTermino: previsaoTerminoFormatada,
  };
}

export const checkAllTrue = (list) => {
  return list.every((item) => item.status === true);
};

export const resetList = (list) => {
  const updatedList = list.map((item) => ({ ...item, status: false }));
  return updatedList;
};

export const getTurnoAtual = () => {
  const now = new Date();
  let horaAtual = now.getHours();
  let turnoAtual = null;
  let atrasado = false;

  // Verificar turno atual diretamente
  let index = 0;
  for (let turno of turnos) {
    if (horaAtual >= turno.inicio && horaAtual < turno.fim) {
      return {
        data: new Date(),
        index: index,
        turno: turno.nome,
        atrasado: false,
      };
    }
    index += 1;
  }

  // Se não encontrou diretamente, subtrair horas para encontrar o turno anterior
  while (true) {
    horaAtual = (horaAtual - 1 + 24) % 24;

    let index = 0;
    for (let turno of turnos) {
      if (horaAtual >= turno.inicio && horaAtual < turno.fim) {
        turnoAtual = turno.nome;
        atrasado = true;
        break;
      }
      index += 1;
    }

    if (turnoAtual) {
      return {
        data: new Date(),
        index: index,
        turno: turnoAtual,
        atrasado: atrasado,
      };
    }
  }
};

export const verificarAtraso = (turnoAtual, turnoPassado) => {
  if (turnoAtual === turnoPassado) {
    return {
      atrasado: false,
      turnoAtrasado: null,
    };
  }

  // Encontrar o índice dos turnos
  const indiceAtual = turnos.findIndex((turno) => turno.nome === turnoAtual);
  const indicePassado = turnos.findIndex(
    (turno) => turno.nome === turnoPassado
  );

  // Verificar se está atrasado
  if (indiceAtual === -1 || indicePassado === -1) {
    throw new Error("Turno não encontrado na lista de turnos.");
  }

  // Calcular o próximo índice de turno
  const proximoIndice = (indicePassado + 1) % turnos.length;

  // Verificar se está atrasado
  if (proximoIndice === indiceAtual) {
    return {
      atrasado: false,
      turnoAtrasado: null,
    };
  } else {
    return {
      atrasado: true,
      turnoAtrasado: turnos[proximoIndice].nome,
    };
  }
};

export const getTurnosPassados = (ultimoTurnoFeito, turnoAtual) => {

  let indiceAtual = turnos.findIndex(
    (turno) => turno.nome === turnoAtual.turno
  );

  let turnosPassados = [];
  let limit = 0;
  let tempData = turnoAtual.data;

  indiceAtual = (indiceAtual === 0) ? turnos.length - 1 : indiceAtual - 1;

  while (true) {
    if (limit === 10) { 
      break
    } 
    console.log('limit:',ultimoTurnoFeito.data.getDate(), "temp:",tempData.getDate())
    if (turnos[indiceAtual].nome === ultimoTurnoFeito.turno && ultimoTurnoFeito.data.getDate() ===  tempData.getDate()) {
      break;
    }
    turnosPassados.unshift({
      turno: turnos[indiceAtual].nome,
      data: tempData,
      inicio: turnos[indiceAtual].inicio,
      fim: turnos[indiceAtual].fim,
    });
    indiceAtual = (indiceAtual === 0) ? turnos.length - 1 : indiceAtual - 1;
    if (turnos[indiceAtual].nome === "noite") { 
    limit+= 1
    tempData = new Date(new Date().setDate(new Date().getDate() - limit));
    }
  }
  return turnosPassados;
};
