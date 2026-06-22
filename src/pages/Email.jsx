// src/components/Email.jsx

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Email() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const SERVICE_ID = "service_dl95kpt";
  const TEMPLATE_ID = "template_nnydson";
  const PUBLIC_KEY = "99WFYj86VYwFPjYQW";

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setSent(true);
      formRef.current.reset();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);

      alert(
        "Não foi possível enviar sua pré-inscrição agora. Tente novamente ou entre em contato pelo WhatsApp."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div
      id="formulario-inscricao"
      className="mx-auto max-w-4xl scroll-mt-10 rounded-[2rem] bg-white p-6 shadow-2xl md:p-10"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-[#23158f]">
          Formulário de inscrição
        </p>

        <h2 className="text-4xl font-black leading-tight text-[#080b2b] md:text-5xl">
          Preencha seus dados para realizar a pré-inscrição
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Após o envio, a equipe entrará em contato para confirmar a inscrição e
          fornecer as informações para contratação formalizada.
        </p>
      </div>

      {sent ? (
        <div className="p-6 mt-10 text-center border rounded-2xl border-emerald-200 bg-emerald-50">
          <h3 className="text-2xl font-black text-emerald-700">
            Sua pré-inscrição foi recebida com sucesso.
          </h3>

          <p className="mt-3 text-slate-700">
            Em breve nossa equipe entrará em contato para confirmar a inscrição
            e fornecer as informações para contratação formalizada.
          </p>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="mt-10 space-y-8">
          <input
            type="hidden"
            name="curso"
            value="Licitações na Prática - Gestão Contratual e Procedimentos Sancionadores"
          />

          <input type="hidden" name="data_curso" value="10 e 11 de setembro" />

          <input
            type="hidden"
            name="local_curso"
            value="Hotel Deville - Maringá/PR"
          />

          <input type="hidden" name="page_url" value={window.location.href} />

          <div>
            <h3 className="mb-5 text-xl font-black text-[#080b2b]">
              Dados pessoais
            </h3>

            <div className="grid gap-5 md:grid-cols-2">
              <Input name="nome_completo" label="Nome completo" required />

              <Input name="whatsapp" label="Nº WhatsApp" type="tel" required />

              <Input
                name="email"
                label="E-mail"
                type="email"
                required
                className="md:col-span-2"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-black text-[#080b2b]">
              Dados institucionais
            </h3>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <label
                  htmlFor="orgao_oficio"
                  className="block mb-2 text-sm font-bold tracking-wide uppercase text-slate-600"
                >
                  Órgão ou ofício onde trabalha
                </label>

                <select
                  id="orgao_oficio"
                  name="orgao_oficio"
                  defaultValue=""
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-[#23158f] focus:ring-4 focus:ring-[#23158f]/10"
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Prefeitura Municipal">
                    Prefeitura Municipal
                  </option>
                  <option value="Câmara Municipal">Câmara Municipal</option>
                  <option value="Autarquia">Autarquia</option>
                  <option value="Fundação Pública">Fundação Pública</option>
                  <option value="Iniciativa Privada">Iniciativa Privada</option>
                </select>
              </div>

              <Input name="municipio_uf" label="Município/UF" required />

              <Input name="cargo_funcao" label="Cargo/Função" required />
            </div>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-full bg-[#23158f] px-8 py-5 text-lg font-black uppercase text-white transition hover:bg-[#080b2b] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? "Enviando..." : "Enviar pré-inscrição"}
          </button>
        </form>
      )}
    </div>
  );
}

function Input({
  label,
  name,
  type = "text",
  required = false,
  className = "",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-bold tracking-wide uppercase text-slate-600"
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        required={required}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-[#23158f] focus:ring-4 focus:ring-[#23158f]/10"
      />
    </div>
  );
}
