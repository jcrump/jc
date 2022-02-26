import fs from 'fs';
import path from 'path';

import config from '@config/upload';
import IStorageProvider from '../models/IStorageProvider';

const { tempDir, uploadsDir } = config;

class DiskStorageProvider implements IStorageProvider {
  public async saveFile(file: string): Promise<string> {
    await fs.promises.rename(
      path.resolve(tempDir, file),
      path.resolve(uploadsDir, file),
    );
    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = path.join(uploadsDir, file);
    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }
    await fs.promises.unlink(filePath);
  }
}

export default DiskStorageProvider;
