import { createFakeContact } from '../utils/createFakeContact';
import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = [...existingContacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(`${number} нових контактів було успішно додано.`);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
