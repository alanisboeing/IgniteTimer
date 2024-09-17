import { MinutesDurationInput, TaskDescriptionInput } from "../../styles";
import { FormContainer } from "./styles";
import { useFormContext } from "react-hook-form";
import { useContext } from "react";
import { CycleContext } from "../../../../contexts/CycleContext";


export function TaskForm() {
  
  const {} = useContext(CycleContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="tanskDescription"> Vou trabalhar em </label>
      <TaskDescriptionInput
        type="text"
        placeholder="Dê um nome para o seu projeto"
        id="tastDescription"
        list="task-suggestions"
        {...register("task")}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
      </datalist>
      <label htmlFor="minutesDuration"> durante </label>
      <MinutesDurationInput
        type="number"
        step={1}
        id="minutesDuration"
        placeholder="00"
        {...register("minutesDuration", { valueAsNumber: true })}
      />
      <span> minutos.</span>
    </FormContainer>
  );
}
