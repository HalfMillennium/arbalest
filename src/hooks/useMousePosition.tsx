import { useState, useEffect } from "react";

const INITIAL_MOUSE_STATE: { x: number | null; y: number | null } = {
  x: null,
  y: null,
};

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState(INITIAL_MOUSE_STATE);

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
}
