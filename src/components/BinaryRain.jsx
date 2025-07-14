import { useEffect, useRef } from "react";

const BinaryRain = () => {
  const canvasRef = useRef(null);
  const numSymbols = 50;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();

    const zeroImage = new Image();
    const oneImage = new Image();
    zeroImage.src = "/000.png";
    oneImage.src = "/111.png";

    const symbols = [];
    for (let i = 0; i < numSymbols; i++) {
      symbols.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 1,
        img: Math.random() > 0.5 ? zeroImage : oneImage,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      symbols.forEach((symbol) => {
        ctx.drawImage(symbol.img, symbol.x, symbol.y, 30, 30);
        symbol.y += symbol.speed;
        if (symbol.y > canvas.height) {
          symbol.y = -30;
          symbol.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(draw);
    };

    zeroImage.onload = oneImage.onload = () => draw();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    />
  );
};

export default BinaryRain;
