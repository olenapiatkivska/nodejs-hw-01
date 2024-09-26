import fs from 'node:fs/promises';
import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) return;
    const removedContact = contacts.pop();
    console.log('Last contact deleted:', removedContact);
    const contactsJSON = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, contactsJSON, 'utf8');
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
