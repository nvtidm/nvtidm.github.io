let audioPlayer = document.getElementById('audioPlayer');
let pointAInput = document.getElementById('pointA');
let pointBInput = document.getElementById('pointB');
let loopInterval;
let isLooping = false;

function toggleLoop() {
    let pointA = parseFloat(pointAInput.value);
    let pointB = parseFloat(pointBInput.value);

    // Đảm bảo thời gian A không vượt quá thời gian B
    if (pointA >= pointB) {
        alert("Thời gian A phải nhỏ hơn thời gian B.");
        return;
    }

    // Nếu đang lặp lại, dừng lặp
    if (isLooping) {
        clearInterval(loopInterval);
        isLooping = false;
        document.getElementById('loopButton').innerHTML = '<i class="fas fa-sync-alt"></i>';
        document.getElementById('loopButton').classList.remove('isLooping');
    } else { // Nếu chưa lặp, bắt đầu lặp
        // Thiết lập thời gian đến điểm A
        audioPlayer.currentTime = pointA;


        // Lặp lại đoạn A-B bằng cách sử dụng
        loopInterval = setInterval(function() {
            if (audioPlayer.currentTime >= pointB) {
                // Khi đạt đến thời gian B, quay trở lại thời gian A
                audioPlayer.currentTime = pointA;
            }
        }, 10); // 10 milisecond là khoảng thời gian kiểm tra lặp lại
        isLooping = true;
        document.getElementById('loopButton').innerHTML = '<i class="fas fa-stop"></i>';
        document.getElementById('loopButton').classList.add('isLooping');
    }
}

// Xử lý sự kiện khi người dùng nhập giá trị vào "Đoạn A (giây)" và "Đoạn B (giây)"
pointAInput.addEventListener('input', handlePointChange);
pointBInput.addEventListener('input', handlePointChange);

function handlePointChange() {
    // Đảm bảo khi nhập giá trị, thời gian A và B vẫn nằm trong giới hạn min-max
    let pointA = parseFloat(pointAInput.value);
    let pointB = parseFloat(pointBInput.value);
    if (pointA < pointAInput.min) {
        pointAInput.value = pointAInput.min;
    } else if (pointA > pointAInput.max) {
        pointAInput.value = pointAInput.max;
    }
    if (pointB < pointBInput.min) {
        pointBInput.value = pointBInput.min;
    } else if (pointB > pointBInput.max) {
        pointBInput.value = pointBInput.max;
    }
}
