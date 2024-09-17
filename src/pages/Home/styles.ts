import styled from "styled-components"

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`
export const BaseCountButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
     
`
export const PlayCountButton = styled(BaseCountButton)`
  background: ${props => props.theme["green-500"]};
  color: ${props => props.theme["gray-100"]};

  &:not(:disabled):hover{
    background: ${props => props.theme["green-700"]};
  }

`
export const StopCountButton = styled(BaseCountButton)`
  background: ${props => props.theme["red-500"]};
  color: ${props => props.theme.white};

  &:not(:disabled):hover{
    background: ${props => props.theme["red-700"]};
  }
`


const BaseInput = styled.input `
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${props => props.theme["gray-500"]};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${props=> props.theme["gray-100"]};

  &:focus{
    box-shadow: none;
  }
  &::{
    color: ${props => props.theme["gray-500"]};
  }

`

export const MinutesDurationInput = styled(BaseInput) `
  width: 4rem;

`
export const TaskDescriptionInput = styled(BaseInput) `
  flex: 1;
  &:: -webkit-calendar-picker-indicator {
    display: none !important;
  }
`