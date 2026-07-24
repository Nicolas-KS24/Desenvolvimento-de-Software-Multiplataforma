import numpy as np

np.set_printoptions(precision=17, suppress=False)

A = np.array([
    [2, 1, -2],
    [1, 3, 1],
    [3, -1, 2]
], dtype=float)

B = np.array([3, 12, 7], dtype=float)

resultado = np.linalg.solve(A, B)

print("Exercício 7")
print("x =", resultado[0])
print("y =", resultado[1])
print("z =", resultado[2])