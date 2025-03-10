import { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Preloader some após 2 segundos

    return () => clearTimeout(timeout);
  }, []);

  return (
    loading && (
      <div className="preloader-container">
        <i className="circle-preloader"></i>
      </div>
    )
  );
};

export default Preloader;
