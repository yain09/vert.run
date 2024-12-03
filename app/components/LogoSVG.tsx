// Archivo: app/components/LogoSVG.tsx
import React from "react";
import Svg, { Path, Polygon } from "react-native-svg";
import { useTheme } from "../hooks/ThemeContext"; // Usamos el hook para obtener el tema actual

// Componente de íconos dinámicos, recibe el tamaño del ícono como prop
const LogoSVG = ({ size = 70 }: { size?: number }) => {
  const { theme } = useTheme(); // Obtener el tema actual (dark o light)
  const fillColor = theme === "dark" ? "#FFFFFF" : "#000000"; // Define el color de relleno dependiendo del tema

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3042.7 1322.9"
      width={size}
      height={size*0.5}
    >
      <Polygon
        fill={fillColor}
        id="V"
        points="253.81,560.86 32.87,26.44 162.83,26.44 305.57,398.62 431.09,26.44 571.38,26.44 347.47,560.86 "
      />
      <Polygon
        fill={fillColor}
        id="E"
        points="854.14,561.21 854.14,27.09 1159.98,27.09 1159.98,133.33 974.63,133.33 974.63,242.1 1149.65,242.1 1149.65,348.42 974.63,348.42 974.63,455.74 1159.98,455.74 1159.98,561.21 "
      />
      <Path
        fill={fillColor}
        id="R"
        d="M1492.08 560.86l0 -533.91 128.18 0c59.49,0 93.51,2.74 116.91,8.22 77.04,18.03 120.47,78.92 120.47,158.05 0,70.62 -41.46,129.71 -111.93,145.02l183.84 222.62 -152.94 0 -163.57 -209.08 0 209.08 -120.96 0zm121.26 -296.57l26.89 0c31.36,0 54.26,-5.35 68.69,-16.06 14.44,-10.7 21.66,-27.5 21.66,-50.28 0,-26.75 -6.7,-45.83 -20.16,-57.12 -13.54,-11.36 -36.1,-16.93 -67.95,-16.93l-29.13 0 0 140.39z"
      />
      <Polygon
        fill={fillColor}
        id="T"
        points="2311.43,560.42 2311.43,134.17 2184.32,134.17 2184.32,26.59 2559.83,26.59 2559.83,134.17 2433.28,134.17 2433.28,560.42 "
      />
      <Path
        fill={fillColor}
        id="punto"
        d="M2866.19 500.22c0,-20.18 6.8,-37.07 20.53,-50.8 13.62,-13.73 30.51,-20.66 50.8,-20.66 20.66,0 37.8,6.93 51.65,20.66 13.73,13.73 20.66,30.62 20.66,50.8 0,20.17 -6.93,37.18 -20.9,51.16 -13.86,13.98 -30.99,21.02 -51.41,21.02 -20.05,0 -36.82,-7.04 -50.67,-21.02 -13.74,-13.98 -20.66,-30.99 -20.66,-51.16z"
      />
      <Path
        fill={fillColor}
        id="R2"
        d="M586.15 1288.4l0 -533.91 128.18 0c59.49,0 93.51,2.74 116.9,8.22 77.04,18.02 120.48,78.92 120.48,158.05 0,70.62 -41.47,129.71 -111.93,145.02l183.84 222.62 -152.95 0 -163.56 -209.08 0 209.08 -120.96 0zm121.26 -296.57l26.88 0c31.37,0 54.26,-5.35 68.7,-16.06 14.44,-10.7 21.66,-27.5 21.66,-50.28 0,-26.75 -6.7,-45.83 -20.17,-57.12 -13.53,-11.36 -36.09,-16.93 -67.95,-16.93l-29.12 0 0 140.39z"
      />

      <Path
        fill={fillColor}
        id="U"
        d="M1306.13 755.76l119.11 0 1.01 318.9c0.23,72.44 30.37,103.37 82.98,103.37 52.61,0 82.75,-30.93 82.98,-103.37l1.01 -318.9 119.11 0 0.49 360.13c0.17,120.88 -86.31,180.48 -203.59,180.57 -117.28,-0.09 -203.75,-59.69 -203.59,-180.57l0.49 -360.13z"
      />
      <Polygon
        fill={fillColor}
        id="N"
        points="2055.4,1288.1 2055.4,754.49 2172.46,754.49 2386.67,1076.05 2386.67,754.49 2512.5,754.49 2512.5,1288.1 2386.67,1288.1 2172.46,953.01 2172.46,1288.1 "
      />
    </Svg>
  );
};
export default LogoSVG;
