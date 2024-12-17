def check_winner(board):
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] and board[i][0] != '.':
            return board[i][0]
        if board[0][i] == board[1][i] == board[2][i] and board[0][i] != '.':
            return board[0][i]

    if board[0][0] == board[1][1] == board[2][2] and board[0][0] != '.':
        return board[0][0]
    
    if board[0][2] == board[1][1] == board[2][0] and board[0][2] != '.':
        return board[0][2]

    if all(board[i][j] != '.' for i in range(3) for j in range(3)):
        return "tie"
    
    return None 

def check_result(board):
    winner = check_winner(board)
    return [[winner if cell == winner else "tie" for cell in row] for row in board]

board = [
    ['X', 'X', 'X'],
    ['O', 'O', '.'],
    ['.', '.', 'O']
]

result = check_result(board)

for row in result:
    print(row)

