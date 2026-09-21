# Carretos Praia Grande — Guia de publicação e SEO

## 1. Como publicar
1. Envie **todo o conteúdo desta pasta** para a raiz da hospedagem (public_html), substituindo o site antigo. Inclua o arquivo oculto `.htaccess`.
2. Confirme que o domínio abre em `https://carretospraiagrande.com.br/` (o `.htaccess` já redireciona http→https e www→sem www).
3. Teste: `/robots.txt`, `/sitemap.xml` e uma página inexistente (deve abrir a página 404).
4. Se a hospedagem for Nginx (e não Apache), peça ao suporte para replicar as regras do `.htaccess`.

## 2. O que já está implementado
**Estrutura e conteúdo**
- Página inicial + 5 páginas de serviço com conteúdo próprio (fretes e carretos, pequenas mudanças, mudanças residenciais, mudanças comerciais, transporte de motos), política de privacidade e página 404.
- Um único H1 por página, hierarquia H2/H3, migalhas de pão (breadcrumbs) e links internos entre os serviços.
- URLs limpas, com a palavra-chave e a cidade: `/transporte-de-motos-praia-grande/`.
- FAQ na home (9 perguntas) e em cada serviço (3 perguntas).

**SEO técnico**
- Título e descrição únicos por página, canonical, hreflang pt-BR, robots, Open Graph e Twitter Card.
- Dados estruturados (JSON-LD): MovingCompany/LocalBusiness, WebSite, WebPage, Service, BreadcrumbList e FAQPage.
- `sitemap.xml`, `robots.txt`, `site.webmanifest`, favicon e ícones.
- Uma só versão do site (https, sem www, sem index.html) para evitar conteúdo duplicado.

**Velocidade (Core Web Vitals)**
- Imagens em WebP com largura e altura definidas (sem "pulos" de layout), lazy loading, imagem do topo com prioridade e pré-carregada.
- CSS e JS pequenos e sem bibliotecas; compressão e cache configurados no `.htaccess`.

**Conversão**
- Botões de WhatsApp e telefone em todas as telas, barra fixa no celular e formulário que envia a mensagem pronta ao WhatsApp.
- Eventos de clique prontos para o Google Analytics/Tag Manager (`cta_click`).

## 3. Depois de publicar (ordem sugerida)
1. **Google Search Console**: adicione o domínio, envie `https://carretospraiagrande.com.br/sitemap.xml` e peça a indexação da home e dos 5 serviços.
2. **Google Meu Negócio** (o passo que mais pesa na busca local):
   - Categoria principal: *Serviço de mudança* (ou a mais próxima disponível). Secundárias: *Serviço de frete*, *Transportador*.
   - Nome exatamente "Carretos Praia Grande", mesmo endereço e telefone do site, link para o site, horário real.
   - Adicione serviços, área de atendimento (cidades), fotos reais toda semana e responda a todas as avaliações.
   - Peça avaliação a cada cliente atendido, mandando o link direto pelo WhatsApp.
3. **Google Analytics 4**: crie a propriedade e cole o código no lugar indicado no `<head>` de cada página (há um comentário marcando). Marque `cta_click` como evento importante (conversão).
4. **Teste as páginas**: PageSpeed Insights (meta: 90+ no celular) e o Teste de Resultados Ricos do Google (para conferir os dados estruturados).
5. **Consistência (NAP)**: use o mesmo nome, endereço e telefone em Instagram, Facebook, Google e diretórios locais.

## 4. Mapa de palavras-chave
| Página | Palavra principal | Variações |
|---|---|---|
| Início | carretos em Praia Grande | frete Praia Grande, carreto Baixada Santista |
| /fretes-e-carretos-praia-grande/ | frete em Praia Grande | carreto, entrega de móveis, frete de eletrodomésticos, pequenos volumes |
| /pequenas-mudancas-praia-grande/ | pequenas mudanças Praia Grande | mudança de kitnet, mudança pequena, carreto para mudança |
| /mudancas-residenciais-praia-grande/ | mudança residencial Praia Grande | mudança de apartamento, mudança de casa |
| /mudancas-comerciais-praia-grande/ | mudança comercial Praia Grande | mudança de loja, mudança de escritório |
| /transporte-de-motos-praia-grande/ | transporte de motos Praia Grande | levar moto, frete de moto, moto para oficina |

## 5. Próximos conteúdos que fortalecem o SEO
- **Páginas por cidade** (Santos, São Vicente, Cubatão, Mongaguá, Itanhaém, Guarujá) e **por bairro**, cada uma com informações reais e fotos daquele local. Evite copiar o mesmo texto trocando só o nome: o Google trata isso como conteúdo repetido.
- **Blog** com dúvidas reais dos clientes: "quanto custa um carreto", "como embalar geladeira para mudança", "documentos para transportar moto", "mudança em condomínio: como funciona".
- **Vídeos curtos** do trabalho (Instagram/YouTube) incorporados nas páginas de serviço.

## 6. Pendências que dependem de você
- [ ] **Fotos reais** nas pastas `img/`: `servico-pequenas-mudancas.webp`, `servico-transporte-de-motos.webp`, `servico-fretes-e-entregas.webp` (640×400) e `galeria-1.webp` a `galeria-5.webp` (640×480). Enquanto não existirem, aparecem blocos azuis com ícones.
- [ ] **Depoimentos reais**: cole em `assets/main.js` (lista `DEPOIMENTOS`), com autorização do cliente. Não use avaliações inventadas: é proibido pelo Google e pelo Código de Defesa do Consumidor.
- [ ] **Horário de atendimento**: o site diz "segunda a domingo". Confirme (e, se for 24h, informe) para ajustarmos o site e o Google Meu Negócio.
- [ ] **Redes sociais**: envie os links de Instagram e Facebook para incluirmos no rodapé e nos dados estruturados (`sameAs`).
- [ ] **CNPJ** no rodapé e na política de privacidade (aumenta a confiança).
- [ ] **Revise a política de privacidade** com um profissional, principalmente se instalar o Analytics.
- [ ] **Coordenadas exatas** (latitude/longitude) do endereço, para o campo `geo` dos dados estruturados.
