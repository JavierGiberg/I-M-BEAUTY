const FirebaseConfig = require("./FirebaseConfig");
const functions = FirebaseConfig.functions;
const firestore = FirebaseConfig.firestore;
const storageBucket = FirebaseConfig.storageBucket;
const admin = FirebaseConfig.admin;

exports.onCreateProduct = functions.firestore
  .document("product/{productId}")
  .onCreate(async (snapshot) => {
    const countDocRef = firestore.collection("productCounts").doc("all");
    const countDoc = await countDocRef.get();

    if (countDocRef.exists) {
      countDocRef.update({ count: admin.firestore.FieldValue.increment(1) });
    } else {
      countDocRef.set({ count: 1 });
    }

    const recipe = snapshot.data();
  });

exports.onDeleteProduct = functions.firestore
  .document("product/{productId}")
  .onDelete(async (snapshot) => {
    const product = snapshot.data();
    const imageUrl = product.imageUrl;

    if (imageUrl) {
      const decodeUrl = decodeURIComponent(imageUrl);
      const starrIndex = decodeUrl.indexOf("/o/") + 3;
      const endIndex = decodeUrl.indexOf("?");
      const fullFilePath = decodeUrl.substring(starrIndex, endIndex);
      const file = storageBucket.file(fullFilePath);

      console.log(`Attemping to delete: ${fullFilePath}`);

      try {
        await file.delete();
        console.log("נמחק בהצלחה");
      } catch (error) {
        console.log("שגיאה!!!");
      }
      const countDocRef = firestore.collection("productCounts").doc("all");
      const countDoc = await countDocRef.get();

      if (countDocRef.exists) {
        countDocRef.update({ count: admin.firestore.FieldValue.increment(-1) });
      } else {
        countDocRef.set({ count: 0 });
      }

      const recipe = snapshot.data();
    }
  });
