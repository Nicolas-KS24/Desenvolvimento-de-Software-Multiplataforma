import numpy as np

np.set_printoptions(precision=17, suppress=False)

A = np.array([
    [1, 1, 1],
    [2, -2, 3],
    [3, 1, -1]
], dtype=float)

B = np.array([5, 12, 7], dtype=float)

resultado = np.linalg.solve(A, B)

print("Exercício 4")
print("x =", resultado[0])
print("y =", resultado[1])
print("z =", resultado[2])