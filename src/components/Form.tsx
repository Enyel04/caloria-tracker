import { useState } from "react"
import { categories } from "../data/categoria"
//Se importa data Categorias, haciendo alucion a que se esta llamando la data base

export default function Form() {

  //Se crea UseState para establecer lo que se validara en el formulario, sus datos inicales
  
  const [activity, setActivity] =useState({
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
    
    setActivity({

      ...activity,
      [e.target.id]:e.target.value
    })
  
    
    
    
  
    
  }

  return (
  
    <form 
    
    className=" space-y-5 bg-white shadow p-10 rounded-lg"
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
        className=" bg-gray-800  hover:bg-gray-900 w-full p-2  font-bold uppercase text-white cursor-pointer"
        value="Guardar Comida"/>
    
    
    </form>
  )
}
