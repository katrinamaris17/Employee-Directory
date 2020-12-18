import axios from "axios";

export default {
  // Generates up to 200 users when page is loaded
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};

