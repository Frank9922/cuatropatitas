import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "./pages/DashboardPage"

export const DashboardRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<DashboardPage />}/>
    </Routes>
  )
}
