import { Activity } from "../types"

export type ActivityActions=
{type:"save-activity",payload: {newActivity:Activity}} |
{type:"set-activeId",payload: {id:Activity['id']}} 


export type ActivityState={
    activities: Activity[],
    activeId: Activity['id']
}
export const InitialState : ActivityState= {
        activities:[],
        activeId: ''
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

     if (action.type === 'set-activeId') {
        return {
            ...state,
            activeId:action.payload.id
        }
     }

    return state
    }