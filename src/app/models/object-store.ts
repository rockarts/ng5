export class ObjectStore {
    /**
     * Creates the object stores.
     * The object store has a list of records which hold the data stored in the object store.
     * Each record consists of a key and a value.
     * 
     * @param db The database
     */
    createStores(db: IDBDatabase) {
        // Creates "TodoStore".
        var todoStore: IDBObjectStore = db.createObjectStore("TodoStore", { keyPath: 'todoId' });
        // Add new stores here.
    }
}