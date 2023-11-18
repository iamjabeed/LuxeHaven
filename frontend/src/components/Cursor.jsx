import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      animate={{
        x: position.x - 35,
        y: position.y - 70,
        width: 20,
        height: 20,
        // backgroundColor: "#1f1fcd",
      }}
    ></motion.div>
  );
};

export default Cursor;
