
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
    { name: 'Bajaj Finance', value: 400 },
    { name: 'Sriram Finance', value: 300 },
    { name: 'Mahindra Finance', value: 300 },
    { name: 'Utkarsh Small Finance', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const renderCustomized = () => {
    const style = {
        top: '40%',
        right: "-10px",
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
        fontSize: "14px"
    };
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={300}>
                <Pie
                    data={data}
                    cx="25%"
                    cy="40%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend iconType='circle' iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default renderCustomized
