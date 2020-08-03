document.body.onload = chess;

function chess() {
    let chess = document.createElement('div');
    chess.classList.add('chess-table');
    document.body.append(chess);
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (let i = 1; i < 9; i++) {
        for (let x = 0; x < 4; x++) {
            let num = x * 2;
            if (i % 2 === 0) {
                let evenBlock = document.createElement('div');
                evenBlock.classList.add('even-block');
                evenBlock.innerHTML = i+alphabet[num];
                chess.appendChild(evenBlock);
                let oddBlock = document.createElement('div');
                oddBlock.classList.add('odd-block');
                oddBlock.innerHTML = i+alphabet[num+1];
                chess.appendChild(oddBlock);
            } else {
                let oddBlock = document.createElement('div');
                oddBlock.classList.add('odd-block');
                oddBlock.innerHTML = i+alphabet[num];
                chess.appendChild(oddBlock);
                let evenBlock = document.createElement('div');
                evenBlock.classList.add('even-block');
                evenBlock.innerHTML = i+alphabet[num+1];
                chess.appendChild(evenBlock);
            }
        }
    }
}