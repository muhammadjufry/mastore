import userDAO from "../dao/user";

class userService {
  createuser(userData: any) {
    return userDAO.createuser(userData);
  }
  fetchuser() {
    return userDAO.fetchuser();
  }
}

export default new userService();
