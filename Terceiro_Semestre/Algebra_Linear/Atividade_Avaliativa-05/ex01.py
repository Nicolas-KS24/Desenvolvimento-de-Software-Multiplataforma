import numpy as np

np.set_printoptions(precision=17, suppress=False)

A = np.array([
    [1, 2, -1],
    [2, -1, 3],
    [3, 1, 1]
], dtype=float)

B = np.array([4, 11, 10], dtype=float)

resultado = np.linalg.solve(A, B)

print("Exercício 1")
print("x =", resultado[0])
print("y =", resultado[1])
print("z =", resultado[2])