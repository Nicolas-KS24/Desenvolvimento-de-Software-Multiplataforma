import Resolução_Sistemas_Lineares
from Resolução_Sistemas_Lineares import np


# Sistema 2
A = np.array([
    [2, 1, 1],
    [1, -2, 1],
    [3, 1, -2]
])
B = np.array([7, -1, 4])
solucao = np.linalg.solve(A, B)
print("Sistema 7")
print("x =", solucao[0])
print("y =", solucao[1])
print("z =", solucao[2])