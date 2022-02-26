import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';
import HandlebarsTemplateProvider from './implementations/HandlebarsTemplateProvider';

const providers = {
  handlebars: HandlebarsTemplateProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
