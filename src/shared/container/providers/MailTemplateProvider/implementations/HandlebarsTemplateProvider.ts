import handlebars from 'handlebars';
import fs from 'fs';

import IMailTemplateProvider from '../models/IMailTemplateProvider';
import IMailTemplateProviderDTO from '../dtos/IMailTemplateProviderDTO';

class HandlebarsTemplateProviders implements IMailTemplateProvider {
  public async parse({
    file,
    variables,
  }: IMailTemplateProviderDTO): Promise<string> {
    const templateContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });
    const parseTemplate = handlebars.compile(templateContent);

    return parseTemplate(variables);
  }
}

export default HandlebarsTemplateProviders;
