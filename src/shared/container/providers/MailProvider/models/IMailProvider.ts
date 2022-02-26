import IMailProviderDTO from '../dtos/IMailProviderDTO';

export default interface IMailProvider {
  sendEmail(data: IMailProviderDTO): Promise<void>;
}
