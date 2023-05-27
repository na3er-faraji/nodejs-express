import  model  from "../../models/profile";
import profileData from "./profile.query";

const profileDB = profileData({ model });

export default profileDB;
