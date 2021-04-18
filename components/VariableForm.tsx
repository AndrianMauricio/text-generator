import { Variable, VariableKind } from "pages/new-template"
import { useForm } from "react-hook-form"
import slugify from "slugify"
import uniqid from "uniqid"
import cx from "classnames"

export interface VariableFormProps {
  onCreate: (variable: Variable) => void
}

interface Inputs {
  name: string
  kind: VariableKind
}

export default function VariableForm({ onCreate }: VariableFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      kind: "text",
    },
  })

  const key = slugify(watch("name"), { lower: true, strict: true })

  function onSubmit(data: Inputs) {
    const id = uniqid()
    onCreate({
      ...data,
      id,
      key,
    })
  }

  return (
    <div className="bg-black bg-opacity-30 fixed w-screen h-screen z-10 top-0 bottom-0 left-0 right-0">
      <div className="bg-white w-full h-full p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 h-full relative"
        >
          <label
            className={cx("flex flex-col gap-2", {
              "text-red-400": !!errors.name,
            })}
          >
            Nombre
            <input
              className={cx(
                "rounded-md border-solid border-2 p-3 focus:border-blue-400 outline-none",
                { "border-red-400": !!errors.name },
              )}
              placeholder="Nombre"
              autoComplete="off"
              autoFocus
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-400 text-sm">Campo obligatorio</span>
            )}
          </label>
          <label className="flex flex-col gap-2">
            Nombre clave
            <input
              className="rounded-md border-solid border-2 p-3 bg-gray-200 text-gray-500 focus:border-blue-400 outline-none"
              placeholder="Nombre clave autogenerado"
              readOnly
              value={key}
            />
            <p className="text-xs text-gray-500">
              Este nombre clave será usado para identificar los datos cuando
              estés escribiendo el texto.
            </p>
          </label>
          <label className="flex flex-col gap-2">
            Tipo de dato
            <select
              className="rounded-md border-solid border-2 p-3 outline-none focus:border-blue-400"
              {...register("kind", { required: true })}
            >
              <option value="text">Texto</option>
              <option value="number">Número</option>
            </select>
          </label>
          <button className="rounded-full bg-blue-400 uppercase py-2 text-white absolute bottom-0 w-full">
            Crear variable
          </button>
        </form>
      </div>
    </div>
  )
}
