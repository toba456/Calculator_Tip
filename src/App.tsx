import MenuItem from "./components/MenuItem";
import OrderContens from "./components/OrderContens";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();
  return (
    <div className="bg-[url('/src/assets/img/backgroundImage.jpg')]">
      <header className="py-5">
        <h1 className=" text-center text-4xl font-mono ">
          Calculadora de Propinas y Consumo
        </h1>
      </header>
      <main className=" smax-w-7xl mx-auto px-5 py-20 grid  md:grid-cols-2 ">
        <div className=" p-5">
          <h2 className=" text-4xl font-black">Menu</h2>
          <div className=" space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className=" border border-dashed border-slate-400 bg-slate-200 bg-opacity-40 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContens order={order} removeItem={removeItem} />
              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center text-xl">La órden está vacía</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
