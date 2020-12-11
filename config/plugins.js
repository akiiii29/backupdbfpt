// module.exports = ({ env }) => ({
//     upload: {
//         provider: 'cloudinary',
//         providerOptions: {
//           cloud_name: "akiiii29",
//           api_key: "856956659497389",
//           api_secret: "3gLBGHuTr2IqgDOKfRXfOzrpQwQ",
//         },
//       },
//   });
module.exports = ({ env }) => ({
  upload: {
      provider: 'mongodb',
      providerOptions: {
        collectionName: "fs",
    mongoDbFilesUploadDir: "files",
    read: "secondaryPreferred"
      },
    },
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: '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',
      },
      settings: {
        defaultFrom: 'pedobear.oneq@gmail.com',
        defaultReplyTo: 'pedobear.oneq@gmail.com',
      },
    },
});