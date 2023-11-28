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
  
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
  
};

initdb();
