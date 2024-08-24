import { writeFile } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { decrypt, encrypt } from '../helpers/crypto';

export const saveToFile = (name: string, data: any) => {
  const path = `${join('data', name)}.txt`;
  const encryptedData = encrypt(JSON.stringify(data));

  writeFile(
    path,
    `${encryptedData}`,
    { flag: 'a', encoding: 'utf8' },
    (error) => {
      if (error) return console.error(error);
      console.log(`File created at ${path}`);
    }
  );
};

export const restoreFromFile = async (fileName: string) => {
  const path = `${join('data', fileName)}.txt`;

  try {
    const data = await readFile(path, 'utf8');
    return { ok: true, data: decrypt(data) };
  } catch (err) {
    return {
      ok: false,
      data: (err as Error).message,
    };
  }
};
