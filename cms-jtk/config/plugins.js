module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'), //Setting up Cloudinary Name on .env
          api_key: env('CLOUDINARY_KEY'), //Setting up Cloudinary API Key on .env
          api_secret: env('CLOUDINARY_SECRET'), //Setting up Cloudinary API Secret on .env
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });