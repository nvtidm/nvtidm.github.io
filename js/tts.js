document.addEventListener('DOMContentLoaded', function() {
            var selectedText = '';

            function speakSelectedText() {
                var utterance = new SpeechSynthesisUtterance(selectedText);
                utterance.lang = 'ko-KR'; // Thiết lập ngôn ngữ tiếng Hàn

                window.speechSynthesis.speak(utterance);
            }

            function getSelectedText() {
                selectedText = window.getSelection().toString().trim();
            }

            document.addEventListener('mouseup', getSelectedText); // Sự kiện khi người dùng bôi đen văn bản
            document.addEventListener('keyup', getSelectedText); // Sự kiện khi người dùng sử dụng phím mũi tên để bôi đen văn bản

            document.addEventListener('mouseup', speakSelectedText); // Phát âm văn bản đã bôi đen
            document.addEventListener('keyup', function(event) {
                if (event.key === 'Enter') {
                    speakSelectedText();
                }
            });
        });
