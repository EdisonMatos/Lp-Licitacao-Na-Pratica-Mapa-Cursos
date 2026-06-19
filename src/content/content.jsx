import logo from "../assets/imgs/logo/logo.webp";
import logoDesktop from "../assets/imgs/logo/logoDesktop.webp";
import heroDefaultImg from "../assets/imgs/hero/lawHero.webp";
import heroDefaultMobileImg from "../assets/imgs/hero/lawHeroMobile.webp";

import imgFeatures from "../assets/imgs/features/imgServices.webp";

import aboutImg from "../assets/imgs/about/aboutImg.webp";
// import team1 from '../assets/imgs/team/team1.webp'
// import team2 from '../assets/imgs/team/team2.webp'
// import aboutSocialImg from "../assets/imgs/about/aboutSocial.webp";

import imgSteps from "../assets/imgs/steps/imgSteps.webp";
// import logo1 from '../assets/imgs/parceria/Logo1.webp'
// import logo2 from '../assets/imgs/parceria/Logo2.webp'
// import logo3 from '../assets/imgs/parceria/Logo3.webp'

// import imgproof1 from "../assets/imgs/socialProof/socialproof1.webp";
// import imgproof2 from "../assets/imgs/socialProof/socialproof2.webp";
// import imgproof3 from "../assets/imgs/socialProof/socialproof3.webp";
// import imgproof4 from "../assets/imgs/socialProof/socialproof4.webp";
// import imgproof5 from "../assets/imgs/socialProof/socialproof5.webp";
// import imgproof6 from "../assets/imgs/socialProof/socialproof6.webp";

import {
  Baby,
  Briefcase,
  BriefcaseMedical,
  Gavel,
  Home,
  Key,
  LucideIdCard,
  Lock,
  MessageSquare,
  Scale,
  Users,
  User,
  Car,
  HandCoins,
  Check,
  Shield,
  BriefcaseBusiness,
  CheckCircle2,
  Clock,
  ShieldCheck,
  TriangleAlert,
  Handshake,
} from "lucide-react";

import { FileText } from "lucide-react";
import { Alert } from "@mui/material";

const currentYear = new Date().getFullYear();

export const infos = {
  name: "Taciane Martins",
  email: "contato", // Email desejado pelo cliente
  emailSecundario: "A_Definir", // Email desejado pelo cliente
  domain: "familia-tacianemartins.advespecialista.adv.br", // Sem "www"
  phone: {
    ddd: "11",
    firstPart: "97167", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "0116", // Apenas os 4 últimos números
  },
  phoneSecundario: {
    ddd: "00",
    firstPart: "00000", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "0000", // Apenas os 4 últimos números
  },
  phoneTerciario: {
    ddd: "00",
    firstPart: "00000", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "0000", // Apenas os 4 últimos números
  },
  endereco: (
    <div>
      {/* <p>Endereço:</p> */}
      <p>Endereço:</p>
      <p>Rua Vigário João José Rodrigues,</p>
      <p>nº 21 - 5º andar - Ed. In Design Office - Centro,</p>
      <p>Jundiaí - SP,</p>
      <p>CEP: 13208-670</p>
    </div>
  ),
  enderecoSecundario: (
    <div>
      <p>Endereço:</p>
      <p>A_Definir</p>
      <p>A_Definir</p>
      <p>A_Definir</p>
    </div>
  ),
  expediente: (
    <div>
      <p>Segunda a sexta-feira:</p>
      <p>9h às 19h</p>
    </div>
  ),
  obs: <span className="italic">A_Definir </span>,
  instagramProfile: "", // Sem o @
  instagramProfileSecundario: "",
  facebookProfile: "",
  linkeDinProfile: "",
  x: "",
  tiktokProfile: "",
  youtubeProfile: "",

  whatsappDefaultMessage:
    "Olá! Vim através do site de vocês e gostaria de tirar umas dúvidas.",
  whatsChatDefaultMessage:
    "Gostaria de falar conosco agora mesmo? Clque abaixo 👇",
  slogan: "",
};

const content = {
  texts: {
    navbar: {
      logo: {
        img: logo,
        imgDesktop: logoDesktop,
        alt: `Logomarca ${infos.name}`,
      },
      solidLogo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      menuItems: ["Início", "Serviços", "Sobre", "Perguntas Frequentes"],
      menuId: ["home", "feature", "about", "faq"],
      ariaLabel: "Botão de Contato",
      ctaButtonText: "Contato",
      ctaButtonTextResponsive: "Contato",
    },
    hero: {
      minitagIcon: (
        <>
          <Scale className="w-4 h-4" />
          {/* <MapPin className="w-4 h-4" /> */}
          {/* 🚨 */}
        </>
      ),
      miniTag: <>ADVOGADA DE FAMÍLIA</>,
      FirstPart: <span>Está passando por um divórcio ou conflito </span>,
      Destaque: (
        <span className="destaque relative italic font-light">familiar?</span>
      ),
      SecondPart: <span></span>,
      subtitle: (
        <p>
          Tenha orientação clara para resolver sua situação com segurança, sem
          desgaste desnecessário.
        </p>
      ),
      heroDefaultImage: heroDefaultImg,
      heroDefaulMobiletImg: heroDefaultMobileImg,

      alt: "Imagem ilustrativa da Seção Início",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
      ctaButtonText: <>Falar com a Advogada</>,
      ctaButtonTextSecondary: <>A_Definir</>,
      obsHero: {
        icon: <> {/* ⚠️ */}</>,
        iconTwo: <></>,
        text: <>💬 Atendimento 100% online e confidencial</>,
        textTwo: <>☑️ Com orientação de advocacia especializada</>,
      },
      secondaryCta: "Contato",
    },
    // socialProof: {
    //   minitag: "A-Definir",
    //   title: "A_Definir",
    //   subtitle: "A_Definir",
    //   ctaButtonText: "Falar com a equipe agora",
    //   images: {
    //     img1: imgproof1,
    //     img2: imgproof2,
    //     img3: imgproof3,
    //     img4: imgproof4,
    //     img5: imgproof5,
    //     img6: imgproof6,
    //   },
    // },
    emergency: {
      miniTag: <>Plantão Criminal 24 Horas</>,
      title: <h1>Atendimento Imediato em Casos Criminais</h1>,
      subtitle: (
        <div>
          <p className="mb-6 font-secondFont">
            Se você ou um familiar foi preso ou está sendo investigado, o
            atendimento deve ser imediato. Cada minuto é decisivo para garantir
            direitos, evitar abusos e preparar a defesa adequada.
          </p>
        </div>
      ),
      ctaButtonText: <>Falar com Advogada Agora</>,
    },
    authorityAlert: {
      miniTag: <>A_Definir</>,
      title: <h1>A_Definir</h1>,
      subtitle: (
        <div>
          <p className="mb-6 font-secondFont">A_Definir</p>
        </div>
      ),
      ctaButtonText: <>A_Definir</>,
    },
    important: {
      miniTag: <>ATENÇÃO</>,
      title: <>O que você precisa saber sobre Direito de Família</>,
      cards: {
        card1: {
          title: <>Preciso mesmo de advogado pra me divorciar?</>,
          paragraph: (
            <>
              Depende do caso. Quando há filhos menores ou desacordo entre as
              partes, o acompanhamento de um advogado é essencial para garantir
              que seus direitos sejam protegidos e o processo seja feito
              corretamente.
            </>
          ),
        },
        card2: {
          title: <>Como funciona a guarda dos filhos?</>,
          paragraph: (
            <>
              Aguarda pode ser compartilhada ou unilateral, sempre levando em
              consideração o que é melhor para a criança. O objetivo é garantir
              convivência equilibrada e decisões responsáveis sobre a vida dos
              filhos.
            </>
          ),
        },
        card3: {
          title: <>Pensão alimentícia é só pra filho?</>,
          paragraph: (
            <>
              Não. A pensão pode ser destinada também ao ex-cônjuge em algumas
              situações específicas, sempre analisando a necessidade de quem
              pede e a possibilidade de quem paga.
            </>
          ),
        },
        card4: {
          title: <>Dá pra resolver tudo sem briga na justiça?</>,
          paragraph: (
            <>
              Sim. Muitos casos podem ser resolvidos por acordo, de forma mais
              rápida e menos desgastante, desde que ambas as partes estejam
              dispostas a negociar.
            </>
          ),
        },
      },
      fraseObs: (
        <>Entre em contato conosco e daremos todo o suporte necessário</>
      ),
      ctaButtonText: <>Falar conosco agora pelo WhatsApp</>,
    },
    features: {
      miniTag: <>ESPECIALIDADE</>,
      FirstPart: <span>Soluções em</span>,
      Destaque: <span className="italic font-light">Direito de Família</span>,
      SecondPart: <span></span>,
      subtitle: (
        <>
          Orientação segura para resolver conflitos familiares com equilíbrio.
        </>
      ),
      imgFeatures: imgFeatures,
      alt: "Imagem ilustrativa da Features",
      titleMessageFeature: <>100%</>,
      subtitleMessageFeature: <>direito de famíla</>,
      cards: {
        card1: {
          title: <>Divórcio e Dissolução de União</>,
          subtitle: (
            <>
              Divórcio consensual <br />
              Divórcio litigioso <br />
              Divórcio extrajudicial em cartório <br />
              Dissolução de união estável <br />
              Reconhecimento e dissolução de união estável <br />
              Partilha de bens <br />
              Definição de regime de bens
            </>
          ),
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
          icon: <Briefcase />,
          buttonLabelModal: "Fale Conosco",
          buttonLabel: "Saiba Mais",
        },

        card2: {
          title: <>Pensão Alimentícia</>,
          subtitle: (
            <>
              Fixação de pensão alimentícia <br />
              Revisão de pensão alimentícia <br />
              Exoneração de pensão <br />
              Execução de alimentos <br />
              Cobrança de pensão em atraso
            </>
          ),
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
          icon: <User />,
          buttonLabelModal: "Fale Conosco",
          buttonLabel: "Saiba Mais",
        },

        card3: {
          title: <>Guarda e Convivência</>,
          subtitle: (
            <>
              Guarda unilateral <br />
              Guarda compartilhada <br />
              Regulamentação de visitas <br />
              Alteração de guarda <br />
              Mediação de conflitos familiares <br />
              Ações relacionadas à alienação parental
            </>
          ),
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
          icon: <Scale />,
          buttonLabelModal: "Fale Conosco",
          buttonLabel: "Saiba Mais",
        },

        card4: {
          title: <>Filiação e Paternidade</>,
          subtitle: (
            <>
              Investigação de paternidade <br />
              Reconhecimento de paternidade <br />
              Negatória de paternidade <br />
              Inclusão ou exclusão de nome no registro civil <br />
              Multiparentalidade
            </>
          ),
          description: (
            <div>
              A_Definir
              <br />
              A_Definir
              <br />
            </div>
          ),
          icon: <Gavel />,
          buttonLabelModal: "Fale Conosco",
          buttonLabel: "Saiba Mais",
        },

        card5: {
          title: <>Medidas de Proteção Familiar</>,
          subtitle: (
            <>
              Medidas protetivas de urgência <br />
              Atuação em casos de violência doméstica <br />
              Acompanhamento em processos relacionados à Lei Maria da Penha
            </>
          ),
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
          icon: <Users />,
          buttonLabelModal: "Fale Conosco",
          buttonLabel: "Saiba Mais",
        },

        card6: {
          title: <>Planejamento Familiar e Patrimonial</>,
          subtitle: (
            <>
              Pactos antenupciais <br />
              Contratos de convivência <br />
              Definição de regime de bens <br />
              Planejamento patrimonial familiar <br />
              Orientação preventiva para proteção de patrimônio
            </>
          ),
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
          icon: <MessageSquare />,
          buttonLabelModal: "Fale Conosco",
          buttonLabel: "Saiba Mais",
        },

        card7: {
          title: <>Outras Demandas Familiares</>,
          subtitle: (
            <>
              Autorização judicial para viagem de menores <br />
              Suprimento de consentimento <br />
              Interdição e curatela <br />
              Tutela e guarda de menores
            </>
          ),
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
          icon: <Shield />,
          buttonLabelModal: "Fale Conosco",
          buttonLabel: "Saiba Mais",
        },

        card8: {
          title: <>Inventário</>,
          subtitle: (
            <>
              Inventário judicial <br />
              Inventário extrajudicial em cartório <br />
              Acompanhamento completo do processo de inventário <br />
              Partilha de bens entre herdeiros <br />
              Regularização de bens do espólio
            </>
          ),
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
          icon: <Briefcase />,
          buttonLabelModal: "Fale Conosco",
          buttonLabel: "Saiba Mais",
        },

        card9: {
          title: <>Planejamento Sucessório</>,
          subtitle: (
            <>
              Estruturação de planejamento sucessório <br />
              Organização patrimonial familiar <br />
              Estratégias para prevenção de conflitos entre herdeiros <br />
              Orientação sobre transmissão patrimonial
            </>
          ),
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
          icon: <Scale />,
          buttonLabelModal: "Fale Conosco",
          buttonLabel: "Saiba Mais",
        },

        card10: {
          title: <>Testamentos</>,
          subtitle: (
            <>
              Elaboração de testamento <br />
              Orientação sobre modalidades de testamento <br />
              Cumprimento e registro de testamento <br />
              Ações envolvendo validade ou contestação de testamento
            </>
          ),
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
          icon: <User />,
          buttonLabelModal: "Fale Conosco",
          buttonLabel: "Saiba Mais",
        },

        card11: {
          title: <>Ações Judiciais Sucessórias</>,
          subtitle: (
            <>
              Sobrepartilha de bens <br />
              Petição de herança <br />
              Anulação de partilha <br />
              Reconhecimento de direitos sucessórios <br />
              Defesa em conflitos entre herdeiros
            </>
          ),
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
          icon: <MessageSquare />,
          buttonLabelModal: "Fale Conosco",
          buttonLabel: "Saiba Mais",
        },

        card12: {
          title: <>Outras Demandas Sucessórias</>,
          subtitle: (
            <>
              Nomeação e substituição de inventariante <br />
              Regularização de bens não incluídos em inventário <br />
              Orientação para venda de bens do espólio <br />
              Atuação em disputas patrimoniais entre herdeiros
            </>
          ),
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
          icon: <Shield />,
          buttonLabelModal: "Fale Conosco",
          buttonLabel: "Saiba Mais",
        },
      },
      ctaButtonText: <>Falar agora conosco</>,
    },
    cardsSection: {
      miniTag: <>A_Definir</>,
      title: <>A_Definir</>,
      subtitle: <>A_Definir</>,
      cards: {
        card1: {
          title: <>A_Definir</>,
          icon: <>A_Definir</>,
          link: "",
        },
        card2: {
          title: <>A_Definir</>,
          icon: <>A_Definir</>,
          link: "",
        },
        card3: {
          title: <>A_Definir</>,
          icon: <>A_Definir</>,
          link: "",
        },
        card4: {
          title: <>A_Definir</>,
          icon: <>A_Definir</>,
        },
        card5: {
          title: <>A_Definir</>,
          icon: <>A_Definir</>,
        },
      },
      fraseText: (
        <>
          <p>A_Definir</p> <br />
          <p>
            A_Definir <span className="font-bold">A_Definir</span>.
          </p>
        </>
      ),
      ctaButtonText: "A_Definir",
    },
    maps: {
      minitag: <>A_Definir</>,
      title: <>A_Definir</>,
      subtitle: <>A_Definir</>,
      embedsrc: <>A_Definir</>,
    },
    about: {
      imagem: {
        img: aboutImg,
        alt: "Imagem ilustrativa da Seção Sobre",
      },
      miniTag: <>QUEM É A DRA. TACIANE MARTINS</>,
      FirstPart: <span> Nossa</span>,
      Destaque: <span className="italic font-light"> Trajetória</span>,
      SecondPart: <span></span>,
      subtitle: <></>,
      paragraph: (
        <div>
          O T. Martins Advocacia nasceu com um propósito claro: ajudar pessoas a
          enfrentarem momentos difíceis na família com orientação segura e
          decisões bem conduzidas.
          <br /> <br />
          Fundado pela advogada Taciane Martins, o escritório atua com foco em
          resolver situações como divórcio, guarda e pensão de forma clara,
          estratégica e com o menor desgaste possível.
          <br /> <br />
          Cada caso é analisado com atenção, buscando caminhos que protejam seus
          direitos e tragam mais equilíbrio para sua vida, sem complicações
          desnecessárias.
          <br /> <br />
          Mais do que conduzir processos, o objetivo é oferecer segurança em
          decisões importantes, preservar relações sempre que possível e
          garantir que você tenha clareza em cada etapa.
        </div>
      ),
      benefits: {
        cards: {
          card1: {
            title: <>Orientação segura</>,
            description: (
              <>
                Análise cuidadosa do seu caso para indicar o melhor caminho em
                cada decisão.
              </>
            ),
            icon: (
              <>
                {" "}
                <CheckCircle2 className="w-5 h-5" />
              </>
            ),
          },
          card2: {
            title: <>Clareza em cada etapa</>,
            description: (
              <>
                Você entende exatamente o que está acontecendo, sem dúvidas ou
                surpresas.
              </>
            ),
            icon: (
              <>
                {" "}
                <CheckCircle2 className="w-5 h-5" />
              </>
            ),
          },
        },
      },
      ctaButtonText: <>Falar agora com o Escritório</>,
      buttonModalLabelAbout: "Continuar lendo",
      modal: (
        <p className="font-secondFont">
          A_Definir
          <br />
          <br />
          A_Definir
          <br />
          <br />
          A_Definir
          <br />
          <br />
          A_Definir
        </p>
      ),
      paragraphModalCta: "Entre em contato",
      ctaButtonAriaLabel: "Botão para entrar em contato",
    },
    ctaSection: {
      miniTag: <>FALE CONOSCO</>,
      title: <h1>Você não precisa passar por isso sozinho(a)</h1>,
      subtitle: (
        <div>
          <p className="mb-6 font-secondFont">
            Situações familiares exigem decisões importantes. Tenha orientação
            clara para agir com segurança e evitar mais desgaste.
          </p>
        </div>
      ),
      container: {
        topics: {
          topic1: <>A_Definir</>,
          topic2: <>A_Definir</>,
          topic3: <>A_Definir</>,
          topic4: <>A_Definir</>,
        },
      },
      ctaButtonText: <>Falar com a Advogada agora</>,
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
    },
    steps: {
      miniTag: <>Como funciona</>,
      FirstPart: <span> Entenda como vamos te ajudar</span>,
      Destaque: <span className="italic font-light"></span>,
      SecondPart: <span></span>,

      subtitle: (
        <>
          Um caminho simples e claro para resolver sua situação com mais
          segurança e tranquilidade.
        </>
      ),
      img: imgSteps,
      alt: "Imagem ilustrativa da Seção Passo a Passo",
      cards: {
        card1: {
          stepNumber: 1,
          cardTitle: <>Primeiro contato</>,
          cardDescription: (
            <>Você explica sua situação e recebe uma orientação inicial.</>
          ),
        },
        card2: {
          stepNumber: 2,
          cardTitle: <> Análise do caso</>,
          cardDescription: (
            <>Avaliamos seu caso com cuidado para indicar o melhor caminho.</>
          ),
        },
        card3: {
          stepNumber: 3,
          cardTitle: <>Definição da solução</>,
          cardDescription: (
            <>Você entende o que fazer e como seguir com segurança.</>
          ),
        },
        card4: {
          stepNumber: 4,
          cardTitle: <>Acompanhamento</>,
          cardDescription: (
            <>Seguimos com você em cada etapa até a resolução.</>
          ),
        },
      },
      ctaButtonText: <>Falar agora com a Advogada</>,
    },
    blog: {
      miniTag: <>A_Definir</>,
      title: <>A_Definir</>,
      subtitle: "",
      img: imgSteps,
      labelCards: "Ver mais",
      label: "Clique aqui para ver todas as matérias",
      blogLink: "", //sem "https://"
    },
    parceria: {
      miniTag: <>A_Definir</>,
      title: <>A_Definir</>,
      subtitle: <>A_Definir</>,
      images: [
        {
          role: "A_Definir",
          // img: logo1,
          alt: "Logomarca parceira",
          description: "A_Definir",
          name: "A_Definir",
        },
        {
          role: "A_Definir",
          // img: logo2,
          alt: "Logomarca parceira",
          description: "A_Definir",
          name: "A_Definir",
        },
        {
          role: "A_Definir",
          // img: logo3,
          alt: "Logomarca parceira",
          description: "A_Definir",
          name: "A_Definir",
        },
      ],
    },
    diferences: {
      miniTag: <>A_Definir</>,
      title: <>A_Definir</>,
      subtitle: <>A_Definir</>,
      cards: {
        card1: {
          icon: Check,
          text: <>A_Definir</>,
        },
        card2: {
          icon: Check,
          text: <>A_Definir</>,
        },
        card3: {
          icon: Check,
          text: <>A_Definir</>,
        },
      },
    },
    speed: {
      miniTag: <>Diferenciais do Atendimento</>,
      title: <>Um atendimento próximo em momentos delicados</>,
      subtitle: <>A_Definir</>,
      cards: {
        card1: {
          icon: Handshake,
          text: <>Escuta atenta e sem julgamentos</>,
        },
        card2: {
          icon: Users,
          text: <>Orientação clara em cada passo</>,
        },
        card3: {
          icon: ShieldCheck,
          text: <>Soluções que evitam desgaste</>,
        },
        card4: {
          icon: MessageSquare,
          text: <>Atendimento personalizado</>,
        },
      },
      textFooter: <></>,
    },
    authority: {
      miniTag: <>A_Definir</>,
      title: <>A_Definir</>,
      subtitle: <>A_Definir</>,
      cards: {
        card1: {
          title: <>A_Definir</>,
          paragraph: <>A_Definir</>,
        },
        card2: {
          title: <>A_Definir</>,
          paragraph: <>A_Definir</>,
        },
        card3: {
          title: <>A_Definir</>,
          paragraph: <>A_Definir</>,
        },
        card4: {
          title: <>A_Definir</>,
          paragraph: <>A_Definir</>,
        },
      },
      ctaButtonText: <>A_Definir</>,
    },
    faq: {
      miniTag: <>TIRE SUAS DÚVIDAS</>,
      title: <>Perguntas Frequentes</>,
      subtitle: <>Confira as perguntas abaixo para esclarecer suas dúvidas.</>,
      questions: {
        question1: {
          question: (
            <>Vou precisar ir pra justiça ou dá pra resolver mais rápido?</>
          ),
          answer: (
            <>
              Depende do caso. Sempre que possível, buscamos soluções por
              acordo, que são mais rápidas e menos desgastantes. Mas, quando
              necessário, o processo judicial é conduzido com segurança para
              proteger seus direitos.
            </>
          ),
        },
        question2: {
          question: <>Quanto tempo leva um divórcio?</>,
          answer: (
            <>
              O tempo varia conforme a situação. Casos consensuais podem ser
              resolvidos mais rapidamente, enquanto situações com conflito podem
              levar mais tempo. Cada etapa é conduzida com foco em agilidade e
              segurança.
            </>
          ),
        },
        question3: {
          question: <>Posso perder a guarda do meu filho?</>,
          answer: (
            <>
              A guarda é definida com base no que é melhor para a criança. Cada
              caso é analisado individualmente, e o objetivo é garantir
              equilíbrio, convivência e proteção para os filhos.
            </>
          ),
        },
        question4: {
          question: <>Não sei nem por onde começar, o que eu faço?</>,
          answer: (
            <>
              O primeiro passo é entender sua situação. Com uma orientação
              clara, você consegue visualizar o melhor caminho e tomar decisões
              com mais segurança, sem agir por impulso.
            </>
          ),
        },
      },

      paragraph: "Clique aqui caso tenha mais dúvidas",
    },
    team: {
      miniTag: <>SÓCIOS</>,
      title: <>Quem são os sócios?</>,
      subtitle: (
        <>
          Especialistas que lutam pelos seus direitos com experiência e
          estratégia.
        </>
      ),
      cards: {
        card1: {
          // img: img1,
          name: <>Alexandre Pascoal Marques - OAB/SP 270.924</>,
          role: <>Sócio e Diretor Executivo</>,
          description: (
            <>
              Responsável pelas áreas administrativa e comercial do escritório,
              bem como pela gestão estratégica e desenvolvimento de negócios.
              <br />
              <br />
              Alexandre atua na área trabalhista desde os estágios na faculdade
              de Direito, tendo consolidado sua carreira na defesa dos direitos
              do trabalhador.
            </>
          ),
        },
        card2: {
          // img: img2,
          name: <>Flávia Dyandra - OAB/SP 352.455</>,
          role: <>Sócia e Diretora Operacional</>,
          description: (
            <>
              Responsável pela gestão administrativa, financeira e operacional
              do escritório, além da supervisão dos processos internos e
              organização estratégica.
              <br />
              <br />
              Flávia possui experiência com o setor de transportes desde antes
              de ingressar na faculdade de Direito, contribuindo para a
              compreensão das particularidades enfrentadas por trabalhadores do
              transporte rodoviário.
            </>
          ),
        },
      },
      ctaButtonText: <>A_Definir</>,
    },
    footer: {
      copyrightLine: ` ${currentYear} - ${infos.name} - Todos os direitos reservados`,
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
      midSectionName: "Até mais",
      footerText:
        "Agradecemos sua visita! Esperamos que em breve você se torne nosso cliente e desfrute de todos os benefícios que oferecemos.",
      footerSocialText: "Siga a gente nas redes sociais:",
      footerNavegacaoText: "NAVEGAÇÃO",
      desenvolvidoPor: "Desenvolvido com excelência por Paper Street",
      privacidade: (
        <div class="phone3:max-w-3xl mx-auto tablet1:px-6 text-gray-900 leading-relaxed font-secondFont">
          <h1 class="text-3xl font-bold mb-6">Política de Privacidade</h1>

          <h2 class="text-xl font-semibold mb-3">Informações Importantes</h2>

          <p class="mb-4">
            Esta Política de Privacidade descreve como coletamos, utilizamos,
            armazenamos e compartilhamos informações pessoais de usuários de
            nossos serviços, em conformidade com a Lei Geral de Proteção de
            Dados (LGPD) - Lei nº 13.709/2018.
          </p>

          <p class="mb-4">
            Nos comprometemos a proteger a privacidade e os dados pessoais de
            todos os usuários, garantindo transparência e segurança em todas as
            etapas de tratamento.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Definições</h2>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>
              <strong>Autoridade Nacional de Proteção de Dados (ANPD):</strong>{" "}
              órgão responsável pela fiscalização e aplicação da LGPD.
            </li>

            <li>
              <strong>Base Legal:</strong> fundamento jurídico que autoriza o
              tratamento de dados pessoais (como consentimento, execução de
              contrato, obrigação legal ou legítimo interesse).
            </li>

            <li>
              <strong>Consentimento:</strong> manifestação livre e informada do
              titular que autoriza o tratamento de seus dados pessoais para uma
              finalidade específica.
            </li>

            <li>
              <strong>Dado Pessoal:</strong> qualquer informação que identifique
              ou possa identificar uma pessoa natural (ex.: nome, CPF, e-mail,
              telefone, IP, localização, etc.).
            </li>

            <li>
              <strong>Dado Pessoal Sensível:</strong> dado que revele origem
              racial, convicção religiosa, opinião política, dado referente à
              saúde, vida sexual, dado genético ou biométrico.
            </li>

            <li>
              <strong>Titular:</strong> pessoa natural a quem se referem os
              dados pessoais tratados.
            </li>

            <li>
              <strong>Tratamento:</strong> qualquer operação realizada com dados
              pessoais, como coleta, armazenamento, uso, compartilhamento ou
              exclusão.
            </li>

            <li>
              <strong>Legítimo Interesse:</strong> quando o tratamento é
              necessário para atender a interesses legítimos do controlador, sem
              ferir direitos e liberdades fundamentais do titular.
            </li>

            <li>
              <strong>Segurança:</strong> medidas técnicas e administrativas
              adotadas para proteger os dados de acessos não autorizados,
              vazamentos ou destruição acidental.
            </li>
          </ul>

          <p class="mb-4">
            <strong>Transparência:</strong> direito do titular de receber
            informações claras e acessíveis sobre o uso de seus dados.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Direitos dos Titulares</h2>

          <p class="mb-3">Os titulares de dados pessoais têm direito a:</p>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>Confirmar se seus dados são tratados;</li>
            <li>
              Acessar, corrigir, atualizar ou solicitar a exclusão de seus
              dados;
            </li>
            <li>Revogar o consentimento a qualquer momento;</li>
            <li>Solicitar portabilidade ou anonimização dos dados;</li>
            <li>Opor-se ao tratamento quando considerar irregular.</li>
          </ul>

          <p class="mb-4">
            As solicitações podem ser feitas por meio dos canais de contato
            disponibilizados pela empresa.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">
            Coleta e Uso de Dados Pessoais
          </h2>

          <p class="mb-3">Podemos coletar dados pessoais por meio de:</p>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>
              Formulários de contato e cadastro (nome, e-mail, telefone,
              endereço, CPF, entre outros);
            </li>
            <li>
              Navegação no site, incluindo endereço IP, localização geográfica,
              tipo de navegador, sistema operacional e tempo de visita;
            </li>
            <li>
              Transações financeiras, quando houver compra de produtos ou
              contratação de serviços;
            </li>
            <li>
              Interações com o suporte ou atendimento, para aprimorar a
              experiência do usuário e a qualidade do serviço.
            </li>
          </ul>

          <p class="mb-3">Esses dados são utilizados para:</p>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>Operar, manter e melhorar nossos serviços;</li>
            <li>Personalizar a experiência do usuário;</li>
            <li>Cumprir obrigações legais e contratuais;</li>
            <li>
              Realizar comunicações e campanhas de marketing, mediante
              consentimento;
            </li>
            <li>
              Garantir segurança, prevenção a fraudes e cumprimento de
              exigências legais.
            </li>
          </ul>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">
            Cookies e Tecnologias de Rastreamento
          </h2>

          <p class="mb-4">
            Nosso site pode utilizar cookies e tecnologias semelhantes para
            melhorar a navegação e compreender como os usuários interagem com o
            conteúdo. O uso de cookies não estritamente necessários dependerá do
            consentimento do usuário, que poderá ser configurado ou revogado a
            qualquer momento em seu navegador.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">
            Compartilhamento e Transferência de Dados
          </h2>

          <p class="mb-3">Podemos compartilhar dados pessoais com:</p>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>
              Parceiros e prestadores de serviço, que auxiliam na operação
              técnica, hospedagem, marketing ou suporte;
            </li>
            <li>Autoridades públicas, quando houver obrigação legal;</li>
            <li>Instituições financeiras, em transações de pagamento.</li>
          </ul>

          <p class="mb-4">
            Em caso de transferência internacional de dados, serão adotadas
            medidas para garantir que o tratamento esteja em conformidade com a
            LGPD e com níveis adequados de proteção.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">
            Armazenamento e Retenção dos Dados
          </h2>

          <p class="mb-4">
            Os dados pessoais são armazenados apenas pelo tempo necessário para
            cumprir as finalidades para as quais foram coletados ou conforme
            exigido por lei. Após o período de retenção, os dados são eliminados
            de forma segura, respeitando normas técnicas e regulatórias.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Segurança da Informação</h2>

          <p class="mb-4">
            Adotamos medidas técnicas, físicas e administrativas adequadas para
            proteger os dados pessoais contra acesso não autorizado, perda,
            alteração, destruição ou divulgação indevida. Embora nenhuma medida
            seja totalmente infalível, buscamos constantemente aprimorar nossas
            práticas de segurança.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Alterações nesta Política</h2>

          <p class="mb-4">
            Esta Política de Privacidade poderá ser atualizada periodicamente,
            conforme alterações legais ou melhorias em nossos processos.
            Recomendamos que o usuário revise este documento regularmente para
            manter-se informado sobre como protegemos suas informações.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Contato</h2>

          <p>
            Em caso de dúvidas, solicitações ou exercício de direitos
            relacionados a dados pessoais, entre em contato pelo canal de
            comunicação indicado no site.
          </p>
        </div>
      ),
      pontos: {
        ponto1: "Profissionalismo",
        ponto2: "Experiência",
        ponto3: "Resultados",
      },
    },
    // socios: {
    //   socio1: {
    //     nome: <>A_Definir</>,
    //     rota: <>A_Definir</>,
    //     sobrenome: '',
    //     telefone: <>A_Definir</>,
    //     whatsapp: <>A_Definir</>,
    //     email: '',
    //     social: {
    //       instagram: '',
    //       facebook: '',
    //       linkedin: '',
    //       x: '',
    //       tiktok: '',
    //     },
    //   },
    //   socio2: {
    //     nome: <>A_Definir</>,
    //     rota: <>A_Definir</>,
    //     sobrenome: '',
    //     telefone: '00000000000',
    //     whatsapp: '00000000000',
    //     email: '',
    //     social: {
    //       instagram: '',
    //       facebook: '',
    //       linkedin: '',
    //       x: '',
    //       tiktok: '',
    //     },
    //   },
    //   socio4: {
    //     nome: <>A_Definir</>,
    //     rota: <>A_Definir</>,
    //     sobrenome: '',
    //     telefone: <>A_Definir</>,
    //     whatsapp: <>A_Definir</>,
    //     email: '',
    //     social: {
    //       instagram: '',
    //       facebook: '',
    //       linkedin: '',
    //       x: '',
    //       tiktok: '',
    //     },
    //   },
    // },
    links: {
      instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
      instagramSecondario: `https://www.instagram.com/${infos.instagramProfileSecundario}/`,
      ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
      phoneSecundario: `https://wa.me/+55${infos.phoneSecundario.ddd}${infos.phoneSecundario.firstPart}${infos.phoneSecundario.secondPart}?text=${infos.whatsappDefaultMessage}`,
      phoneTerciario: `https://wa.me/+55${infos.phoneTerciario.ddd}${infos.phoneTerciario.firstPart}${infos.phoneTerciario.secondPart}?text=${infos.whatsappDefaultMessage}`,
      facebook: `https://www.facebook.com/${infos.facebookProfile}`,
      x: `https://x.com/${infos.x}`,
      linkedin: `https://www.linkedin.com/in/${infos.linkeDinProfile}`,
      tiktok: `https://www.tiktok.com/@${infos.tiktokProfile}/`,
      youtube: `https://www.youtube.com/@${infos.youtubeProfile}/`,
    },
    infos: {
      phone: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
      phoneSecundario: `(${infos.phoneSecundario.ddd}) ${infos.phoneSecundario.firstPart}-${infos.phoneSecundario.secondPart}`,
      phoneTerciario: `(${infos.phoneTerciario.ddd}) ${infos.phoneTerciario.firstPart}-${infos.phoneTerciario.secondPart}`,
      email: `${infos.email}@${infos.domain}`,
      emailSecundario: `${infos.emailSecundario}`,
      adress: infos.endereco,
      adressSecundario: infos.enderecoSecundario,
      officeHours: infos.expediente,
      year: currentYear,
      footerexpediente: infos.expediente,
      obsFooter: infos.obs,
      footerNavegacaoText: "NAVEGAÇÃO",
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
    },
    svgs: {
      wpp: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
        </svg>
      ),
    },
  },
};

export const abstractions = {
  titleModal: <strong>{content.texts.about.title}</strong>,
  subtitleModal: <strong>{content.texts.about.subtitle}</strong>,
};

export default content;
