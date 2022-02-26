interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      name: string;
      email: string;
    };
  };
}

export default {
  driver: process.env.APP_MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      name: 'Support Team Name',
      email: 'support.team@email.com',
    },
  },
} as IMailConfig;
