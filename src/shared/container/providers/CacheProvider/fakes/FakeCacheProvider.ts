import ICacheProvider from '../models/ICacheProvider';

interface ICache {
  [key: string]: string;
}

class FakeCacheProvider implements ICacheProvider {
  private cache: ICache = {};

  public async save(key: string, value: any): Promise<void> {
    this.cache[key] = JSON.stringify(value);
  }

  public async recover<T>(key: string): Promise<T | null> {
    const data = this.cache[key];

    if (!data) {
      return null;
    }
    return JSON.parse(data) as T;
  }

  public async invalidate(key: string): Promise<void> {
    delete this.cache[key];
  }

  public async invalidatePrefix(prefix: string): Promise<void> {
    const prefixCategory = prefix.split(':')[0];
    const cacheKeys = Object.keys(this.cache);

    cacheKeys.forEach(key => {
      if (key.match(prefixCategory) && key.match(prefixCategory[0])) {
        delete this.cache[key];
      }
    });
  }
}

export default FakeCacheProvider;
