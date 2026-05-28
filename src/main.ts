import { biblioteca } from "./dados.js";
import type { BibliotecaType } from "./dados.js";
import { calculaPesoPerigo, reconstruirCaminho } from "./helper.js";

function achaMelhorCaminho(grafo: BibliotecaType, inicio: string, fim: string) {
  const custos: Record<string, number> = {};
  const anteriores: Record<string, string | null> = {};
  const vertices: string[] = Object.keys(grafo);
  const visitados = new Set<string>();

  // Inicialização
  for (const nodo of vertices) {
    custos[nodo] = Infinity;
    anteriores[nodo] = null;
  }

  custos[inicio] = 0;

  while (visitados.size < vertices.length) {
    let nodoAtual: string | null = null;

    let menorCusto = Infinity;

    // Procura o nodo com menor custo
    for (const nodo of vertices) {
      if (visitados.has(nodo)) continue;

      const custoNodo = custos[nodo];
      if (custoNodo === undefined)
        throw new Error(`Custo do nodo "${nodo}" não encontrado.`);

      if (custoNodo < menorCusto) {
        menorCusto = custoNodo;

        nodoAtual = nodo;
      }
    }

    // Não encontrou caminho
    if (nodoAtual === null) break;

    // Chegou ao destino
    if (nodoAtual === fim) break;

    visitados.add(nodoAtual);

    // Vizinhos do nodo atual
    const vizinhos = grafo[nodoAtual];
    if (!vizinhos) continue;

    // Percorre vizinhos
    for (const vizinho of Object.keys(vizinhos)) {
      if (vizinho === anteriores[nodoAtual]) continue;
      const aresta = vizinhos[vizinho];
      if (!aresta) continue;

      const custoAtual = custos[nodoAtual];

      if (custoAtual === undefined)
        throw new Error(`Custo do nodo "${nodoAtual}" não encontrado.`);

      const pesoPerigo = calculaPesoPerigo(aresta.perigo);

      const custoAresta = aresta.distancia + aresta.perigo * pesoPerigo;

      const novoCusto = custoAtual + custoAresta;

      const custoVizinho = custos[vizinho];
      if (custoVizinho === undefined)
        throw new Error(`Custo do nodo "${vizinho}" não encontrado.`);

      // Relaxamento
      if (novoCusto < custoVizinho) {
        custos[vizinho] = novoCusto;

        anteriores[vizinho] = nodoAtual;
      }
    }
  }

  const melhorCaminho = reconstruirCaminho(anteriores, fim);

  return `
    Custo Total: ${custos[fim]}
    Melhor Caminho: "${melhorCaminho}"
  `;
}

const resultado = achaMelhorCaminho(biblioteca, "A", "F");

console.log(resultado);
