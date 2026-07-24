from pathlib import Path
import runpy

PASTA_ATUAL = Path(__file__).parent

arquivos_python = sorted(
    arquivo for arquivo in PASTA_ATUAL.glob("*.py")
    if arquivo.name != Path(__file__).name
)

if not arquivos_python:
    print("Nenhum arquivo Python encontrado para executar.")
else:
    print("Executando todos os exercícios...\n")

    for arquivo in arquivos_python:
        print("=" * 25)
        print(f"Executando: {arquivo.name}")

        try:
            runpy.run_path(str(arquivo), run_name="__main__")
        except Exception as erro:
            print(f"Erro ao executar {arquivo.name}:")
            print(erro)

        print()