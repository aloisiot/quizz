/**
 * Embaralha ramdomicamente uma lista de objetos de qualquer tipo
 * @param elementos Lista de objetos a ser embaralhada
 * @returns Lista de objetos ramdomicamente embaralhada
 */
export default function embaralhar(elementos: any[]): any[]{
    return elementos
            .map(valor => ({valor, key: Math.random()}))
            .sort((obj1, obj2) => obj1.key - obj2.key)
            .map((obj => obj.valor))
}
