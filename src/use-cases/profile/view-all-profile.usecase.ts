const viewAllProfiles = ({ profileDB }) => {
    return async function viewProfiless() {
      const result = await profileDB.getAllProfile();
      return result;
    };
  };
  
export default viewAllProfiles;
  