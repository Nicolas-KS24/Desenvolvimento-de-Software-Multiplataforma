import Resolução_Sistemas_Lineares
from Resolução_Sistemas_Lineares import np

# Sistema 5
A = np.array([
    [1, 1, 2],
    [2, -3, 1],
    [3, 2, -1]
])
B = np.array([9, -2, 8])
solucao = np.linalg.solve(A, B)
print("Sistema 10")
print("x =", solucao[0])
print("y =", solucao[1])
print("z =", solucao[2])