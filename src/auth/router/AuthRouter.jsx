import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages"

export const AuthRouter = () => {
  return (
    <Routes>
        <Route path="/login" element={<LoginPage />}/>
    </Routes>
  )
}
