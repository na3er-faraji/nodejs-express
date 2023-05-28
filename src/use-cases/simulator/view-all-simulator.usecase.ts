const viewAllSimulators = ({ simulatorDB }) => {
    return async function viewSimulators() {
      const result = await simulatorDB.getAllSimulator();
      return result;
    };
  };
  
export default viewAllSimulators;
  