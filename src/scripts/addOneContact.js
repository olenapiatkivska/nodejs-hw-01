import fs from 'node:fs/promises';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContacts = createFakeContact();
    contacts.push(newContacts);

    const contactsJSON = JSON.stringify(contacts, null, 2);

    await fs.writeFile(PATH_DB, contactsJSON, 'utf8');
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
