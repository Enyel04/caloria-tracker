import { Activity } from "../types"

export type ActivityActions=
{type:"save-activity",payload: {newActivity:Activity}}


type ActivityState={
    activities: Activity[

    ]
}
export const InitialState : ActivityState= {
        activities:[]
}

export const activityReducer= (
    state:ActivityState= InitialState, 
    action:ActivityActions
    ) => {
    if (action.type==="save-activity") {
        //Este codigo maneja la logica para actualizar el state
        //Payload Son los datos
        return{
            //Siempre se recomienda tomar una copia
            ...state,
            activities:[...state.activities, action.payload.newActivity]
        }
       
        
    }

    return state
    }