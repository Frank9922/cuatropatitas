import { NavBar } from "./components/NavBar"

export const HomeLayout = ( { children } ) => {
  return (
    <main className="">
        <NavBar />
        <div>
          {children}
        </div>
    </main>
)
}
