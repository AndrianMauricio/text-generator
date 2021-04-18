import { Step, Variable } from "pages/new-template"
import React, { useState } from "react"
import VariableForm from "./VariableForm"
import VariableList from "./VariablesList"

export interface StepVariableProps {}

export default function StepVariable({}: StepVariableProps) {
  const [openVariableForm, setOpenVariableForm] = useState(false)
  const [variables, setVariables] = useState<Variable[]>([])

  function createVariable(variable: Variable) {
    setVariables(v => [...v, variable])
  }

  return (
    <div className="p-8">
      {openVariableForm && (
        <VariableForm
          onCreate={variable => {
            createVariable(variable)
            setOpenVariableForm(false)
          }}
        />
      )}
      {variables.length > 0 ? (
        <VariableList variables={variables} />
      ) : (
        <div className="p-6 bg-gray-100 text-gray-400 rounded-lg">
          Agregá los datos que vas a usar para tu texto
        </div>
      )}
      <button
        className="bg-blue-400 rounded-full fixed right-6 bottom-6 py-4 px-6 uppercase text-white shadow-md focus:outline-none"
        onClick={() => setOpenVariableForm(true)}
      >
        + Nuevo dato
      </button>
    </div>
  )
}
