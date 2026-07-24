import numpy as np

np.set_printoptions(precision=17, suppress=False)

A = np.array([
    [2, 1, 1],
    [1, -3, 2],
    [3, 2, -1]
], dtype=float)

B = np.array([9, -1, 8], dtype=float)

resultado = np.linalg.solve(A, B)

print("Exercício 2")
print("x =", resultado[0])
print("y =", resultado[1])
print("z =", resultado[2])