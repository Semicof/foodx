import { useAppContext } from '@/context/AppProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login'); 
    }
  }, [user, router]);

  return user ? children : null;
};

export default ProtectedRoute;
