
import './App.css';
import { CustomerForm } from './components/CustomerForm';
import { Hello } from './components/Hello';

import { CustomerProvider } from './contexts/customer'

function App() {

  


  return (
    <div className="App">
      <CustomerProvider>
        <Hello/>
        <CustomerForm />
      </CustomerProvider>
      
      
    </div>
  );
}

export default App;
