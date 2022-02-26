import IMailProvider from '../models/IMailProvider';
import IMailProviderDTO from '../dtos/IMailProviderDTO';

class FakeMailProvider implements IMailProvider {
  private messages: IMailProviderDTO[] = [];

  public async sendEmail(message: IMailProviderDTO): Promise<void> {
    this.messages.push(message);
  }
}

export default FakeMailProvider;
