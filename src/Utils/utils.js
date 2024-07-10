// utils.js

export function calcularTurno(turnoAtual) {
  // Definir os horários de início e término de cada turno
  const turnos = [
    { nome: "madrugada", inicio: 0, fim: 6 },
    { nome: "manha", inicio: 6, fim: 12 },
    { nome: "tarde", inicio: 12, fim: 18 },
    { nome: "noite", inicio: 18, fim: 24 },
  ];

  // Encontrar o turno atual
  const turnoEncontrado = turnos.find(turno => turno.nome === turnoAtual);

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
  return list.every(item => item.status === true);
};


export const getTurnoAtual = () => {
  const now = new Date();
  const horaAtual = now.getHours();

  const turnos = [
      { nome: "madrugada", inicio: 0, fim: 6 },
      { nome: "manha", inicio: 6, fim: 12 },
      { nome: "tarde", inicio: 12, fim: 18 },
      { nome: "noite", inicio: 18, fim: 24 },
  ];

  // Encontrar o turno atual
  for (let turno of turnos) {
      if (horaAtual >= turno.inicio && horaAtual < turno.fim) {
          return turno.nome;
      }
  }

  // Caso não esteja em nenhum turno válido (embora isso não deveria ocorrer)
  return "Desconhecido";
}


export const verificarAtraso = (turnoAtual, turnoPassado) => {
  const turnos = [
    { nome: "madrugada", inicio: 0, fim: 6 },
    { nome: "manha", inicio: 6, fim: 12 },
    { nome: "tarde", inicio: 12, fim: 18 },
    { nome: "noite", inicio: 18, fim: 24 },
  ];

  // Encontrar o índice dos turnos
  const indiceAtual = turnos.findIndex(turno => turno.nome === turnoAtual);
  const indicePassado = turnos.findIndex(turno => turno.nome === turnoPassado);

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