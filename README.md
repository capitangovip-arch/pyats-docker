# HENICOM Website (Estático)

## Descrição do projeto
Website institucional estático da HENICOM, construído com **HTML + CSS + JavaScript vanilla**, focado em posicionamento enterprise para infraestrutura tecnológica em África.

Arquivos principais:
- `index.html` — homepage (hero, soluções, diferenciais, indústrias, parceiros, casos, insights, CTA final, footer).
- `webassets/styles.css` — estilos globais e componentes reutilizáveis.
- `webassets/videocontrols.css` — estilos do bloco de vídeo.
- `webassets/app.js` — ano dinâmico no rodapé + persistência do progresso do vídeo com IndexedDB.
- `webassets/angola-network.svg` e `webassets/angola-team.svg` — ilustrações institucionais.

---

## Resumo por ficheiro (por bloco lógico)

### 1) `index.html`
- **`<head>`**: define metadados básicos de SEO (`title`, `description`) e carrega `styles.css` + `videocontrols.css`.
- **Navegação (`.nav`)**: links para secções da homepage e páginas internas (`industries`, `about`, `contact`).
- **Hero (`.hero`)**: headline principal enterprise + CTA técnico.
- **“O que fazemos”**: posicionamento institucional focado em continuidade operacional.
- **“Soluções principais”**: cards com links para páginas de solução em `/solutions/`.
- **“Diferenciais”**: blocos de valor orientados a operação crítica e execução local.
- **“Indústrias atendidas”**: lista setorial (banca, indústria, educação, etc.).
- **Bloco visual + vídeo**:
  - duas imagens SVG com `loading="lazy"`;
  - vídeo com `id="demo-video"`, `controls`, `playsinline`, `preload="metadata"`.
- **Footer**: colunas com informações institucionais + ano dinâmico (`data-year`).
- **WhatsApp**: link `wa.me` com `target="_blank" rel="noopener noreferrer"`.

### 2) `webassets/styles.css`
- **Variáveis CSS (`:root`)**: paleta principal (azul petróleo, grafite, cyan, branco).
- **Layout base**: container, secções, grid, cards.
- **Componentes**: botões (`btn-primary`, `btn-cyan`), navegação sticky, hero, footer.
- **Responsividade**: breakpoint mobile em `@media(max-width:900px)`.

### 3) `webassets/videocontrols.css`
- Estiliza o bloco `.video-demo` e o `<video>` para manter consistência visual enterprise.

### 4) `webassets/app.js`
- **Bloco 1**: atualiza ano do footer automaticamente.
- **Bloco 2 (IndexedDB)**:
  - abre DB `henicom-media` e store `videoProgress`;
  - restaura `currentTime` do vídeo `#demo-video`;
  - guarda progresso no evento `timeupdate`;
  - limpa progresso no evento `ended`.

---

## Como executar localmente

### Opção A — Python
```bash
python -m http.server 8000
```
Abrir: `http://localhost:8000/index.html`

### Opção B — Node (http-server)
```bash
npx http-server . -p 8000
```
Abrir: `http://localhost:8000/index.html`

> Evite abrir com `file://` quando testar comportamentos de vídeo/IndexedDB.

---

## Como testar a funcionalidade do vídeo (IndexedDB)

1. Abra `index.html` via servidor local.
2. No bloco “Demonstração técnica”, carregue um ficheiro de vídeo real no `<source>` (ou substitua por URL válida).
3. Reproduza alguns segundos e recarregue a página.
4. Verifique se o vídeo retoma próximo do ponto anterior.
5. Deixe o vídeo terminar e recarregue.
6. Verifique que o progresso foi limpo.

### Limpar manualmente progresso do vídeo
No DevTools Console:
```js
indexedDB.deleteDatabase('henicom-media')
```

---

## Links/endereços a validar (QA funcional)

- `mailto:contact@henicom.com` (abre cliente de email)
- `tel:+244926151340` (em dispositivos compatíveis)
- `https://wa.me/244926151340?...` (abre WhatsApp)

Checklist rápido:
- [ ] Links internos navegam sem 404.
- [ ] WhatsApp abre em nova aba com segurança (`noopener noreferrer`).
- [ ] Footer mostra ano atual automaticamente.
- [ ] Layout mobile sem sobreposição.

---

## Compatibilidade

- **IndexedDB**: suportado nos browsers modernos (Chrome, Edge, Firefox, Safari recentes).
- Em navegadores sem IndexedDB, o site continua funcional; apenas a restauração de progresso do vídeo não é aplicada.

---

## TODOs recomendados (prioridade)

### Alta
1. Definir um ficheiro de vídeo real otimizado (MP4/H.264) e poster.
2. Adicionar fallback explícito para browsers sem IndexedDB (exibir aviso curto).
3. Melhorar acessibilidade: landmarks ARIA, foco visível e contraste em todos os botões.

### Média
4. Comprimir SVGs (`svgo`) e ativar cache longa para assets estáticos.
5. Criar página de erro 404 customizada.
6. Adicionar sitemap.xml e robots.txt para SEO técnico.

### Baixa
7. Evoluir para componentes de template estático (partials) para reduzir duplicação entre páginas.

---

## Prompt curto para gerar imagens profissionais (uso em outro modelo)
Cria 3 imagens hero institucionais para uma empresa africana de infraestrutura tecnológica chamada HENICOM. O estilo deve ser enterprise premium, com paleta azul petróleo, grafite, branco e cyan discreto. Evita visual B2C. Mostra ambientes de conectividade crítica, cloud híbrida, NOC/datacenter e equipas técnicas africanas em contexto profissional real.

As imagens devem transmitir continuidade operacional, segurança, escalabilidade e modernização sustentável. Composição limpa, iluminação corporativa, detalhes de dashboards e redes, formato 16:9 (1920x1080), espaço negativo para headline e CTA no lado esquerdo.
