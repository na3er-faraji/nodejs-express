import  model  from "../../models/favorite";
import profileData from "./profile.query";

const profileDB = profileData({ model });

export default profileDB;
