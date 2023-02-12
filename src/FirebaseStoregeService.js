import firebase from "./FirebaseConfig";

const storegRef = firebase.storage().ref();

const uploadFile = (file, fullFilePath, progressCallBack) => {
  const uploadTask = storegRef.child(fullFilePath).put(file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );

      progressCallBack(progress);
    },
    (error) => {
      throw error;
    }
  );
  return uploadTask.then(async () => {
    const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
    // console.log(downloadUrl);
    return downloadUrl;
  });
};
const deleteFile = (fileDownloadUrl) => {
  const decodeUrl = decodeURIComponent(fileDownloadUrl);
  const startIndex = decodeUrl.indexOf("/o/") + 3;
  const endIndex = decodeUrl.indexOf("?");
  const filePath = decodeUrl.substring(startIndex, endIndex);

  return storegRef.child(filePath).delete();
};

const FirebaseStorageService = {
  uploadFile,
  deleteFile,
};

export default FirebaseStorageService;
