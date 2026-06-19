import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import {
  Instagram,
  ArrowRight,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import { infos } from "../../content/content";

function SocialMediaTemplate({ colorMode }) {
  let backgroundMode,
    text,
    textOpacity,
    cardBg,
    borderCard,
    arrowColor,
    imageBorder,
    miniTag;

  switch (colorMode) {
    case "light":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      cardBg = "bg-white";
      borderCard = "border-border";
      arrowColor = "text-black";
      imageBorder = "border-white";
      miniTag = "text-primaryDark";
      break;

    case "dark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      cardBg = "bg-gray-900";
      borderCard = "border-gray-700";
      arrowColor = "text-white";
      imageBorder = "border-borderImage";
      miniTag = "text-primaryLight";
      break;

    case "defaultDark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      cardBg = "bg-white";
      borderCard = "border-border";
      arrowColor = "text-white";
      imageBorder = "border-white";
      miniTag = "text-primaryDark";
      break;

    case "defaultLight":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      cardBg = "bg-[color-mix(in_srgb,var(--primaryDark),black_60%)]";
      borderCard = "border-border";
      arrowColor = "text-white";
      imageBorder =
        " border-[8px] border-[color-mix(in_srgb,var(--primaryDark),black_60%)]";
      miniTag = "text-primaryDark";
  }

  return (
    <SectionArea className={backgroundMode} paddingtop={false}>
      <SectionWrapper>
        <section>
          <div className="container mx-auto">
            {/* Cabeçalho */}


            <SectionHeaderNovo
              miniTitle={content.texts.about.aboutSocial.miniTag}
              title={content.texts.about.aboutSocial.title}
              subtitle={content.texts.about.aboutSocial.subtitle}
              colorMode={colorMode}
            />

            <MotionDivDownToUp>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Imagem */}
                <div className="flex justify-center overflow-visible">
                  <div
                    className={`relative max-w-md w-full rounded-[2.5rem] shadow-2xl border-[8px] ${imageBorder}`}
                  >
                    {/* GLOW */}
                    <div
                      className="absolute -inset-4 rounded-[3rem]
                 bg-gradient-to-tr from-purple-500 to-orange-400
                 opacity-20 blur-2xl pointer-events-none"
                    />

                    {/* CLIP DA IMAGEM */}

                    <div className="relative rounded-[2rem] overflow-hidden">
                      <img
                        src={content.texts.about.aboutSocial.img.img}
                        alt={content.texts.about.aboutSocial.img.alt}
                        className="w-full scale-105 hover:scale-100 transition-transform duration-700 rounded-[1.5rem]"
                        width={621}
                        height={861}
                      />
                    </div>
                  </div>
                </div>

                {/* Cards sociais */}
                <div className="space-y-8">
                  {infos?.facebookProfile?.trim() && (
                    <a
                      href={content.texts.links.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Link para o Facebook"
                      className={`group flex items-center gap-6 p-6 rounded-2xl border ${borderCard} hover:shadow-lg transition-all ${cardBg} hover:scale-105 hover:duration-500`}
                    >
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-blue-500 text-white flex items-center justify-center shrink-0">
                        <Facebook className="w-7 h-7" />
                      </div>

                      <div>
                        <h1
                          className={`font-bold font-secondFont text-lg ${text}`}
                        >
                          Facebook
                        </h1>
                        <p
                          className={`font-secondFont font-light text-sm ${textOpacity}`}
                        >
                          Dicas diárias e bastidores
                        </p>
                      </div>

                      <ArrowRight className={`ml-auto w-5 h-5 ${arrowColor}`} />
                    </a>
                  )}

                  {infos?.instagramProfile?.trim() && (
                    <a
                      href={content.texts.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Link para Instagram"
                      className={`group flex items-center gap-6 p-6 rounded-2xl border ${borderCard} hover:shadow-lg transition-all ${cardBg} hover:scale-105 hover:duration-500`}
                    >
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500 text-white flex items-center justify-center shrink-0">
                        <Instagram className="w-7 h-7" />
                      </div>

                      <div>
                        <h1
                          className={`font-bold font-secondFont text-lg ${text}`}
                        >
                          Instagram
                        </h1>
                        <p
                          className={`font-secondFont font-light text-sm ${textOpacity}`}
                        >
                          Dicas diárias e bastidores
                        </p>
                      </div>

                      <ArrowRight className={`ml-auto w-5 h-5 ${arrowColor}`} />
                    </a>
                  )}

                  {infos?.linkeDinProfile?.trim() && (
                    <a
                      href={content.texts.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Link para o LinkedIn"
                      className={`group flex items-center gap-6 p-6 rounded-2xl border ${borderCard} hover:shadow-lg transition-all ${cardBg} hover:scale-105 hover:duration-500`}
                    >
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-blue-500 text-white flex items-center justify-center shrink-0">
                        <Linkedin className="w-7 h-7" />
                      </div>

                      <div>
                        <h1
                          className={`font-bold font-secondFont text-lg ${text}`}
                        >
                          LinkedIn
                        </h1>
                        <p
                          className={`font-secondFont font-light text-sm ${textOpacity}`}
                        >
                          Dicas diárias e bastidores
                        </p>
                      </div>

                      <ArrowRight className={`ml-auto w-5 h-5 ${arrowColor}`} />
                    </a>
                  )}

                  {infos?.instagramProfileSecundario?.trim() && (
                    <a
                      href={content.texts.links.instagramSecundario}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Link para Instagram"
                      className={`group flex items-center gap-6 p-6 rounded-2xl border ${borderCard} hover:shadow-lg transition-all ${cardBg} hover:scale-105 hover:duration-500`}
                    >
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500 text-white flex items-center justify-center shrink-0">
                        <Instagram className="w-7 h-7" />
                      </div>

                      <div>
                        <h1
                          className={`font-bold font-secondFont text-lg ${text}`}
                        >
                          Instagram Pessoal
                        </h1>
                        <p
                          className={`font-secondFont font-light text-sm ${textOpacity}`}
                        >
                          Dicas diárias e bastidores
                        </p>
                      </div>

                      <ArrowRight className={`ml-auto w-5 h-5 ${arrowColor}`} />
                    </a>
                  )}

                  {infos?.tiktokProfile?.trim() && (
                    <a
                      href={content.texts.links.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Link para TikTok"
                      className={`group flex items-center gap-6 p-6 rounded-2xl border ${borderCard} hover:shadow-lg transition-all ${cardBg} hover:scale-105 hover:duration-500`}
                    >
                      <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                          fill="currentColor"
                        >
                          <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z"></path>
                        </svg>
                      </div>

                      <div>
                        <h1
                          className={`font-bold font-secondFont text-lg ${text}`}
                        >
                          TikTok
                        </h1>
                        <p
                          className={`font-secondFont font-light text-sm ${textOpacity}`}
                        >
                          Conteúdo corporativo
                        </p>
                      </div>

                      <ArrowRight className={`ml-auto w-5 h-5 ${arrowColor}`} />
                    </a>
                  )}

                  {infos?.youtubeProfile?.trim() && (
                    <a
                      href={content.texts.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Link para o YouTube"
                      className={`group flex items-center gap-6 p-6 rounded-2xl border ${borderCard} hover:shadow-lg transition-all ${cardBg} hover:scale-105 hover:duration-500`}
                    >
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-red-500 to-red-500 text-white flex items-center justify-center shrink-0">
                        <Youtube className="w-7 h-7" />
                      </div>

                      <div>
                        <h1
                          className={`font-bold font-secondFont text-lg ${text}`}
                        >
                          YouTube
                        </h1>
                        <p
                          className={`font-secondFont font-light text-sm ${textOpacity}`}
                        >
                          Dicas diárias e bastidores
                        </p>
                      </div>

                      <ArrowRight className={`ml-auto w-5 h-5 ${arrowColor}`} />
                    </a>
                  )}
                </div>
              </div>
            </MotionDivDownToUp>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  );
}

export default SocialMediaTemplate;
