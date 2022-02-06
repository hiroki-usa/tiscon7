document.onkeypress = function(e) {
  // エンターキーだったら無効にする
  if (e.key === 'Enter') {
    return false;
  }
}