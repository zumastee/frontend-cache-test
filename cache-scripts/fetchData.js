// fetchData.js
import { saveToCache } from './cacheManager.js';

// キャッシュまたはネットワークからデータを取得する関数
export async function fetchData(cacheName) {
    const cache = await caches.open(cacheName);

    if (!navigator.onLine) {
        // オフライン時にはキャッシュからデータを取得
        const cachedResponse = await cache.match('/demo-data');
        if (cachedResponse) {
            return await cachedResponse.json(); // キャッシュからデータを取得
        } else {
            return { content: 'オフラインですがキャッシュデータがありません' }; // キャッシュが空の場合
        }
    } else {
        // オンライン時にはダミーデータを保存してから取得
        const data = { content: 'オンラインからのデータ', largeData: Array(10000).fill('データサンプル') };
        await saveToCache(data, cacheName); // ダミーデータをキャッシュに保存
        return data; // 保存したデータを返す
    }
}
