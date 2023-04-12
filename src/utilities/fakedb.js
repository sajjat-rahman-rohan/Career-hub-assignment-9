// use local storage to manage Job data
const addToDb = (id) => {
  let AppliedJob = getAppliedJob();
  // add quantity
  const quantity = AppliedJob[id];
  if (!quantity) {
    AppliedJob[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    AppliedJob[id] = newQuantity;
  }
  localStorage.setItem("applied-job", JSON.stringify(AppliedJob));
};

const removeFromDb = (id) => {
  const AppliedJob = getAppliedJob();
  if (id in AppliedJob) {
    delete AppliedJob[id];
    localStorage.setItem("applied-job", JSON.stringify(AppliedJob));
  }
};

const getAppliedJob = () => {
  let AppliedJob = {};

  //get the applied job Job from local storage
  const storedJob = localStorage.getItem("applied-job");
  if (storedJob) {
    AppliedJob = JSON.parse(storedJob);
  }
  return AppliedJob;
};

const deleteAppliedJob = () => {
  localStorage.removeItem("applied-job");
};

export { addToDb, removeFromDb, getAppliedJob, deleteAppliedJob };
