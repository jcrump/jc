import nodemailer, { Transporter } from 'nodemailer';
import { injectable, inject } from 'tsyringe';
import aws from 'aws-sdk';

import IMailTemplateProvider from '@shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider';
import mailConfig from '@config/mail';

import IMailProviderDTO from '../dtos/IMailProviderDTO';
import IMailProvider from '../models/IMailProvider';

@injectable()
class SESMailProvider implements IMailProvider {
  private client: Transporter;

  constructor(
    @inject('MailTemplateProvider')
    private mailTemplateProvider: IMailTemplateProvider,
  ) {
    this.client = nodemailer.createTransport({
      SES: new aws.SES({
        apiVersion: '2010-12-01',
        region: 'us-east-1',
      }),
    });
  }

  // TODO: Vale lembrar que além disso precisa ter uma conta na AWS, um domínio próprio com e-mail e fazer as devidas configurações na AWS e no DNS do domínio, para o correto envio do e-mail. Não fiz isso aqui, pois não tenho nenhum desses requerimentos por enquanto.

  public async sendEmail({
    from,
    to,
    body,
    subject,
  }: IMailProviderDTO): Promise<void> {
    const { name, email } = mailConfig.defaults.from;

    await this.client.sendMail({
      from: {
        name: from?.name || name,
        address: from?.email || email,
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await this.mailTemplateProvider.parse(body),
    });
  }
}

export default SESMailProvider;
