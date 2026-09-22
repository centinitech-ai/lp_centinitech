# Centini Tech — site institucional

Site independente em Next.js para apresentar a Centini Tech, suas frentes de atuação e soluções.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` para a página institucional e `/iniciar` para o briefing interativo.

## Estrutura

- `app/page.tsx`: página institucional com rolagem.
- `app/iniciar/page.tsx`: entrada do briefing interativo.
- `components/brand.tsx`: símbolo vetorial e assinatura Centini Tech.
- `components/intro.tsx`: abertura cinematográfica, exibida uma vez por sessão.
- `components/neural-field.tsx`: visualização neural 3D com Three.js.
- `components/project-brief.tsx`: fluxo de qualificação que prepara um e-mail de contato.

## Antes da publicação definitiva

- Validar textos e identidade visual finais.
- Configurar domínio da Centini Tech no projeto Vercel separado da plataforma.

O briefing abre o WhatsApp comercial com um resumo preenchido. O visitante revisa e envia a mensagem; nenhum dado é salvo ou enviado pelo site automaticamente.

