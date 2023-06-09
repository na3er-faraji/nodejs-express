import logger from '../../config/winston';

const simulatorData = ({ model }) => {
  async function getAllSimulator() {
    try {
      const simulator = await model.find().lean();
      return simulator;
    } catch (error) {
      logger.error(error);
    }
  }

  async function getSimulatorForProfile(profileId: string) {
    try {
      const query = { profile_id: profileId };
      var simulators = await model.find(query);
      return simulators;
    } catch (error) {
      logger.error(error);
    }
  }

  async function addSimulatorToProfile(data: object) {
    try {
      const simulator = await model.create(data);
      return simulator;
    } catch (error) {
      logger.error(error);
    }
  }

  return Object.freeze({
    getAllSimulator,
    addSimulatorToProfile,
    getSimulatorForProfile,
  });
};

export default simulatorData;
