import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";

function Grafico() {
  return (
    <ResponsiveContainer>
      <BarChart
        layout="vertical"
        data={dados}
        margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
      >
        <XAxis type="number"></XAxis>
        <YAxis type="category"></YAxis>
        <Bar dataKey="consultas" fill="083860" barSize={30}></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Grafico;
