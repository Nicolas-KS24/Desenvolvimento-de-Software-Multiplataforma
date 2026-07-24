import numpy as np

np.set_printoptions(precision=17, suppress=False)

A = np.array([
    [3, 1, -1],
    [2, -2, 1],
    [1, 3, 2]
], dtype=float)

B = np.array([9, 1, 14], dtype=float)

resultado = np.linalg.solve(A, B)

print("Exercício 9")
print("x =", resultado[0])
print("y =", resultado[1])
print("z =", resultado[2])