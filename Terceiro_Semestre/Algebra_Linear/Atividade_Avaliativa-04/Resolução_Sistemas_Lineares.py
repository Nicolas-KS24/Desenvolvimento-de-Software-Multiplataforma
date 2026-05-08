import numpy as np

# Sistema 1
A = np.array([
    [1, 1, -1],
    [2, -1, 3],
    [3, 2, 1]
])
B = np.array([2, 9, 10])
solucao = np.linalg.solve(A, B)
print("Sistema 6")
print("x =", solucao[0])
print("y =", solucao[1])
print("z =", solucao[2])






