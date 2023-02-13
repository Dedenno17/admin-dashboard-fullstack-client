import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { themeSettings } from 'theme';
import Layout from 'scenes/Layout';
import Dashboard from 'scenes/Dashboard';
import Products from 'scenes/Products';
import Customers from './scenes/Customers';
import Transactions from './scenes/Transactions';
import Geography from './scenes/Geography';
import Overview from './scenes/Overview';
import Daily from './scenes/Daily';
import Monthly from 'scenes/Monthly';
import Breakdown from './scenes/Breakdown';
import Admin from 'scenes/Admin';
import Peformance from 'scenes/Peformance';

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const theme = createTheme(themeSettings(mode));
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transaction" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/peformance" element={<Peformance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
