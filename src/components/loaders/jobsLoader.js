import { getShoppingCart } from "../../utilities/fakedb";

const jobsLoader = async () => {
  // const loadedJobs = await fetch("jobs.json");
  const loadedJobs = await fetch(
    "https://api.jsonbin.io/v3/b/64347c09ebd26539d0a86118"
  );
  const Jobs = await loadedJobs.json();

  // if cart data is in database, you have to use async await
  const storedCart = getShoppingCart();
  // console.log(storedCart);

  const savedCart = [];

  for (const id in storedCart) {
    const addedJob = Jobs.record.find((pd) => pd.id === id);
    if (addedJob) {
      const quantity = storedCart[id];
      addedJob.quantity = quantity;
      savedCart.push(addedJob);
    }
  }

  // if you need to send two things
  // return [Jobs, savedCart]
  // another options
  // return { Jobs, cart: savedCart }

  return savedCart;
  // return Jobs;
};

export default jobsLoader;
