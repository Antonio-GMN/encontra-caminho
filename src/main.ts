import { biblioteca } from "./dados.js";
import type { BibliotecaType } from "./dados.js";


function achaMelhorCaminho(
    grafo: BibliotecaType,
    inicio: string,
    fim: string
) {

    const distancias: Record<string, number> = {};
    const anteriores: Record<string, string | null> = {};
    const vertices: string[] = Object.keys(grafo);
    const visitados: string[] = [];

    // Inicialização
    for (const nodo of vertices) {
        distancias[nodo] = Infinity;
        anteriores[nodo] = null;
    }

    distancias[inicio] = 0;

    while (visitados.length < vertices.length) {

        let nodoAtual: string | null = null;
        let menorDistancia = Infinity;

        // Encontrar o nodo não visitado com menor distância
        for (const nodo of vertices) {
            if(visitados.includes(nodo)) continue;

            const distanciaNodo = distancias[nodo];

            if (
                distanciaNodo !== undefined &&
                !distanciaNodo !== undefined &&
                distanciaNodo < menorDistancia
            ) {
                menorDistancia = distanciaNodo;
                nodoAtual = nodo;
            }
        }

        // Não encontrou mais caminhos
        if (nodoAtual === null) break;

        // Chegou ao destino
        if (nodoAtual === fim) break;

        visitados.push(nodoAtual);

        // Pega os vizinhos do nodo atual
        const vizinhos = grafo[nodoAtual];

        // Se os visinhos não existirem, continua para o próximo nodo   
        if (!vizinhos) continue;

        // Percorre os vizinhos
        for (const vizinho of Object.keys(vizinhos)) {

            const peso = vizinhos[vizinho];

            if (peso === undefined) continue;

            const distanciaAtual = distancias[nodoAtual];

            if (distanciaAtual === undefined) continue;

            const novaDistancia =
                distanciaAtual + peso;

            const distanciaVizinho =
                distancias[vizinho];

            // Relaxamento
            if (
                distanciaVizinho !== undefined &&
                novaDistancia < distanciaVizinho
            ) {

                distancias[vizinho] =
                    novaDistancia;

                // Guarda o caminho
                anteriores[vizinho] =
                    nodoAtual;
            }
        }
    }

    // Reconstrução do caminho
    const caminho: string[] = [];

    let atual: string | null = fim;

    while (atual !== null) {

        caminho.unshift(atual);

        atual = anteriores[atual] ?? null;
    }

    return {
        distancia: distancias[fim],
        caminho
    };
}

const resultado =
    achaMelhorCaminho(biblioteca, "A", "E");

console.log(resultado);