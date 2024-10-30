// app.js
import { checkCacheStorage } from './cache-scripts/storageCheck.js';

// 2で追加
import { saveToCache } from './cache-scripts/cacheManager.js';

// 3で追加
import { fetchData } from './cache-scripts/fetchData.js';



const currentCache = 'my-cache-v1';

// キャッシュの管理機能を実行するメイン関数
async function runApp() {
    // 1. キャッシュの容量確認
    await checkCacheStorage();

    // 2. 名前付きキャッシュへのデータ保存
    // ダミーデータとして大きな配列を作成
    const dummyData = {
      content: 'オフライン用のダミーデータ',
      largeData: Array(10000).fill('データサンプル')
    };

    await saveToCache(dummyData, currentCache);

    // 3. データの取得とキャッシュの活用
    const fetchedData = await fetchData(currentCache); // fetchDataでデータを取得
    document.getElementById('output').innerText = fetchedData.content; // 取得したデータを表示


}

// グローバルスコープにrunAppを登録
window.runApp = runApp;
