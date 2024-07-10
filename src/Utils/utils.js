// utils.js

const turnos = [
  { nome: "manha", inicio: 6, fim: 7},
  { nome: "tarde", inicio: 12, fim: 13 },
  { nome: "noite", inicio: 18, fim: 19 },
  { nome: "madrugada", inicio: 0, fim: 1 },
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
  for (let turno of turnos) {
    if (horaAtual >= turno.inicio && horaAtual < turno.fim) {
      return {
        turno: turno.nome,
        atrasado: false,
      };
    }
  }

  // Se não encontrou diretamente, subtrair horas para encontrar o turno anterior
  while (true) {
    horaAtual = (horaAtual - 1 + 24) % 24;

    for (let turno of turnos) {
      if (horaAtual >= turno.inicio && horaAtual < turno.fim) {
        turnoAtual = turno.nome;
        atrasado = true;
        break;
      }
    }

    if (turnoAtual) {
      return {
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
