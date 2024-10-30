// cacheManager.js
export async function saveToCache(data, cacheName) {
  // キャッシュを開き、データを保存する
  const cache = await caches.open(cacheName);
  await cache.put('/demo-data', new Response(JSON.stringify(data)));
  console.log(`${cacheName} にデータが保存されました`);
}
