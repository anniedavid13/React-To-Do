
import { Header } from './components/header';
import './App.css';
import { Outlet } from 'react-router-dom';

import Container from '@mui/material/Container';

function App() {
  return (
    <Container maxWidth="sm">
      <Header />
        <main>
          <Outlet />
        </main>
        <footer>
        </footer>
    </Container>
  );
}

export default App;
