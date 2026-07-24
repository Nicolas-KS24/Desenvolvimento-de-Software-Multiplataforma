import numpy as np

np.set_printoptions(precision=17, suppress=False)

A = np.array([
    [1, 2, 3],
    [2, -1, 1],
    [3, 1, -2]
], dtype=float)

B = np.array([16, 5, 4], dtype=float)

resultado = np.linalg.solve(A, B)

print("Exercício 8")
print("x =", resultado[0])
print("y =", resultado[1])
print("z =", resultado[2])