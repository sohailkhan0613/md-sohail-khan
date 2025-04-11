
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomePage from "./HomePage";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/');
  }, [navigate]);
  
  return <HomePage />;
};

export default Index;
