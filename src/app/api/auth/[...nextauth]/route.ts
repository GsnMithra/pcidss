import NextAuth, { Session } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

interface User {
    name: string;
    email: string;
    image: string;
    id: string;
    organizationName: string;
}

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_TOKEN || '',
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || '',
            clientSecret: process.env.GOOGLE_SECRET || '',
        }),
    ],
    callbacks: {
        session ({ session, user }: { session: Session, user: any }) {
            if (!user)
                session.user.organizationName = 'My Organization';
            else
                session.user.organizationName = (user as User).organizationName;
            return session;
        }
    }
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }