import './App.css'

import { BrowserRouter as MainRoute, Route,Routes } from 'react-router-dom'
import { MyTodolist } from './components/taskmanagement/todolist';


function App() {


  return (
    <>
      <MainRoute>
        <Routes>
            <Route path='/' element={<MyTodolist/>}></Route>
        </Routes>
      </MainRoute>
    </>
  )
}

export default App
