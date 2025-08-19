
import Header from "./components/header";
import { CalendarInput } from "./components/ui/datepicker";
import { Button } from "@/components/ui/button";
import SpinnerTailwind  from "./components/spinner"
import { Plus } from 'lucide-react';
import { FormSelect } from "./components/shadcn/FormSelect";
import { useEffect } from "react";
import { useForm} from "react-hook-form"
import { FormInputCurrency } from "./components/shadcn/FormInputCurrency";


function App() {

  useEffect(() => {
    const spinner = document.getElementById("spinner")?.classList.add("hidden");
    if (spinner) {
      spinner;
    }
  }, []);
  
  type Inputs = {
    transactionType: string;
    category: string;
    value: string;
    date: Date;
  };

  


   const {
    handleSubmit,
    control,
  } = useForm<Inputs>()


  function onSubmit(data: Inputs) {
    console.log("Chamoou o submit", data);
  }

  return (
    <>
      <Header />
      <main className="p-4">
        <section className="mt-6 md:w-1/2 mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="p-4">
            <h1 className="text-2xl font-bold flex justify-center">Cadastro de transação</h1>
            <p className="text-gray-600 text-center">
              Preencha os campos abaixo para adicionar uma nova transação.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <FormSelect
                name="transactionType"
                control={control}
                rules={{ required: "Este campo é obrigatório." }}
                placeholder="Selecione o tipo de transação"
                options={[
                  { label: "Receita", value: "receita" },
                  { label: "Despesa", value: "despesa" },
                ]}
              />

              <FormSelect
                name="category"
                control={control}
                rules={{ required: "Este campo é obrigatório." }}
                placeholder="Selecione a categoria"
                options={[
                  { label: "Alimentação", value: "alimentacao" },
                  { label: "Farmácia", value: "farmacia" },
                  { label: "Transporte", value: "transporte" },
                  { label: "Veículo", value: "veiculo" },
                  { label: "Saúde", value: "saude" },
                  { label: "Lazer", value: "lazer" },
                  { label: "Outros", value: "outros" },
                ]}
              />
              
              <FormInputCurrency
                name="value"
                control={control}
                placeholder="R$ 0,00"
                rules={{ required: "O valor é obrigatório" }}
              />

              <div>
                <CalendarInput 
                  name="date"
                  control={control}
                  rules={{ required: "A data é obrigatória" }}
                />
              </div>
            </div>
            <footer className="mt-6 flex">
              <Button type="submit" className="w-full">
                <SpinnerTailwind id="spinner" />
                <div className="flex items-center gap-2">
                   <Plus />
                  Adicionar
                </div>
              </Button>
            </footer>
          </form>
        </section>
      </main>
      <footer className="p-4 text-center">
        <p className="text-gray-500">© 2023 Finance Manager</p>
      </footer>
    </>
  );
}

export default App;
