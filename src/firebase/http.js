import axios from "axios";

const BACKEND_URL =
  "https://imbeauty-1e44c-default-rtdb.europe-west1.firebasedatabase.app/";

export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + "/allProduct.json",
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchProduct() {
  const response = await axios.get(BACKEND_URL + "/allProduct.json");

  const allProduct = [];

  for (const key in response.data) {
    const productObj = {
      name: "כותבת",
      title: "סוג",
      image:
        "https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.6435-9/70299373_10211248241121880_580395470627536896_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=O6jhw1nd5UIAX9bDs-I&_nc_ht=scontent.ftlv6-1.fna&oh=00_AT_3NtxxX8AQvSQulzqUAvmIhMSb03lhYlLG2K_81rCSNw&oe=636BE4CA",
      fBack: " פירוט:....",
    };
    //console.log("testttttttt" + expenseObj.amount);
    allProduct.push(productObj);
  }

  return allProduct;
}

export function updateAllProduct(id, productData) {
  return axios.put(BACKEND_URL + `/allProduct/${id}.json`, productData);
}

export function deleteAllProduct(id) {
  return axios.delete(BACKEND_URL + `/allProduct/${id}.json`);
}
