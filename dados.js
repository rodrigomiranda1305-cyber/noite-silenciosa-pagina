/* DADOS EDITÁVEIS DA PÁGINA (Noite Silenciosa)
   Aqui entra o que ainda vai chegar: depoimentos, fotos de antes e depois, prazo do contador e rastreamento.
   Enquanto uma lista estiver vazia, a seção dela fica escondida para o comprador.
   Para ver os espaços reservados, abra a página com ?revisao=1 no fim do endereço.
   Preço, checkout, garantia e e-mail de suporte ficam em fonte/oferta.json (depois rodar fonte/montar.py). */
window.OFERTA = {
  id: 'ronco',

  // Contador regressivo: só aparece com um prazo verdadeiro. Exemplo: prazo: '2026-11-20T23:59:00-03:00'
  prazo: null,
  prazoTexto: '', // exemplo: 'O preço de R$ 37 com os 3 bônus vale até 20/11, às 23h59.'

  // Depoimentos reais, só com autorização do cliente (autorizado: true). Imagens e vídeos na pasta img/dep/.
  depoimentos: [
    // { tipo: 'texto', nome: 'Primeiro nome, cidade', texto: 'O que a pessoa disse, sem editar o sentido.', foto: 'img/dep/foto1.webp', autorizado: true },
    // { tipo: 'print', imagem: 'img/dep/print1.webp', legenda: 'Mensagem recebida no WhatsApp em 12/11', autorizado: true },
    // { tipo: 'video', video: 'img/dep/video1.mp4', capa: 'img/dep/capa1.webp', nome: 'Primeiro nome, cidade', autorizado: true },
  ],

  // Antes e depois reais (por exemplo, prints do Diário do Ronco), só com autorização.
  antesDepois: [
    // { antes: 'img/ad/antes1.webp', depois: 'img/ad/depois1.webp', legenda: 'Nota do barulho: 9 na semana 1 e 4 na semana 3', autorizado: true },
  ],

  // Bônus que ainda faltam (esta oferta já tem os 3 bônus, então fica vazio).
  bonusExtras: [],

  rastreio: {
    clarity: null,       // ID do projeto no Microsoft Clarity. O Rodrigo decidiu ficar sem Clarity no Ronco (09/11).
    utmifyPixel: null,   // ID do pixel criado na Utmify (restrito ao produto). Pixel Meta do Ronco: 1311063831162509.
    endpoint: null,      // endereço que recebe os eventos de tempo, rolagem e cliques (opcional)
    mascarar: false
  }
};
