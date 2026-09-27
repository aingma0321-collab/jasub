self.addEventListener('install', (e) => {
  self.skipWaiting();
});

// 푸시 알람 수신 시 소리 없이 진동만 울리도록 설정
self.addEventListener('push', (e) => {
  const options = {
    body: e.data ? e.data.text() : '시간이 되었습니다.',
    icon: 'https://via.placeholder.com/192/000000/FFFFFF/?text=Study',
    vibrate: [300, 100, 300, 100, 300], // 소리 안 새어나가게 진동 패턴 적용
    silent: true // 시스템 알림음 무음 처리
  };
  e.waitUntil(self.registration.showNotification('자습자족 알람', options));
});
