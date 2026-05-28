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
        B: { distancia: 4, perigo: 3 },
        C: { distancia: 2, perigo: 1 }
    },
    B: {
        A: { distancia: 4, perigo: 3 },
        C: { distancia: 1, perigo: 2 },
        D: { distancia: 5, perigo: 6 }
    },
    C: {
        A: { distancia: 2, perigo: 1 },
        B: { distancia: 1, perigo: 2 },
        D: { distancia: 8, perigo: 8 },
        E: { distancia: 10, perigo: 10 }
    },
    D: {
        B: { distancia: 5, perigo: 6 },
        C: { distancia: 8, perigo: 8 },
        E: { distancia: 2, perigo: 2 },
        F: { distancia: 6, perigo: 9 }
    },
    E: {
        C: { distancia: 10, perigo: 10 },
        D: { distancia: 2, perigo: 2 },
        F: { distancia: 3, perigo: 4 }
    },
    F: {
        D: { distancia: 6, perigo: 9 },
        E: { distancia: 3, perigo: 4 }
    }
};

export { biblioteca };

export type {
    BibliotecaType,
    ArestaType
};