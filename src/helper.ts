function calculaPesoPerigo(perigo: number): number {
  if (perigo >= 1 && perigo <= 4) {
    return 1.5;
  }

  if (perigo >= 5 && perigo <= 7) {
    return 2;
  }

  if (perigo >= 8 && perigo <= 9) {
    return 3;
  }

  return 5;
}

function reconstruirCaminho(
  anteriores: Record<string, string | null>,
  fim: string,
): string {
  const caminho: string[] = [];

  let atual: string | null = fim;

  while (atual !== null) {
    caminho.unshift(atual);

    atual = anteriores[atual] ?? null;
  }

  return caminho.join(" -> ");
}

export { calculaPesoPerigo, reconstruirCaminho };
