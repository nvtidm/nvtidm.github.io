// Hàm đọc văn bản
function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ko-KR'; // Đặt ngôn ngữ là tiếng Hàn
  speechSynthesis.speak(utterance);
}

//Hàm kiểm tra văn bản
function checkText() {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText !== '') {
    speakText(selectedText);
  }
}        

// Lắng nghe sự kiện bôi đen
document.addEventListener('mouseup', checkText); //dùng chuột
document.addEventListener('touchend', checkText); //cảm ứng

