import { useState } from "react"
import { categories } from "../data/categoria"

import { Activity } from "../types"
//Se importa data Categorias, haciendo alucion a que se esta llamando la data base

export default function Form() {

  //Se crea UseState para establecer lo que se validara en el formulario, sus datos inicales
  
  const [activity, setActivity] =useState<Activity>({
    category:1,
    name:'',
    calories:0,
  })
//Se crea el handleChange para sincronizar el formulario con la base de datos
//se agrega como metodo "e" para añadir un atributo e irlo sincronizando
//Saber la informacion, se puede de que tipo de dato es al colocarlo dentro de una parte de los llamados
//Es decir, donde yo este llamando dicha funcion, o arrow function
//Se llamada el select  e input

  const handleChange= (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    
    const isNumberField=["category","calories"].includes(e.target.id)

    console.log(isNumberField);
  

    setActivity({
      ...activity,
      [e.target.id]:isNumberField ? +e.target.value :e.target.value //Esta validacion esta demostrando para convertir valor a numero
    })
  }

  //Agregando validacion de si los campos estan llenos en el formulario para poder enviarlo
  const isValidActivity= () => {
    const {name,calories}=activity

    return name.trim() !== "" && calories
  }

  //Validando Formulario para evitar enviar datos
  const hadleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log("submit");
      
  }

  return (
  
    <form 
    
    className=" space-y-5 bg-white shadow p-10 rounded-lg"

    onSubmit={hadleSubmit}
    > 
    
        <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className=" font-bold">Categorias:</label>
                <select 
                className=" border border-slate-300 p-2 rounded-lg bg-white"
                id="category"
                value={activity.category}
                onChange={handleChange}
           
                >
                  {categories.map(category => (

                    <option 
                    key={category.id}
                    value={category.id}>

                        { category.name}
                    </option>
                
                  ) )}
                
                   
                  
                </select>

                <div className="grid grid-cols-1 gap-3">
                <label  htmlFor="name" className=" font-bold">Actividad:</label>

                    <input type="text" 
                    id="name"
                    className=" border border-slate-300 p-2 rounded-lg"
                    placeholder="Ejemplo, comida"
                  value={activity.name}
                    onChange={handleChange}
                    /> {/*Final Form  */}
                

                </div>

                <div className="grid grid-cols-1 gap-3">
                <label  htmlFor="calories" className=" font-bold">Calorias:</label>

                    <input type="number" 
                        id="calories"
                        className=" border border-slate-300 p-2 rounded-lg"
                        placeholder="Calorias"
                        value={activity.calories}
                        onChange={handleChange}
                    /> {/*Final Form  */}
                </div>
        </div>
        <input type="submit"  
        className=" bg-gray-800  hover:bg-gray-900 w-full p-2  font-bold uppercase text-white cursor-pointer disabled:opacity-30"
        value={activity.category===1 ? "Guardar Comida":"Guardar Ejercicio"}
        disabled={!isValidActivity()}

        />
    
    
    </form>
  )
}
