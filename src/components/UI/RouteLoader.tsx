import { useEffect, useState } from "react";
import Loader from "./Loader";
import { useLocation } from "react-router-dom";

const RouteLoader = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* CONTENU TOUJOURS MONTÉ */}
      {children}

      {/* LOADER EN OVERLAY */}
      {loading && <Loader />}
    </>
  );
};

export default RouteLoader;
