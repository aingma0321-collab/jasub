self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

// ★ 크롬에서 PWA(앱 설치)로 인정받기 위한 필수 조건!
// 이 fetch 이벤트가 무조건 있어야만 [앱 설치] 버튼이 활성화됩니다.
self.addEventListener('fetch', (e) => {
  // 기본 통과 로직
});
