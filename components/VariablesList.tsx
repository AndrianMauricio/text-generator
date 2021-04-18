import { Variable, variableKinds } from "pages/new-template"

export interface VariablesListProps {
  variables: Variable[]
}

export default function VariableList({ variables }: VariablesListProps) {
  return (
    <div>
      {variables.map(variable => (
        <div
          key={variable.key}
          className="py-4 flex border-b border-gray-200 last:border-b-0"
        >
          <span className="flex-grow flex items-center">{variable.name}</span>
          <span className="justify-end p-2 bg-gray-200 rounded-md text-gray-500">
            {variableKinds[variable.kind]}
          </span>
        </div>
      ))}
    </div>
  )
}
