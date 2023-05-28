import { isDate } from "../../utils/util";

var validator = require('validator');

const simulatorEntity = (simulator) => {
    const { profileId, dateRecorded, cryptocurrency, euros, price, quantity } = simulator;
  
    if (!profileId) {
      throw new Error("Simulator must have profileId!");
    }
  
    if (!euros) {
      throw new Error("Simulator must have euros!");
    }

    if(!price) {
      throw new Error("Simulator email is not price!");
    }
  
    if (!quantity) {
      throw new Error("Simulator must have quantity!");
    }

    if (dateRecorded) {
      if(!isDate(dateRecorded)) throw new Error("Simulator dateRecorded is not valid!");
    }
  
    return Object.freeze({
      profile_id: profileId,
      dateRecorded,
      cryptocurrency,
      euros,
      price,
      quantity
    });
  };
  
export default simulatorEntity;
  