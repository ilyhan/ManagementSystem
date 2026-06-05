import RoutesProvider from '@/router/RoutesProvider';
import ToastsContex from '@/common/toasts/ToastsContex';
import ToastsProvider from '@/common/toasts/components/toastProvider/ToastsProvider';
import { AuthProvider } from '@/store/authProvider';

function App() {
  return (
    <AuthProvider>
      <ToastsContex>
        <ToastsProvider />
        <RoutesProvider />
      </ToastsContex>
    </AuthProvider>
  );
}

export default App;
