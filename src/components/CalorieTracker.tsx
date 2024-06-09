import { useMemo } from "react"
import { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CalorieTrackerProps={
    activities:Activity[]
}

export default function CalorieTracker({activities} :CalorieTrackerProps) {

    //Contadores

    const caloriesConsumidas= useMemo(() =>  activities.reduce((total,activity)=>activity.category===1? total +activity.calories:total,0), [activities])
    const caloriesQuemadas= useMemo(() =>  activities.reduce((total,activity)=>activity.category===2? total +activity.calories:total,0), [activities])
    const netCalories = useMemo(() => caloriesConsumidas - caloriesQuemadas, [activities]) 
  return (
   <>
        <h2 className=" text-4xl font-black text-white text-center">Resumen Calorias</h2>

          <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10" >
            <CalorieDisplay
                calories={caloriesConsumidas}
                text="Consumidas"
            />
            <CalorieDisplay
                calories={caloriesQuemadas}
                text="Ejercicio"
            />
            <CalorieDisplay
                calories={netCalories}
                text="Diferencia"
            />
           
        </div>  
     
    
   </>
  )
}
