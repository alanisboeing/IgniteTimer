import { HandPalm, Play } from "@phosphor-icons/react";
import { HomeContainer, PlayCountButton, StopCountButton } from "./styles";
import { useContext } from "react";
import { TaskForm } from "./components/TaskForm";
import { Countdown } from "./components/Countdown";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { CycleContext } from "../../contexts/CycleContext";


export function Home() {

  const {activeCycle, createNewCycle, handleInterruptCycle} = useContext(CycleContext);
  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa."),
    minutesDuration: zod
      .number()
      .min(1, "O ciclo deve ter no mínimo 5 minutos.")
      .max(60, "O ciclo dever ter no máximo 60 minutos."),
  });

  type NewTaskFormData = zod.infer<typeof newCycleFormValidationSchema>;

  const newCycleForm = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesDuration: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;
  const task = watch("task");
  const isSubmitDisabled = !task;

  function handleCreateNewCycle(data: NewTaskFormData){
    createNewCycle(data);
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
      
          <FormProvider {...newCycleForm}>
            <TaskForm />
          </FormProvider>

          <Countdown />
        {activeCycle ? (
          <StopCountButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountButton>
        ) : (
          <PlayCountButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </PlayCountButton>
        )}
      </form>
    </HomeContainer>
  );
}
