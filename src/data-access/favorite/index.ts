import  model  from "../../models/favorite";
import favoriteData from "./favorite.query";

const favoriteDB = favoriteData({ model });

export default favoriteDB;
