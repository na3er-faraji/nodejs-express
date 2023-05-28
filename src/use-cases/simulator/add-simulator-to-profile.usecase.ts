const addSimulatorToProfile = ({ simulatorDB, simulatorEntity }) => {
    return async function postSimulatorForProfile(info) {
      const result = simulatorEntity(info);
      
      const data = await simulatorDB.addSimulatorToProfile(result);

      return {
        msg: "Simulator Added Successfully",
        data: data
      };
    };
  };

export default addSimulatorToProfile;
  