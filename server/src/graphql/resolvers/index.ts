import mutationResolvers from "./mutation";
import queriesResolvers from "./queries";

const resolvers = {
  ...queriesResolvers,
  ...mutationResolvers,
};

export default resolvers;
