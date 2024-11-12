import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {

  const intDb = await openDB('jate', 1); // Creates connection to database and version we want to use.
    const tx = intDb.transaction('jate', 'readwrite'); //creates a new transaction
    const store = tx.objectStore('jate'); //opens the desired object store
    const request = store.put({ id: 1, value: content }); //passes in the content
    const result = await request; //gets confirmation from request 
    console.log('🚀 - data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

  const intdb = await openDB('jate', 1); // Creates connection to database and version we want to use.
  const tx = intdb.transaction('jate', 'readonly'); // Creates new transaction 
  const store = tx.objectStore('jate'); //opens the desired object store
  const allContent = await store.getAll(); //.getAll() to get all content from database
  console.log('retrieved data from database', allContent);
  return allContent;
};

initdb();
