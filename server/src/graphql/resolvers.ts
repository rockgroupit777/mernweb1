import User from '../models';

export const resolvers = {
    Query: {
        users: async () => await User.find(),
    },
    Mutation: {
        addUser: async (_: any, { username }: { username: string }) => {
            const user = new User({ username });
            return await user.save();
        },
    },
};

