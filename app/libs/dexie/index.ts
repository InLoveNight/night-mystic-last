import Dexie, { type EntityTable } from 'dexie';
import type { schemaCard } from '~~/shared/zod-schema';

export const dexieDb = new Dexie('NightMystic') as Dexie & {
    cards: EntityTable<schemaCard.Card, 'id'>;
};

dexieDb.version(1).stores({
    cards: 'id, name, description, tags, ad, contents',
});

export const execute = async <T>(
    fn: () => Promise<T>
) => {

    try {
        const res = await fn()
        return { result: res, success: true }
    } catch (err) {
        console.log('DexieDB Error:', err);
        return { result: null, success: false }
    }
}

export default dexieDb
