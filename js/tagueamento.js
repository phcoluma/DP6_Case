// Importando analytics.js
// conforme documentação na página https://developers.google.com/analytics/devguides/collection/analyticsjs
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

// Definindo a propriedade receberá os dados com o ID enviado na documentação
ga('create', 'UA-12345-6', 'auto');

// Evento para envio de Visualização de Página segundo a página https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
ga('send', 'pageview', location.pathname); 


// Função para o item "Contato" do menu
function Contato() { // onclick="Contato()"
  ga('send', 'event', {
    eventCategory: 'menu',
    eventAction: 'entre_em_contato',
    eventLabel: 'link_externo'
  });
}

// Função para o item "Download PDF" do menu
function DownloadPdf() { // onclick="downloadPdf()"
  ga('send', 'event', {
    eventCategory: 'menu',
    eventAction: 'download_pdf',
    eventLabel: 'download_pdf'
  });
}

// Função para o evento botão Lorem analise.html
function eventoLorem() { // onclick="eventoLorem" 
  ga('send', 'event', {
    eventCategory: 'analise',
    eventAction: 'ver_Mais',
    eventLabel: 'Lorem'
  });
}

// Função para o evento botão Ipsum analise.html
function eventoIpsum() { //onclick="eventoIpsum"
  ga('send', 'event', {
    eventCategory: 'analise',
    eventAction: 'ver_Mais',
    eventLabel: 'Ipsum'
  });
}

//Função para o evento botão Dolor analise.html
function eventoDolor() { //onclick="eventoDolor"
  ga('send', 'event', {
    eventCategory: 'analise',
    eventAction: 'ver_Mais',
    eventLabel: 'Dolor'
  });
}

// Função para o evento de preenchimento de cada um dos campos do formulário
function FormCampoPreenche(campo) {
  ga('send', 'event', {
    eventCategory: 'contato',
    eventAction: campo,
    eventLabel: 'preencheu'
  });
}

// Função para o evento de envio do formulário
function FormEnvia() { // onclick="FormEnvia()" 
  ga('send', 'event', {
    eventCategory: 'contato',
    eventAction: 'enviado',
    eventLabel: 'enviado'
  })
}
