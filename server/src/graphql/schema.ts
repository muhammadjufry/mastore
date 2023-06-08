import Inputs from "./inputs";

export default `
  ${Inputs}
  type User {
    id: ID!
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
    verficationCode: String!
    userTokenLogin: String!
  }

  type Products {
    id: ID!
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

  type Orders {
    id: ID!
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

  type Cart {
    id: ID!
    image: String!
    name: String!
    price: String!
    amount: String!
    variants: String!
    sellerName: String!
    sellerId: String!
    userId: String!
  }

  type UserRating {
    id: ID!
    userId: String!
    userFulName: String!
    userProfileImage: String!
    commentedDate: String!
    rating: String!
    ratingDescription: String!
    productName: String!
    sellerId: String!
  }

  type PaymentInfo {
    id: ID!
    sendInvoicesToEmail: String!
    paymentCards: String!
    accountId: String!
  }

  type ChatLists {
    id: ID!
    messages: [String!]!
    accountId: String!
  }

  type ChatDetail {
    id: ID!
    sellerName: String!
    sellerProfile: String!
    sellerStatus: String!
    chatHistory: [String!]!
    accountId: String!
  }

  type Sellers {
    id: ID!
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
    userId: String!
  }

  type HelpQuestions {
    id: ID!
    userOrSellerName: String!
    userOrSellerPic: String!
    userOrSellerId: String!
    userOrSellerQuestion: String!
    postedDate: String!
    answerId: String!
  }

  type QuestionDetail {
    id: ID!
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

  type Mutation {
    createUser(input: UserInput): User
    userLogin(email: String!, password: String!, confirmPassword: String!): User
    editUser(id: ID!, input: UserInput): User
    verifyUserOrSeller(verificationCode: String!): User
    deleteUser(id: ID!, username: String, email: String!): User
    createProduct(input: ProductsInput): Products
    editProduct(id: ID!, input: ProductsInput): Products
    followUserOrSeller(id: ID!, accountId: String!, followedAccountId: String!): User
    unfollowUserOrSeller(id: ID!, accountId: String!, unfollowdAccountId: String!): User
    addReviewProduct(id: ID!, userReviewId: String!, userReviewName: String!, userReviewDescription: String!, reviewRating: String!, reviewPostedDate: String!, sellerId: String!, productName: String!): Products
    deleteReviewProduct(id: ID!, userReviewId: String!, sellerId: String!, productName: String!): Products
    deleteProduct(id: ID!, productName: String!, sellerId: String!): Products
    createSellerAccount(input: SellersInput): Sellers
    editSellerAccount(id: ID!, input: SellersInput): Sellers
    deleteSellerAccount(id: ID!, sellerEmail: String!, sellerId: String!): Sellers
    addAnotherDropshipStoreToTheSellerAccount(id: ID!, sellerId: String!, dropshipStore: [String!]!): Sellers
    addOrIncrementProductToCart(id: ID!, userId: String!, productInfo: String!): Cart
    removeProductFromCart(id: ID!, productInfo: String, userId: String!): Cart
    addProductToOrder(id: ID!, productInfo: String, userId: String!): Orders
    cancelProductOrder(id: ID!, productName: String, userId: String!): Orders
    askQuestion(id: ID!, questionTittle: String!, questionDescription: String!, accountId: String!): QuestionDetail
    answerQuestion(id: ID!, questionTittle: String!, askerAccountId: String!, answerAccountId: String!, answerDescription: String!): QuestionDetail
  }  

  type Query {
    getUserDetail(id: Int!): [User]
    getProductDetail(id: Int!): [Products]
    searchProduct(searchQuery: String!): [Products]
    mostpopularProduct: [Products]
    productsForUser(userId: String!): [Products]
    orderListsForUser(userId: String!): [Orders]
    orderListsForSeller(sellerId: String!): [Orders]
    cart(userId: String!): [Cart]
    userRating(productName: String!, sellerId: String!): [UserRating]
    paymentInfo(accountId: String!): [PaymentInfo]
    getUserChatLists(userId: String!): ChatLists
    getSellerChatLists(sellerId: String!): ChatLists
    getUserChatDetailHistory(id: ID!, userId: String!): ChatDetail
    getSellerChatDetailHistory(id: ID!, sellerId: String!): ChatDetail
    seller(id: Int!): [Sellers]
    getAllQuestions: HelpQuestions
    searchQuestion(searchQuery: String!): HelpQuestions
    questionDetail(id: Int!): [QuestionDetail]
  }
  `;
