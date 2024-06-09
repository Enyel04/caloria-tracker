import { Activity } from "../types"

export type ActivityActions=
{type:"save-activity",payload: {newActivity:Activity}} |
{type:"set-activeId",payload: {id:Activity['id']}} |
{type:"delete-activity",payload: {id:Activity['id']}} |
{type:"restart-app"} 



export type ActivityState={
    activities: Activity[],
    activeId: Activity['id']
}
//Agregando LocalSotrage para almacenar 
const localStorageActivities = (): Activity[] =>{

    const activities = localStorage.getItem("activities")
    return activities ? JSON.parse(activities) :[]
}

export const InitialState : ActivityState= {
        activities:localStorageActivities(),
        activeId: ''
}

export const activityReducer= (
    state:ActivityState= InitialState, 
    action:ActivityActions
    ) => {
    if (action.type==="save-activity") {
        //Este codigo maneja la logica para actualizar el state
        //Payload Son los datos
        let updateActivities :Activity[] =[]
        if (state.activeId) {
            updateActivities = state.activities.map( activity => activity.id === state.activeId ? action.payload.
                newActivity : activity)
            
        }else{
            updateActivities =[...state.activities, action.payload.newActivity]

        }
        return{
            //Siempre se recomienda tomar una copia
            ...state,
            activities:updateActivities,
            active: ''
        }    
    }

     if (action.type === 'set-activeId') {
        return {
            ...state,
            activeId:action.payload.id
        }
     }

     if (action.type=== 'delete-activity') {
        return {
            ...state,
            activities: state.activities.filter(activity=>activity.id !== action.payload.id)
        }
     }

     if (action.type==='restart-app') {
        return{
            activities:[],
            activeId:''
        }
     }

    return state
    }