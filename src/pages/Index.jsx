import React, { lazy, Suspense } from "react";
// Importações de componentes...
import NavbarNovaTemplate from "../components/sections/Navbar/NavbarNovaTemplate";
import HeroTemplateNovo from "../components/sections/HeroTemplateNovo";
import StepsNovoTemplate from "../components/sections/StepsNovoTemplate";
import FaqNovoTemplate from "../components/sections/FaqNovoTemplate";
import Important from "../components/sections/Important";

import FeaturesNovaTemplate from "../components/sections/FeaturesNovaTemplate";
import CtaNovoTemplate from "../components/sections/CtaNovoTemplate";
import AboutNovoTemplate from "../components/sections/AboutNovoTemplate";
import FooterNovoTemplate from "../components/sections/FooterNovoTemplate";
import WhatsappAnimated from "../components/interactives/WhatsAppAnimated";

import {
  ColorModeProvider,
  useColorMode,
  NavbarRender,
} from "../context/UseContextArchive";
import { AlternatingSection } from "../context/AlternatingSection";

export default function Index() {
  const { colorMode } = useColorMode();
  const { navbarHero } = NavbarRender();

  // Para que as cores alternem conforme a cor de fundo, a prop index deve existir na seção e ser referenciada no SectionHeader chamado na seção
  // DEFINIÇÃO DAS SEÇÕES: Mude a ordem somente aqui
  const sections = [
    {
      id: "hero",
      Component: HeroTemplateNovo,
      props: { obs: true, obsTwo: true },
      forceDark: true,
      lazy: false,
    },
    { id: "important", Component: Important, props: {}, lazy: false },
    {
      id: "features",
      Component: FeaturesNovaTemplate,
      props: { frasesDestaque: true, accordion: true, modal: false },
      lazy: true,
    },
    {
      id: "about",
      Component: AboutNovoTemplate,
      props: { ButtonModal: false, benefits: true },
      lazy: true,
    },
    {
      id: "cta",
      Component: CtaNovoTemplate,
      props: { container: false },
      forceDark: true,
      lazy: true,
    },
    { id: "steps", Component: StepsNovoTemplate, props: {}, lazy: true },
    { id: "faq", Component: FaqNovoTemplate, props: {}, lazy: true },
    {
      id: "footer",
      Component: FooterNovoTemplate,
      props: {
        mapa: false,
        phone: true,
        expediente: true,
        adress: true,
        email: true,
        fraseFooter: true,
      },
      forceDark: true,
      lazy: true,
    },
  ];

  return (
    <ColorModeProvider>
      {!navbarHero && <NavbarNovaTemplate colorMode={colorMode} />}

      <main>
        {sections.map((section, idx) => {
          const Content = (
            <AlternatingSection
              key={section.id}
              index={idx}
              colorMode={colorMode}
              forcePrimaryDark={section.forceDark}
            >
              <section.Component
                {...section.props}
                colorMode={colorMode}
                index={idx}
              />
            </AlternatingSection>
          );

          return section.lazy ? (
            <Suspense key={section.id} fallback={null}>
              {Content}
            </Suspense>
          ) : (
            Content
          );
        })}

        <Suspense fallback={null}>
          <WhatsappAnimated colorMode={colorMode} />
        </Suspense>
      </main>
    </ColorModeProvider>
  );
}
