import favoriteDB from "../data-access/favorite";
import profileDB from "../data-access/profile";
import simulatorDB from "../data-access/simulator";

import { connectToDatabase, disconnect } from "../models";

(async () => {
  connectToDatabase();

  const profile = await profileDB.addProfile(
    `String`,
    `String`,
    `String`,
    `123`,
    `String`,
    `String`
  );

  await simulatorDB.addSimulatorToProfile({
    profile_id: profile._id,
    dateRecorded: `01/05/2021`,
    cryptocurrency: `String`,
    euros: `123`,
    price: `123`,
    quantity: `123`,
  });

  await favoriteDB.addFavorite(
    profile._id,
    `String`,
    `String`,
    `String`,
    `String`
  );

  disconnect();
})();
