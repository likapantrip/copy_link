function copy_link (){
  // アイコンを取得
  const copyIcon = document.getElementById('copy-icon');

  // コピーするリンクを取得
  const copyLink = document.getElementById('copy-link').innerText;
  
  if(copyIcon){
    copyIcon.addEventListener('click', () => {
      try{
        // クリップボードにコピー
        navigator.clipboard.writeText(copyLink)

        // メッセージを取得
        const copyMessage = document.getElementById('copy-message');

        // メッセージを表示
        if (copyMessage) {
          copyMessage.style.display = 'block';
          setTimeout(() => {
            copyMessage.style.display = 'none';
          }, 2000); // メッセージを2秒後に非表示
        }
      }catch(e){
        // エラーメッセージを取得
        const errorMessage = e.message

        alert('URLリンクのコピーに失敗しました。'+errorMessage);
      }
    })
  }
};

window.addEventListener('turbo:load', copy_link);
window.addEventListener("turbo:render", copy_link);