"use client";

import { useState } from "react";
import Link from "next/link";
import { Brand } from "./brand";

const questions = [
  { title: "O que você quer construir?", subtitle: "Escolha o ponto de partida. Podemos ajustar tudo depois.", options: ["Sistema sob medida", "Automação", "Site ou experiência", "Aplicativo", "Assistente de WhatsApp", "Ainda estou explorando"] },
  { title: "O que precisa mudar?", subtitle: "Qual é o objetivo mais importante deste projeto?", options: ["Organizar uma operação", "Ganhar tempo", "Criar um produto", "Melhorar a experiência do cliente", "Conectar ferramentas e dados", "Outro desafio"] },
  { title: "Em que momento você está?", subtitle: "Queremos entender de onde vamos partir.", options: ["Tenho uma ideia inicial", "Já tenho um escopo", "Tenho algo funcionando", "Preciso evoluir uma solução existente"] },
  { title: "Quando imagina começar?", subtitle: "Uma estimativa já ajuda a planejar a conversa.", options: ["O quanto antes", "Nas próximas semanas", "Nos próximos meses", "Ainda sem data"] },
];

export function ProjectBrief() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const finalStep = questions.length;
  const complete = step > finalStep;
  const current = questions[step];

  function choose(value: string) {
    const next = [...answers];
    next[step] = value;
    setAnswers(next);
    setStep(step + 1);
  }

  function send() {
    if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())) return;
    const body = `Olá, Centini Tech! Quero conversar sobre um projeto.\n\nNome: ${name.trim()}\nEmail: ${email.trim()}\nO que quero construir: ${answers[0]}\nObjetivo: ${answers[1]}\nMomento: ${answers[2]}\nPrazo: ${answers[3]}\nDetalhes: ${details.trim() || "Não informado"}`;
    window.open(`https://wa.me/5511941262352?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
    setStep(finalStep + 1);
  }

  return (
    <main className="brief">
      <div className="brief__glow" />
      <header className="brief__header"><Link href="/" aria-label="Voltar ao site"><Brand compact /></Link><span>UM BOM PROJETO COMEÇA COM UMA CONVERSA</span><Link href="/" className="brief__close" aria-label="Fechar">×</Link></header>
      <div className="brief__progress" role="progressbar" aria-valuemin={0} aria-valuemax={finalStep + 1} aria-valuenow={Math.min(step, finalStep + 1)}><span style={{ width: `${Math.min((step / (finalStep + 1)) * 100, 100)}%` }} /></div>
      <div className="brief__body" key={step}>
        {complete ? <div className="brief__content"><span className="brief__kicker">PRONTO PARA CONVERSAR</span><h1>Seu resumo está <em>preparado.</em></h1><p>O WhatsApp foi aberto com suas respostas. Revise a mensagem e toque em enviar para começarmos a conversa. Se a janela não abriu, permita pop-ups e tente novamente.</p><Link href="/" className="button button--primary">Voltar ao site <span aria-hidden="true">↗</span></Link></div> : step === finalStep ? <div className="brief__content"><span className="brief__kicker">05 / 05 — CONTATO</span><h1>Vamos tirar isso <em>do papel?</em></h1><p>Deixe seus dados para preparar a primeira conversa. A mensagem será aberta no WhatsApp para você revisar e enviar.</p><div className="brief__fields"><label>Seu nome<input value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" placeholder="Como podemos chamar você?" /></label><label>Seu e-mail<input value={email} onChange={(event) => setEmail(event.target.value)} type="email" autoComplete="email" placeholder="voce@empresa.com" /></label><label>Algo mais que devemos saber? <span>(opcional)</span><textarea value={details} onChange={(event) => setDetails(event.target.value)} placeholder="Conte um pouco sobre a ideia ou desafio" rows={3} /></label></div><button className="button button--primary" type="button" onClick={send} disabled={!name.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())}>Abrir WhatsApp <span aria-hidden="true">↗</span></button></div> : <div className="brief__content"><span className="brief__kicker">0{step + 1} / 05 — SEU PROJETO</span><h1>{current.title.split(" ").slice(0, -1).join(" ")} <em>{current.title.split(" ").slice(-1)}</em></h1><p>{current.subtitle}</p><div className="brief__options">{current.options.map((option, index) => <button type="button" onClick={() => choose(option)} key={option}><span>0{index + 1}</span>{option}<b aria-hidden="true">↗</b></button>)}</div></div>}
      </div>
      <footer className="brief__footer"><button type="button" disabled={step === 0 || complete} onClick={() => setStep(step - 1)}>← VOLTAR</button><span>CENTINI TECH / INICIAR PROJETO</span><span>{String(Math.min(step + 1, finalStep + 1)).padStart(2, "0")} / 05</span></footer>
    </main>
  );
}

