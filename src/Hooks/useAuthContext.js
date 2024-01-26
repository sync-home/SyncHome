import { AuthContext } from '@/provider/AuthProvider';
import { useContext } from 'react';

const useAuthContext = () => {
    return useContext(AuthContext)
};

export default useAuthContext;