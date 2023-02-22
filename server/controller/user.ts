import userService from "../service/user";

class userController {
  async createuser(userData: any) {
    try {
      const user = await userService.createuser(userData);
      return user;
    } catch (error) {
      console.error(error);
      return;
    }
  }
  async fetchuser() {
    try {
      const data = await userService.fetchuser();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new userController();
