type ArestaType = {
  distancia: number;
  perigo: number;
};

type BibliotecaType = {
  [key: string]: {
    [vizinho: string]: ArestaType;
  };
};

const biblioteca: BibliotecaType = {
  A: {
    B: { distancia: 2.4, perigo: 3 },
    E: { distancia: 4.2, perigo: 4 },
  },
  B: {
    A: { distancia: 2.4, perigo: 3 },
    C: { distancia: 1.8, perigo: 2 },
    D: { distancia: 2.2, perigo: 4 },
  },
  C: {
    B: { distancia: 1.8, perigo: 2 },
    D: { distancia: 1.6, perigo: 2 },
    G: { distancia: 9.2, perigo: 7 },
  },
  D: {
    B: { distancia: 2.2, perigo: 4 },
    C: { distancia: 1.6, perigo: 2 },
    E: { distancia: 2.8, perigo: 3 },
    F: { distancia: 5.0, perigo: 6 },
  },
  E: {
    A: { distancia: 4.2, perigo: 4 },
    D: { distancia: 2.8, perigo: 3 },
    F: { distancia: 5.2, perigo: 5 },
  },
  F: {
    D: { distancia: 5.0, perigo: 6 },
    E: { distancia: 5.2, perigo: 5 },
    G: { distancia: 7.6, perigo: 6 },
  },
  G: {
    C: { distancia: 9.2, perigo: 7 },
    F: { distancia: 7.6, perigo: 6 },
  },
};

export { biblioteca };

export type { BibliotecaType, ArestaType };
