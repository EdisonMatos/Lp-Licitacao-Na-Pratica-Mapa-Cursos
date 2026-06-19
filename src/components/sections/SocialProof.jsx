import React, { useState, useRef, useEffect } from "react";
import content from "../../content/content";
import { Carousel } from "primereact/carousel";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

function SocialProof({ colorMode }) {
  const responsiveOptions = [
    { breakpoint: "3000px", numVisible: 2, numScroll: 1 },
    { breakpoint: "1280px", numVisible: 2, numScroll: 1 },
    { breakpoint: "767px", numVisible: 1, numScroll: 1 },
  ];

  const imagens = Object.values(content.texts.socialProof.images);

  const productTemplate = (item) => (
    <div className="flex justify-center px-2 py-2">
      <img
        src={item}
        alt="imagens de feedback"
        className="max-w-[800px] w-full rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)] p-5"
        width={634}
        height={625}
      />
    </div>
  );

  const [page, setPage] = useState(0);
  const carouselRef = useRef(null);
  const totalPages = imagens.length;

  const next = () => setPage((prev) => (prev + 1) % totalPages);
  const prev = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 10000);

    return () => clearInterval(interval);
  }, [page, totalPages]);

  // Estilos dependendo do colorMode
  let text, textOpacity, bgContainer, bgButtons;
  switch (colorMode) {
    case "light":
      bgContainer = "bg-white";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      bgButtons = "bg-black";
      break;
    case "dark":
      bgContainer = "bg-darkOpacity";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      bgButtons = "bg-white";
      break;
    case "defaultDark":
      bgContainer = "bg-white";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      bgButtons = "bg-black/30";
      break;
    case "defaultLight":
      bgContainer = "bg-white";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      bgButtons = "bg-black";
      break;
  }

  return (
    <SectionArea paddingTopAndBottom={false} className={`bg-transparent`}>
      <SectionWrapper>
        <section
          className={`rounded-xl p-5 w-full desktop1:px-10 pt-10 pb-5 max-w-[1215px] my-6 tablet1:my-10 desktop1:my-12 ${bgContainer}`}
        >
          <div className="flex w-full justify-between relative flex-col desktop1:flex-row desktop1:gap-6">
            <div className="font-secondFont tablet1:w-[400px] desktop1:w-[310px] mx-auto desktop1:mx-0">
              <section className="flex items-center gap-2 mb-3 w-full justify-center desktop1:justify-start">
                <svg
                  viewBox="-3 0 262 262"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  fill="#000000"
                  width={30}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                      fill="#EB4335"
                    ></path>
                  </g>
                </svg>
                <p className={`text-[14px] font-light ${textOpacity}`}>
                  Avaliações no Google
                </p>
              </section>

              <section className="mb-6 w-full text-center desktop1:text-start">
                <h1
                  className={`text-title4 max-w-[310px] mx-auto desktop1:m-0 font-bold leading-10 ${text}`}
                >
                  O que nossos clientes dizem
                </h1>
              </section>

              <section className="flex gap-4 mb-6 justify-center mx-auto desktop1:mx-0 desktop1:justify-start w-fit">
                <h1 className={`text-title4 ${textOpacity}`}>5.0</h1>
                <div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-300"
                        fill="#fde047"
                        width={20}
                        height={20}
                      />
                    ))}
                  </div>
                  <p className={`text-sm font-light ${textOpacity}`}>
                    Excelente
                  </p>
                </div>
              </section>

              <div className="flex gap-3 mt-4 justify-center mb-4 desktop1:justify-start">
                <button
                  aria-label="Voltar"
                  onClick={prev}
                  className={`p-2 rounded-full shadow ${bgButtons} hover:scale-90 duration-500 transition-all`}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  aria-label="Avançar"
                  onClick={next}
                  className={`p-2 rounded-full shadow ${bgButtons} hover:scale-90 duration-500 transition-all`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="desktop1:w-[600px] desktop2:w-[700px] desktop3:w-[800px]">
              <Carousel
                ref={carouselRef}
                value={imagens}
                numScroll={1}
                showIndicators={true}
                numVisible={3}
                showNavigators={false}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
                page={page}
              />
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  );
}

export default SocialProof;
