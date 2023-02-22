import db from "../database/dbconnect";

class userDAO {
  async createuser(userData: any) {
    const {
      name,
      email,
      user_id,
      phone_number,
      order_history_id,
      cart_id,
      isSeller,
      sellerId,
      isVerified,
      verifyToken,
      password,
      confirmPassword,
    } = userData;
    const user = await db()!("users").insert({
      name,
      email,
      user_id,
      phone_number,
      order_history_id,
      cart_id,
      isSeller,
      sellerId,
      isVerified,
      verifyToken,
      password,
      confirmPassword,
    });
    return user;
  }

  async fetchuser() {
    const result = await db()!("users").select().from("users");
    return result;
  }
}

export default new userDAO();
