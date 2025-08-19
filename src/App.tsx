import { Label } from "./components/ui/label"
import { Input } from "./components/ui/input"
import Header from "./components/header"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"

function App() {
  return (
    <>
      <Header />
      <main className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Welcome to Finance Manager
        </h2>
        <p className="mt-2 text-gray-600">
          Manage your finances efficiently and effectively.
        </p>
        <section className="mt-6 w-1/2 mx-auto bg-white p-6 rounded-lg shadow-md">
          <form action="">
            <div className="mt-4">
              <div className="group-form">
                <Select>
                  <SelectTrigger className="w-1/2">
                    Selecione o tipo de transação
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Receita" defaultChecked>Receita</SelectItem>
                      <SelectItem value="Despesa">Despesa</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
          </form>
        </section>
      </main>
      <footer className="p-4 text-center">
        <p className="text-gray-500">© 2023 Finance Manager</p>
      </footer>
    </>
  );
}

export default App
