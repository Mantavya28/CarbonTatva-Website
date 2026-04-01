import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, CartesianGrid } from 'recharts';
import { Plus, Trash2, Calculator } from 'lucide-react';

const EMISSION_FACTORS = [
  { activity: 'Stationary combustion', category: 'Coal (bituminous)', factor: 2.42, unit: 'kg', scope: 1 },
  { activity: 'Stationary combustion', category: 'Natural gas (boiler)', factor: 2.02, unit: 'm3', scope: 1 },
  { activity: 'Stationary combustion', category: 'Diesel (generator)', factor: 2.68, unit: 'L', scope: 1 },
  { activity: 'Mobile combustion', category: 'Passenger vehicles (petrol)', factor: 2.31, unit: 'L', scope: 1 },
  { activity: 'Mobile combustion', category: 'Commercial vehicles (diesel)', factor: 2.68, unit: 'L', scope: 1 },
  { activity: 'Fugitive emissions', category: 'Natural gas leakage', factor: 0.06, unit: 'MJ', scope: 1 },
  { activity: 'Fugitive emissions', category: 'Refrigerants (HFC-134a)', factor: 1430, unit: 'kg', scope: 1 },
  { activity: 'Industrial processes', category: 'Cement (process emissions)', factor: 0.52, unit: 'kg', scope: 1 },
  { activity: 'Grid electricity', category: 'India avg', factor: 0.72, unit: 'kWh', scope: 2 },
  { activity: 'Grid electricity', category: 'US avg', factor: 0.38, unit: 'kWh', scope: 2 },
  { activity: 'Grid electricity', category: 'EU avg', factor: 0.23, unit: 'kWh', scope: 2 },
  { activity: 'Grid electricity upstream', category: 'Well-to-tank', factor: 0.08, unit: 'kWh', scope: 2 },
  { activity: 'T&D losses', category: 'Grid losses', factor: 0.10, unit: 'kWh', scope: 2 },
  { activity: 'Transportation', category: 'Road freight (diesel truck)', factor: 0.15, unit: 'tonne-km', scope: 3 },
  { activity: 'Transportation', category: 'Air freight', factor: 1.25, unit: 'tonne-km', scope: 3 },
  { activity: 'Business Travel', category: 'Flights (short haul)', factor: 0.25, unit: 'km', scope: 3 },
  { activity: 'Business Travel', category: 'Flights (long haul)', factor: 0.15, unit: 'km', scope: 3 },
  { activity: 'Employee Commuting', category: 'Rail / Metro', factor: 0.04, unit: 'km', scope: 3 },
  { activity: 'Waste Operations', category: 'Landfill (organic waste)', factor: 0.45, unit: 'kg', scope: 3 },
];

// Diverse, readable color palette for charts
const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#14b8a6', '#f97316', '#6366f1'];
const BAR_COLORS = { 'Scope 1': '#3b82f6', 'Scope 2': '#10b981', 'Scope 3': '#f59e0b' };

const ESGCalculator = () => {
  const [entries, setEntries] = useState([]);
  const [activity, setActivity] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');

  const activities = [...new Set(EMISSION_FACTORS.map(f => f.activity))];
  const availableCategories = EMISSION_FACTORS.filter(f => f.activity === activity);
  
  const currentFactor = EMISSION_FACTORS.find(f => f.activity === activity && f.category === category);
  const unitHint = currentFactor ? `in ${currentFactor.unit}` : '';

  const handleAddEntry = (e) => {
    e.preventDefault();
    if (!activity || !category || !quantity || isNaN(quantity) || quantity <= 0) return;

    const emission = parseFloat(quantity) * currentFactor.factor;
    
    const newEntry = {
      id: Date.now(),
      activity,
      category,
      quantity: parseFloat(quantity),
      unit: currentFactor.unit,
      emission,
      scope: currentFactor.scope,
      factor: currentFactor.factor
    };

    setEntries([...entries, newEntry]);
    
    setActivity('');
    setCategory('');
    setQuantity('');
  };

  const removeEntry = (id) => {
    setEntries(entries.filter(e => e.id !== id));
  };

  const totalEmissions = entries.reduce((sum, e) => sum + e.emission, 0);
  const scope1Total = entries.filter(e => e.scope === 1).reduce((sum, e) => sum + e.emission, 0);
  const scope2Total = entries.filter(e => e.scope === 2).reduce((sum, e) => sum + e.emission, 0);
  const scope3Total = entries.filter(e => e.scope === 3).reduce((sum, e) => sum + e.emission, 0);

  const barData = [
    { name: 'Scope 1', value: parseFloat(scope1Total.toFixed(2)), fill: BAR_COLORS['Scope 1'] },
    { name: 'Scope 2', value: parseFloat(scope2Total.toFixed(2)), fill: BAR_COLORS['Scope 2'] },
    { name: 'Scope 3', value: parseFloat(scope3Total.toFixed(2)), fill: BAR_COLORS['Scope 3'] },
  ];

  const categoryTotals = {};
  entries.forEach(e => {
    categoryTotals[e.category] = (categoryTotals[e.category] || 0) + e.emission;
  });
  
  const pieData = Object.keys(categoryTotals).map(k => ({
    name: k,
    value: parseFloat(categoryTotals[k].toFixed(2))
  }));

  const MetricCard = ({ title, value, unit, highlight = false }) => (
    <div style={{
      background: highlight ? 'var(--primary-green)' : 'white',
      color: highlight ? 'white' : 'var(--text-main)',
      padding: '1.5rem',
      borderRadius: '16px',
      boxShadow: 'var(--shadow-sm)',
      border: highlight ? 'none' : '1px solid var(--border-light)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
      <div style={{ fontSize: '1rem', fontWeight: '500', color: highlight ? 'rgba(255,255,255,0.9)' : 'var(--text-muted)' }}>
        {title}
      </div>
      <div style={{ fontSize: '2rem', fontWeight: '800' }}>
        {value.toLocaleString(undefined, { maximumFractionDigits: 2 })}
      </div>
      <div style={{ fontSize: '0.85rem', color: highlight ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)' }}>
        {unit}
      </div>
    </div>
  );

  return (
    <main className="animate-fade-in" style={{ background: 'var(--bg-secondary)', minHeight: 'calc(100vh - 80px)', paddingBottom: '6rem' }}>
      <div className="container" style={{ paddingTop: '4rem', maxWidth: '1400px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', margin: '0 auto 1.5rem' }}>
            <Calculator size={16} /> ESG Intelligence
          </div>
          <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
            Interactive <span>ESG Calculator</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.6' }}>
            Instantly map your operational activity against scientifically validated conversion factors to visualize your Scope 1, 2, and 3 footprint in real time.
          </p>
        </div>

        {/* Top Summary Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <MetricCard title="Total Emissions" value={totalEmissions} unit="kg CO2e" highlight={true} />
          <MetricCard title="Scope 1 Emissions" value={scope1Total} unit="kg CO2e" />
          <MetricCard title="Scope 2 Emissions" value={scope2Total} unit="kg CO2e" />
          <MetricCard title="Scope 3 Emissions" value={scope3Total} unit="kg CO2e" />
        </div>

        {/* Input Form Section */}
        <div style={{ background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-light)', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Add Emission Entry</h3>
          
          <form onSubmit={handleAddEntry} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', alignItems: 'end' }}>
            <div>
              <label className="form-label" style={{ marginBottom: '0.4rem', fontSize: '0.9rem' }}>Activity Group</label>
              <select 
                className="form-input" 
                value={activity} 
                onChange={(e) => { setActivity(e.target.value); setCategory(''); }}
                required
                style={{ padding: '0.875rem 1rem' }}
              >
                <option value="">Select Activity</option>
                {activities.map(act => <option key={act} value={act}>{act}</option>)}
              </select>
            </div>

            <div>
              <label className="form-label" style={{ marginBottom: '0.4rem', fontSize: '0.9rem' }}>Emission Category</label>
              <select 
                className="form-input" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                required
                disabled={!activity}
                style={{ padding: '0.875rem 1rem' }}
              >
                <option value="">Select Category</option>
                {availableCategories.map(cat => <option key={cat.category} value={cat.category}>{cat.category}</option>)}
              </select>
            </div>

            <div>
              <label className="form-label" style={{ marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                Quantity {unitHint && <span style={{ color: 'var(--primary-green)', fontWeight: '600' }}>({unitHint})</span>}
              </label>
              <input 
                type="number" 
                step="any"
                min="0"
                className="form-input" 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)}
                required
                disabled={!category}
                placeholder="E.g. 1000"
                style={{ padding: '0.875rem 1rem' }}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ padding: '0.875rem', display: 'flex', gap: '8px', justifyContent: 'center', height: '52px' }}>
              <Plus size={20} /> Add Entry
            </button>
          </form>
        </div>

        {/* Side-by-Side Charts Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          
          <div style={{ background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-light)' }}>
             <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-main)', textAlign: 'center' }}>Emissions by Scope</h3>
             {totalEmissions > 0 ? (
               <div style={{ width: '100%', height: 350 }}>
                 <ResponsiveContainer>
                   <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-light)" />
                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 13, fill: 'var(--text-muted)' }} dy={10} />
                     <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 13, fill: 'var(--text-muted)' }} />
                     <Tooltip cursor={{ fill: 'var(--bg-secondary)' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: 'var(--shadow-md)' }} />
                     <Legend verticalAlign="bottom" height={36} iconType="circle" />
                     <Bar dataKey="value" name="kg CO2e" radius={[6, 6, 0, 0]} maxBarSize={60}>
                        {barData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                     </Bar>
                   </BarChart>
                 </ResponsiveContainer>
               </div>
             ) : (
               <div style={{ height: 350, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                 No data to visualize. Add entries first!
               </div>
             )}
          </div>

          <div style={{ background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-light)' }}>
             <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-main)', textAlign: 'center' }}>Emissions Breakdown</h3>
             {totalEmissions > 0 ? (
               <div style={{ width: '100%', height: 350 }}>
                 <ResponsiveContainer>
                   <PieChart>
                     <Pie
                       data={pieData}
                       cx="50%"
                       cy="45%"
                       innerRadius={80}
                       outerRadius={120}
                       paddingAngle={4}
                       dataKey="value"
                     >
                       {pieData.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                       ))}
                     </Pie>
                     <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: 'var(--shadow-md)' }} formatter={(value) => `${value} kg`} />
                     <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '0.9rem' }} />
                   </PieChart>
                 </ResponsiveContainer>
               </div>
             ) : (
               <div style={{ height: 350, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                 No data to visualize. Add entries first!
               </div>
             )}
          </div>

        </div>

        {/* Full-width Logged Entries Table */}
        {entries.length > 0 && (
          <div style={{ background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-light)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Logged Activity Log</h3>
            <div style={{ overflowX: 'auto' }}>
               <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
                  <thead>
                     <tr style={{ borderBottom: '2px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                        <th style={{ padding: '1rem' }}>Entry ID</th>
                        <th style={{ padding: '1rem' }}>Activity Group</th>
                        <th style={{ padding: '1rem' }}>Emission Category</th>
                        <th style={{ padding: '1rem' }}>Quantity</th>
                        <th style={{ padding: '1rem' }}>Emission Factor</th>
                        <th style={{ padding: '1rem' }}>Scope</th>
                        <th style={{ padding: '1rem' }}>Total Emission</th>
                        <th style={{ padding: '1rem', textAlign: 'center' }}>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {entries.slice().reverse().map(entry => (
                        <tr key={entry.id} style={{ borderBottom: '1px solid var(--border-light)', transition: 'background 0.2s', ':hover': { background: 'var(--bg-secondary)' } }}>
                           <td style={{ padding: '1.25rem 1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>#{entry.id.toString().slice(-6)}</td>
                           <td style={{ padding: '1.25rem 1rem', fontWeight: '500' }}>{entry.activity}</td>
                           <td style={{ padding: '1.25rem 1rem', color: 'var(--text-main)' }}>{entry.category}</td>
                           <td style={{ padding: '1.25rem 1rem' }}>{entry.quantity} <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{entry.unit}</span></td>
                           <td style={{ padding: '1.25rem 1rem', color: 'var(--text-muted)' }}>{entry.factor.toFixed(2)}</td>
                           <td style={{ padding: '1.25rem 1rem' }}>
                             <span style={{ background: 'var(--bg-secondary)', padding: '0.35rem 0.85rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: '500', color: 'var(--text-muted)' }}>
                               Scope {entry.scope}
                             </span>
                           </td>
                           <td style={{ padding: '1.25rem 1rem', fontWeight: '700', color: 'var(--primary-green)' }}>
                             {entry.emission.toLocaleString(undefined, { maximumFractionDigits: 2 })} kg
                           </td>
                           <td style={{ padding: '1.25rem 1rem', textAlign: 'center' }}>
                              <button onClick={() => removeEntry(entry.id)} style={{ color: '#ef4444', padding: '0.5rem', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.1)', display: 'inline-flex', alignItems: 'center', transition: 'transform 0.1s' }}>
                                <Trash2 size={16} />
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
          </div>
        )}

      </div>
    </main>
  );
};

export default ESGCalculator;
