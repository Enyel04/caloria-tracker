import { useReducer } from 'react'
import Form from './components/Form'
import { activityReducer, InitialState } from './reducers/activityReducer'





function App() {
  
  //Dispatch es para ejecutar las acciones
    const [state,dispatch] = useReducer(activityReducer,InitialState)

  return (
    <>
        <header className=" bg-cyan-600 py-3">
          
            <div className=" max-w-4xl mx-auto flex justify-between">

                <h1 className=" text-center text-lg font-bold  text-slate-200 uppercase">
                  Contador Calorias
                </h1>
              
              </div>

            </header>

            <section className=" bg-cyan-500 py-20 px-5">  

              <div className=" max-w-4xl mx-auto">
                      <Form
                        dispatch={dispatch}
                      />
              </div>
            
            </section>
    </>
  )
}

export default App
