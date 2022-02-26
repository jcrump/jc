import multer, { StorageEngine } from 'multer';
import path from 'path';
import crypto from 'crypto';

const tempDir = path.resolve(__dirname, '..', '..', 'tmp');
const uploadsDir = path.resolve(tempDir, 'uploads');

interface IUploadConfig {
  driver: 'disk' | 's3';
  tempDir: string;
  uploadsDir: string;
  multer: {
    storage: StorageEngine;
  };
  config: {
    disk: {};
    aws: {
      bucket: string;
    };
  };
}

export default {
  driver: process.env.APP_STORAGE_DRIVER,
  tempDir,
  uploadsDir,
  multer: {
    storage: multer.diskStorage({
      destination: tempDir,
      filename(request, file, callback) {
        const hash = crypto.randomBytes(10).toString('HEX');
        const filename = `${hash}-${file.originalname}`;
        return callback(null, filename);
      },
    }),
  },
  config: {
    disk: {},
    aws: {
      bucket: 'S3_BUCKET_NAME',
    },
  },
} as IUploadConfig;
