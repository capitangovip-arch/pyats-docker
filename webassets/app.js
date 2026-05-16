(() => {
  // Atualiza automaticamente o ano do rodapé em qualquer página com [data-year].
  const y = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach((n) => (n.textContent = y));

  // Bloco de persistência de progresso do vídeo usando IndexedDB.
  // Se o vídeo #demo-video não existir na página, este bloco termina sem erro.
  const video = document.getElementById('demo-video');
  if (!video || !('indexedDB' in window)) return;

  const DB_NAME = 'henicom-media';
  const STORE = 'videoProgress';
  const KEY = 'demo-video';

  // Abre/cria a base local no navegador.
  const openReq = indexedDB.open(DB_NAME, 1);

  // Cria o object store na primeira execução (ou upgrade de versão).
  openReq.onupgradeneeded = () => {
    const db = openReq.result;
    if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
  };

  openReq.onsuccess = () => {
    const db = openReq.result;

    // Lê o progresso gravado e restaura o currentTime do vídeo.
    const readTx = db.transaction(STORE, 'readonly');
    const readReq = readTx.objectStore(STORE).get(KEY);
    readReq.onsuccess = () => {
      const saved = Number(readReq.result || 0);
      if (saved > 0 && Number.isFinite(saved)) video.currentTime = saved;
    };

    // Guarda progresso periodicamente durante a reprodução.
    video.addEventListener('timeupdate', () => {
      const writeTx = db.transaction(STORE, 'readwrite');
      writeTx.objectStore(STORE).put(video.currentTime, KEY);
    });

    // Se o vídeo terminar, limpa o progresso para próxima reprodução.
    video.addEventListener('ended', () => {
      const clearTx = db.transaction(STORE, 'readwrite');
      clearTx.objectStore(STORE).delete(KEY);
    });
  };
})();
