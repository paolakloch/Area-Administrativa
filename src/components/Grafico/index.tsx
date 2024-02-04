import { ResponsiveContrainer } from "recharts";
import { XAxiS } from "recharts/types/cartesian/XAxiS";
import { BarChart } from "recharts/types/chart/BarChart";

function Grafico() {
  return (
    <ResponsiveContrainer>
      <BarChart
        layout="vertical"
        data={dados}
        margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
      >
        <XAxis type="number"></XAxis>
        <YAxis type="category"></YAxis>
        <Bar dataKey="consultas" fill="083860" barSize={30}></Bar>
      </BarChart>
    </ResponsiveContrainer>
  );
}

export default Grafico;
