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
});