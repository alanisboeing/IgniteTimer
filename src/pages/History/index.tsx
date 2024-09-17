import { useContext } from "react";
import { HistoryContainer, HistoryList, StatusDot } from "./styles";
import { CycleContext } from "../../contexts/CycleContext";
import { ICycle } from "../../interfaces/ICycle";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function History() {
  const { cycles } = useContext(CycleContext);
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle: ICycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesDuration} minutos</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <StatusDot statuscolor="green">Concluido</StatusDot>
                    )}
                    {cycle.interruptDate && (
                      <StatusDot statuscolor="red">Interrompido</StatusDot>
                    )}
                    {!cycle.finishedDate && !cycle.interruptDate && (
                      <StatusDot statuscolor="yellow">Em andamento</StatusDot>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
