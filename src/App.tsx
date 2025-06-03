import RoutesProvider from "@/router/RoutesProvider"
import ToastsContex from "@/common/toasts/ToastsContex"
import ToastsProvider from "./common/toasts/components/toastProvider/ToastsProvider"

function App() {
  return (
    <ToastsContex>
      <ToastsProvider />
      <RoutesProvider />
    </ToastsContex>
  )
}

export default App
