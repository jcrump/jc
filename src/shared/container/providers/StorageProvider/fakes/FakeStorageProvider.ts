import IStorageProvider from '../models/IStorageProvider';

class FakeStorageProvider implements IStorageProvider {
  private uploads: string[] = [];

  public async saveFile(file: string): Promise<string> {
    this.uploads.push(file);
    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const findIndex = this.uploads.findIndex(item => item === file);

    if (findIndex) {
      this.uploads.splice(findIndex, 1);
    }
  }
}

export default FakeStorageProvider;
