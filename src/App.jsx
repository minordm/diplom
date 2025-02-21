import "./App.css";
import ParametrBlock from "./components/ParametrBlock/ParametrBlock";
import ParametrHead from './components/ParametrHead/ParametrHead';
import ParametrItem from "./components/ParametrItem/parametrItem";

function App() {
  return (
    <>
      <ParametrHead name='Параметр' value='Величина' unit='Ед. изм.'/>
      <ParametrBlock name="Параметры нефти" />
      <ParametrItem name="Уровень нефти(факт)" value="8,34" unit="м" />
      <ParametrItem name="Расход газа" value="1446,484" unit="тыс.нм^3/сут" />

      <ParametrBlock name="Параметры входного потока" />
      <ParametrItem name="Уровень нефти(факт)" value="8,34" unit="м" />
      <ParametrItem name="Расход газа" value="1446,484" unit="тыс.нм^3/сут" />
    </>
  );
}

export default App;
