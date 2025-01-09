// 定义棋盘和游戏状态
const boardSize = 15; // 棋盘大小
const board = [];
const directions = [
    [1, 0], [0, 1], [1, 1], [1, -1] // 四个主要方向：水平、垂直、对角线、反对角线
];
let currentPlayer = 'ai'; // 初始化为机器先行
const EMPTY = 0, USER = 1, AI = 2;

// 初始化棋盘
function initBoard() {
    for (let i = 0; i < boardSize; i++) {
        board[i] = Array(boardSize).fill(EMPTY);
    }

    const boardDiv = document.getElementById('board');
    boardDiv.innerHTML = ''; // 清空棋盘

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', handleUserClick);
            boardDiv.appendChild(cell);
        }
    }

    document.getElementById('status').innerText = "游戏进行中...";

    // AI先行：机器先下第一步
    aiFirstMove();
}

// AI第一步逻辑
function aiFirstMove() {
    const mid = Math.floor(boardSize / 2); // 棋盘中央
    board[mid][mid] = AI;

    // 更新界面
    const cell = document.querySelector(`[data-row="${mid}"][data-col="${mid}"]`);
    cell.innerText = '○';
    cell.classList.add('taken');

    currentPlayer = 'user'; // 切换到用户回合
}

// 检测胜负
function checkWin(x, y, player) {
    for (let [dx, dy] of directions) {
        let count = 1;
        for (let d = 1; d <= 4; d++) {
            const nx = x + dx * d, ny = y + dy * d;
            if (nx < 0 || ny < 0 || nx >= boardSize || ny >= boardSize || board[nx][ny] !== player) break;
            count++;
        }
        for (let d = 1; d <= 4; d++) {
            const nx = x - dx * d, ny = y - dy * d;
            if (nx < 0 || ny < 0 || nx >= boardSize || ny >= boardSize || board[nx][ny] !== player) break;
            count++;
        }
        if (count >= 5) return true;
    }
    return false;
}

// 用户点击事件
function handleUserClick(e) {
    if (currentPlayer !== 'user') return; // 不是用户的回合
    const cell = e.target;
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    if (board[row][col] !== EMPTY) return; // 已经被占用

    // 用户下棋
    board[row][col] = USER;
    cell.innerText = '●';
    cell.classList.add('taken');

    // 检测胜负
    if (checkWin(row, col, USER)) {
        document.getElementById('status').innerText = '用户胜利！';
        return;
    }

    currentPlayer = 'ai';
    setTimeout(aiMove, 500); // 延迟一点时间让机器思考
}

// AI下棋逻辑
function aiMove() {
    let bestScore = -Infinity;
    let move = null;

    // 遍历所有可能的位置，寻找评分最高的位置
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if (board[i][j] === EMPTY) {
                board[i][j] = AI;
                const score = evaluateBoard(AI) - evaluateBoard(USER); // AI 最大化，用户最小化
                board[i][j] = EMPTY;
                if (score > bestScore) {
                    bestScore = score;
                    move = [i, j];
                }
            }
        }
    }

    // AI落子
    if (move) {
        const [row, col] = move;
        board[row][col] = AI;
        const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        cell.innerText = '○';
        cell.classList.add('taken');
        if (checkWin(row, col, AI)) {
            document.getElementById('status').innerText = 'AI胜利！';
            return;
        }
    }

    currentPlayer = 'user';
}

// 简单的评分函数
function evaluateBoard(player) {
    let score = 0;
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if (board[i][j] === player) {
                score += evaluatePoint(i, j, player);
            }
        }
    }
    return score;
}

function evaluatePoint(x, y, player) {
    let score = 0;
    for (let [dx, dy] of directions) {
        let count = 0;
        for (let d = 1; d <= 4; d++) {
            const nx = x + dx * d, ny = y + dy * d;
            if (nx < 0 || ny < 0 || nx >= boardSize || ny >= boardSize || board[nx][ny] !== player) break;
            count++;
        }
        score += Math.pow(10, count); // 连续棋子数越多，分值越高
    }
    return score;
}

// 初始化游戏
initBoard();