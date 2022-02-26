import IMailTemplateProviderDTO from '@shared/container/providers/MailTemplateProvider/dtos/IMailTemplateProviderDTO';

interface IMailContact {
  name: string;
  email: string;
}

export default interface IMailProviderDTO {
  from?: IMailContact;
  to: IMailContact;
  subject: string;
  body: IMailTemplateProviderDTO;
}
