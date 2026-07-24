import numpy as np
import matplotlib.pyplot as plt

# MATRIZ DA TRANSFORMAÇÃO
A = np.array([
[1,2],
[0,1]
])

# VETOR ORIGINAL
v = np.array([
[2],
[2]
])

# TRANSFORMAÇÃO
tv = A @ v
print("Vetor original:")
print(v)
print("Vetor transformado:")
print(tv)

# AJUSTE AUTOMÁTICO DOS LIMITES
maior = max(
    abs(v[0,0]),
    abs(v[1,0]),
    abs(tv[0,0]),
    abs(tv[1,0]),
    1
)
limite = maior + 2

# GRÁFICO
plt.figure(figsize=(7,7))
plt.quiver(
    0,0,
    v[0,0],v[1,0],
    angles='xy',
    scale_units='xy',
    scale=1,
    color='blue',
    label='Vetor original'
)

plt.quiver(
    0,0,
    tv[0,0],tv[1,0],
    angles='xy',
    scale_units='xy',
    scale=1,
    color='red',
    label='Vetor transformado'
)

plt.xlim(-limite, limite)
plt.ylim(-limite, limite)
plt.axhline(0,color='black')
plt.axvline(0,color='black')
plt.grid()
plt.legend()
plt.title('Transformação Linear')
plt.show()