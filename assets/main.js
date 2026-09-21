/* Carretos Praia Grande — scripts leves, sem dependências */
(function () {
  'use strict';
  var WHATSAPP = '5513981269443';

  /* ---- Eventos para Google Analytics 4 / Tag Manager (só disparam se o GTM/GA estiver instalado) ---- */
  function track(name) {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'cta_click', cta_name: name });
      if (typeof window.gtag === 'function') { window.gtag('event', 'cta_click', { cta_name: name }); }
    } catch (e) {}
  }
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-track]');
    if (el) { track(el.getAttribute('data-track')); }
  });

  /* ---- Ano do rodapé ---- */
  var y = document.getElementById('ano');
  if (y) { y.textContent = new Date().getFullYear(); }

  /* ---- Menu mobile ---- */
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      var a = e.target.closest('a');
      if (a) { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* ---- Submenu de serviços ---- */
  document.querySelectorAll('.dd-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      b.setAttribute('aria-expanded', String(b.getAttribute('aria-expanded') !== 'true'));
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.dd-btn').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    }
  });

  /* ---- Pré-seleciona o serviço no formulário ---- */
  document.querySelectorAll('[data-servico]').forEach(function (a) {
    a.addEventListener('click', function () {
      var s = document.getElementById('servico');
      if (s) { s.value = a.getAttribute('data-servico'); }
    });
  });

  /* ---- Formulário de orçamento -> mensagem pronta no WhatsApp ---- */
  var form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements, first = null;
      ['nome', 'origem', 'destino'].forEach(function (n) {
        var el = f[n], empty = !el.value.trim();
        el.classList.toggle('err', empty);
        if (empty && !first) { first = el; }
      });
      if (first) { first.focus(); return; }
      var data = f.quando.value ? f.quando.value.split('-').reverse().join('/') : 'a combinar';
      var msg = 'Olá! Vim pelo site e quero um orçamento.\n' +
        'Nome: ' + f.nome.value.trim() + '\n' +
        'Serviço: ' + f.servico.value + '\n' +
        'Retirada: ' + f.origem.value.trim() + '\n' +
        'Entrega: ' + f.destino.value.trim() + '\n' +
        'Data desejada: ' + data + '\n' +
        'O que vou transportar: ' + (f.detalhes.value.trim() || 'vou enviar fotos por aqui');
      track('form_enviar_whatsapp');
      window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    });
  }

  /* ---- Depoimentos ----
     Cole aqui apenas avaliações REAIS de clientes (com autorização). Exemplo:
     { texto: 'Chegou no horário e cuidou bem dos móveis.', autor: 'Nome S. – Bairro' }
     Enquanto a lista estiver vazia, o site mostra um convite para avaliar no Google. */
  var DEPOIMENTOS = [];
  var box = document.getElementById('reviews');
  if (box && DEPOIMENTOS.length) {
    box.innerHTML = '';
    DEPOIMENTOS.slice(0, 3).forEach(function (d) {
      var el = document.createElement('blockquote');
      el.className = 'review';
      var st = document.createElement('div'); st.className = 'st'; st.setAttribute('aria-hidden', 'true'); st.textContent = '★★★★★';
      var p = document.createElement('p'); p.textContent = '“' + d.texto + '”';
      var c = document.createElement('cite'); c.textContent = d.autor;
      el.appendChild(st); el.appendChild(p); el.appendChild(c);
      box.appendChild(el);
    });
  }
})();
