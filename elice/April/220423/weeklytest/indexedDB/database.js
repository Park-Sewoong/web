// addEntryToDb 함수를 작성합니다.
const addEntryToDb = (storeName, entry) => {
    const database = onRequest.result
    const transaction = database.transaction([storeName], 'readwrite')


    const store = transaction.objectStore(storeName)

    store.add(entry)

    transaction.onerror = () => {
        console.log(`error adding Entry to ${storeName}.`)
        console.log(transaction.error);
    }
}


// clearAllEntries 함수를 작성합니다.
const clearAllEntries = (storeName) => {
    const database = onRequest.result
    const transaction = database.transaction([storeName], 'readwrite')


    const store = transaction.objectStore(storeName)

    store.clear()
}