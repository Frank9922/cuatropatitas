import { Provider } from "react-redux"
import { AppRouter } from "./router"
import { BrowserRouter } from "react-router-dom"
import { store } from "./store"
import { ChakraProvider } from "@chakra-ui/react"


export const CuatroPatitas = () => {

  return (
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  )
}
