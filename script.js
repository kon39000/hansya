document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const messageArea = document.getElementById('messageArea');
    const targetButton = document.getElementById('targetButton');
    const resultArea = document.getElementById('resultArea');
    const reactionTime = document.getElementById('reactionTime');
    const retryButton = document.getElementById('retryButton');

    let startTime;
    let isGameActive = false;

    // ゲームの開始
    function startGame() {
        // 初期状態の設定
        messageArea.textContent = '';
        targetButton.classList.add('hidden');
        messageArea.classList.add('hidden');
        
        // ランダムな時間（1秒から10秒）を設定
        const randomDelay = Math.floor(Math.random() * 9000) + 1000;
        
        // ディレイ後にGO!を表示
        setTimeout(() => {
            messageArea.textContent = 'GO!';
            messageArea.classList.remove('hidden');
            targetButton.classList.remove('hidden');
            
            // GO!が表示された瞬間を開始時間として記録
            startTime = Date.now();
            isGameActive = true;
        }, randomDelay);
    }

    // ゲームの終了
    function endGame() {
        isGameActive = false;
        const endTime = Date.now();
        const timeTaken = (endTime - startTime) / 1000; // 秒に変換
        
        reactionTime.textContent = timeTaken.toFixed(2);
        resultArea.classList.remove('hidden');
        messageArea.classList.add('hidden');
        targetButton.classList.add('hidden');
    }

    // イベントリスナーの設定
    startButton.addEventListener('click', startGame);
    targetButton.addEventListener('click', () => {
        if (isGameActive) {
            endGame();
        }
    });
    retryButton.addEventListener('click', () => {
        resultArea.classList.add('hidden');
        startGame();
    });
});
