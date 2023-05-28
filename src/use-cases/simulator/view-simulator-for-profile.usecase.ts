const viewAllSimulatorForProfile = ({ simulatorDB }) => {
  return async function viewSimulatorsForProfile(info) {
    const { profileId } = info;
    const result = await simulatorDB.getSimulatorForProfile(profileId);
    return result;
  };
};

export default viewAllSimulatorForProfile;
