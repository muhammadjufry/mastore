export default `
input UserInput {  
  name: String!
  username: String!
  email: String!
  password: String!
  confirmPassword: String!
  cartId: String!
  orderId: String!
  phoneNumber: String!
  address: String!
  following: String!
  follower: String!
  userTokenLogin: String!
}

input ProductsInput {
  image: String!
  name: String!
  price: String!
  variants: [String!]!
  description: String!
  stock: String!
  productSeller: String!
  productSource: String!
  sold: String!
  star5: String!
  star4: String!
  star3: String!
  star2: String!
  star1: String!
  rating: String!
  sellerId: String!
  userRatingId: String!
}

input OrdersInput {
  image: String!
  name: String!
  price: String!
  amount: String!
  variants: String!
  paymentMethodName: String!
  shippingMethodName: String!
  shippingMethodPrice: String!
  deliveryAddress: String!
  sellerName: String!
  sellerId: String!
  userId: String!
  isCanceled: String!
}

input CartInput {
  image: String!
  name: String!
  price: String!
  amount: String!
  variants: String!
  sellerName: String!
  sellerId: String!
  userId: String!
}

input UserRatingInput {
  userFulName: String!
  userProfileImage: String!
  commentedDate: String!
  rating: String!
  ratingDescription: String!
  productId: String!
  sellerId: String!
}

input PaymentInfoInput {
  sendInvoicesToEmail: String!
  paymentCards: String!
  accountId: String!
}

input ChatListsInput {
  messages: [String!]!
  accountId: String!
}

input ChatDetailInput {
  sellerName: String!
  sellerProfile: String!
  sellerStatus: String!
  chatHistory: [String!]!
  accountId: String!
}

input SellersInput {
  sellerEmail: String!
  sellerName: String!
  sellerPic: String!
  sellerDescription: String!
  sellerRating: String!
  sellerStatus: String!
  sellerProductsSold: String!
  follower: String!
  following: String!
  dropshipStore: [String!]!
  sellerId: String!
}

input HelpQuestionsInput {
  userOrSellerName: String!
  userOrSellerPic: String!
  userOrSellerId: String!
  userOrSellerQuestion: String!
  postedDate: String!
  answerId: String!
}

input QuestionDetailInput {
  userOrSellerName: String!
  userOrSellerPic: String!
  userOrSellerId: String!
  userOrSellerQuestion: String!
  postedDate: String!
  answer: String!
  answerName: String!
  answerPic: String!
  answerId: String!
  answeredDate: String!
  questionId: String!
}
`;
