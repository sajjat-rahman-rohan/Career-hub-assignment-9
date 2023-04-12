import { getAppliedJob } from "../../utilities/fakedb";

const jobsLoader = async () => {
  // const loadedJobs = await fetch("jobs.json");
  const loadedJobs = await fetch(
    "https://api.jsonbin.io/v3/b/64347c09ebd26539d0a86118"
  );
  const Jobs = await loadedJobs.json();

  // if Job data is in database, you have to use async await
  const storedJob = getAppliedJob();
  // console.log(storedJob);

  const savedJob = [];

  for (const id in storedJob) {
    const addedJob = Jobs.record.find((pd) => pd.id === id);
    if (addedJob) {
      const quantity = storedJob[id];
      addedJob.quantity = quantity;
      savedJob.push(addedJob);
    }
  }

  // if you need to send two things
  // return [Jobs, savedJob]
  // another options
  // return { Jobs, Job: savedJob }

  return savedJob;
  // return Jobs;
};

export default jobsLoader;
