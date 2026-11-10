const copyButton = document.querySelector('#copy-line');
copyButton.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('lina5310');
    status.textContent = '已複製 LINE ID：lina5310';
  } catch {
    status.textContent = '請在 LINE 搜尋 ID：lina5310';
  }
});
