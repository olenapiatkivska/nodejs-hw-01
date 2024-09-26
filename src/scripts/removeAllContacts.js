import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const removeContacts = [];
    const contactsJSON = JSON.stringify(removeContacts, null, 2);
    await fs.writeFile(PATH_DB, contactsJSON, 'utf8');
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
