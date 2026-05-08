import Resolução_Sistemas_Lineares
from Resolução_Sistemas_Lineares import np

# Sistema 3
A = np.array([
    [1, 3, 2],
    [2, -1, 1],
    [3, 1, -1]
])

B = np.array([14, 3, 5])
solucao = np.linalg.solve(A, B)

print("Sistema 8")
print("x =", solucao[0])
print("y =", solucao[1])
print("z =", solucao[2])