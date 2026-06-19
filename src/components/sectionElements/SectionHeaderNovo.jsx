import React from "react";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function SectionHeaderNovo({
  miniTitle,
  title,
  destaque,
  secondPart,
  subtitle,
  colorMode,
  type,
  usage,
  className,
  index, // Valor padrão para evitar erros
}) {
  let textDestaque,
    textTitulos,
    textOpacity,
    cardBg,
    borderCard,
    arrowColor,
    imageBorder,
    miniTag;

  // 1. Definimos a lógica de par/ímpar aqui fora para ser usada em qualquer case
  const isEven = index % 2 === 0;

  switch (colorMode) {
    case "light":
      textDestaque = "text-primaryDark";
      textTitulos = isEven ? "text-tituloLightMode" : "text-tituloDarkMode";
      textOpacity = isEven
        ? "text-subtituloLightMode"
        : "text-subtituloDarkMode";
      cardBg = "bg-white";
      borderCard = "border-border";
      arrowColor = "text-mutedForeground group-hover:text-primaryDark";
      imageBorder = "border-white";
      miniTag = isEven ? "text-black" : "text-green-600";
      break;

    case "dark":
      textDestaque = "text-primaryLight";
      textTitulos = isEven ? "text-tituloLightMode" : "text-tituloDarkMode";
      textOpacity = isEven
        ? "text-subtituloLightMode"
        : "text-subtituloDarkMode";
      cardBg = "bg-gray-900";
      borderCard = "border-gray-700";
      arrowColor = "text-mutedForeground group-hover:text-primaryLight";
      imageBorder = "border-borderImage";
      miniTag = isEven ? "text-minitagLightMode" : "text-minitagDarkMode";
      break;

    case "defaultDark":
      textDestaque = "text-primaryDark";
      textTitulos = isEven ? "text-tituloLightMode" : "text-tituloDarkMode";
      textOpacity = isEven
        ? "text-subtituloLightMode"
        : "text-subtituloDarkMode";
      cardBg = "bg-white";
      borderCard = "border-border";
      arrowColor = "text-mutedForeground group-hover:text-primaryDark";
      imageBorder = "border-white";
      miniTag = isEven ? "text-minitagLightMode" : "text-minitagDarkMode";
      break;

    case "defaultLight":
      textDestaque = "text-white";
      textTitulos = isEven ? "text-tituloLightMode" : "text-tituloDarkMode";
      textOpacity = isEven
        ? "text-subtituloLightMode"
        : "text-subtituloDarkMode";
      cardBg = "bg-gray-900";
      borderCard = "border-gray-700";
      arrowColor = "text-mutedForeground group-hover:text-primaryLight";
      imageBorder = "border-borderImage";
      miniTag = isEven ? "text-minitagLightMode" : "text-minitagDarkMode";
      break;
  }

  // Lógica de alinhamento
  if (type === "article") {
    usage = "text-start mb-8";
  } else {
    usage = "text-center mb-16";
  }

  return (
    <MotionDivDownToUp>
      <div className={`w-full mx-auto ${className} ${usage}`}>
        {miniTitle && (
          <span
            className={`font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block ${miniTag}`}
          >
            {miniTitle}
          </span>
        )}

        {title && (
          <h2
            className={`text-3xl md:text-4xl font-mainFont font-medium mb-4 ${textTitulos}`}
          >
            {title} <span className={`italic ${textDestaque}`}>{destaque}</span>{" "}
            {secondPart}
          </h2>
        )}

        {subtitle && (
          <p className={`font-secondFont font-light ${textOpacity}`}>
            {subtitle}
          </p>
        )}
      </div>
    </MotionDivDownToUp>
  );
}

export default SectionHeaderNovo;
