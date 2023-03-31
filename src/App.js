import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { Form } from 'reactstrap'
import Forms from './Create-Forms/Forms'
import Tables from './Create-Forms/Table'
import Edit from './Create-Forms/Edit';
// import AxiosCode from './Create-Forms/AxiosCode'

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Tables/>)
  },
  {
    path: "Forms",
    element: (<Forms/>)
  },
  {
    path: "Edit",
    element: (<Edit/>)
  }
])

const App = () => {
  return (
    // <div>
    //   {/* <Forms/> */}
    //   {/* <Tables/> */}
    //   {/* <AxiosCode/> */}
    // </div>
    <RouterProvider router={router}/>
  )
}

export default App
