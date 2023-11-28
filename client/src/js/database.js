// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initdb = async () => 
  openDB('mini', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('mini')) {
        console.log('mini database already exists');
        return;
      }
      db.createObjectStore('mini', { keyPath: 'id', autoIncrement: true });
      console.log('mini database created');
    },
  });


// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
    console.log('post to the db');
    const newEntry = await openDB('mini', 1);
    const transaction = newEntry.transaction('mini', 'readwrite');
    const store = transaction.objectStore('mini');
    const request = store.add({ name, home, cell, email });
    const result = await request;
    console.log('saved to the db', result);
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
  console.log('get from the db');
  const getEntry = await openDB('mini', 1);
  const transaction = getEntry.transaction('mini', 'readonly');
  const store = transaction.objectStore('mini');
  const request = store.getAll();
  const result = await request;
  console.log('got from the db', result);
  return result;
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
  console.log('delete from the db', id);
  const deleteEntry = await openDB('mini', 1);
  const transaction = deleteEntry.transaction('mini', 'readwrite');
  const store = transaction.objectStore('mini');
  const request = store.delete(id);
  const result = await request;
  console.log('deleted from the db', result);
  return result;
};

initdb();
