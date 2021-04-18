import StepVariable from "components/StepVariable"
import { useState } from "react"

export type Step = "variables" | "text"

export const variableKinds = {
  text: "Texto",
  number: "Número",
}

export type VariableKind = keyof typeof variableKinds

export interface Variable {
  id: string | number
  key: string
  name: string
  kind: VariableKind
}

export default function NewTemplate() {
  const [step, setStep] = useState<Step>("variables")

  if (step === "variables") {
    return <StepVariable />
  }
}
