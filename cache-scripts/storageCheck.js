// storageCheck.js
export async function checkCacheStorage() {
  if ('storage' in navigator && 'estimate' in navigator.storage) {
      // StorageManager.estimate()を使用して、キャッシュ容量の使用料と総容量を確認します
      const estimate = await navigator.storage.estimate();
      console.log(`使用容量: ${(estimate.usage / 1024 / 1024).toFixed(2)} MB`);
      console.log(`総容量: ${(estimate.quota / 1024 / 1024).toFixed(2)} MB`);
  }
}
