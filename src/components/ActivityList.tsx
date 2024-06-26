import { useMemo, Dispatch } from "react";
import { Activity } from "../types"
import { categories } from "../data/categoria";

import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/16/solid";
import { ActivityActions } from "../reducers/activityReducer";



type ActivityListProps={
    activities: Activity[],
    dispatch:Dispatch<ActivityActions>
}

export default function ActivityList({activities, dispatch}:ActivityListProps) {

    const categoryName= useMemo(() => 
        (category:Activity["category"]) => 
        categories.map(cat=> cat.id===category ? cat.name : '')

    , [activities])

    const actividadVacio = useMemo(() =>activities.length===0 , [activities])
    
  return (

   <>
    <h2 className=" text-4xl font-bold text-slate-600 text-center"> Comida y Actividades</h2>

        { actividadVacio ? <p className="text-center m-5"> No hay Activiades Aún...</p> :
        
            activities.map(activity=> (
                <div key={activity.id} className=" px-5 py-10  bg-white mt-5 flex justify-between shadow">
                    <div className=" space-y-2 relative">
                        <p className={`  w-28 text-center p-2 text-white uppercase font-bold 
                        ${activity.category ===1 ? ' bg-sky-500' : 'bg-orange-500'}`}>
                            {categoryName(activity.category)}
                        </p>
                        <p className=" text-2xl font-bold pt-5"> {activity.name}</p>
                        <p className=" font-black text-4xl  text-sky-500">
                            {activity.calories} {''}
                        
                            <span>Calorias</span>
                        </p>

                    </div>
                    <div className=" flex gap-5 items-center">
                        <button
                            onClick={ () => dispatch({type:'set-activeId',payload:{id: activity.id}})}
                        >
                            <PencilSquareIcon
                                className=" h-8 w-8 text-gray-800 hover:text-gray-700"
                            />
                        </button>
                        <button
                            onClick={ () => dispatch({type:'delete-activity',payload:{id: activity.id}})}
                        >
                            <XCircleIcon
                                className=" h-8 w-8 text-red-800 hover:text-red-700"
                            />
                        </button>

                    </div>
                </div>
            ))}

   </>
  )
}
