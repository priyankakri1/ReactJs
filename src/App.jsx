import { BrowserRouter, Routes, Route } from "react-router-dom"
import Crud from "./Crud/Crud"
import CreateUsers from "./Crud/CreateUsers"
import Users from "./Crud/Users"
import EditUsers from "./Crud/EditUsers"

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Crud />
                <Routes>
                    <Route element={<CreateUsers />} path="/createUsers" />
                    <Route element={<Users />} path="/users" />
                    <Route element={<EditUsers />} path="/editUsers/:abc" />
                </Routes>
            </BrowserRouter>

        </div>
    )
}
export default App