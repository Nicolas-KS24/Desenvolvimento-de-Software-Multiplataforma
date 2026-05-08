import Resolução_Sistemas_Lineares
from Resolução_Sistemas_Lineares import np

# Sistema 4
A = np.array([
    [2, -1, 1],
    [1, 2, 3],
    [3, 1, -1]
])
B = np.array([1, 14, 2])
solucao = np.linalg.solve(A, B)
print("Sistema 9")
print("x =", solucao[0])
print("y =", solucao[1])
print("z =", solucao[2])