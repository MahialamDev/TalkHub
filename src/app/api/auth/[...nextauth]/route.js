import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const users = [
    {id: 1, name: "Mahialam", email:"mahialam407@gmail.com", password: 123456, role: 'user', image: 'https://rahat.com' }
]


export const authOptions = {
  // Configure one or more authentication providers
  providers: [   
    CredentialsProvider({
  
    name: 'Credentials',
    
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
      async authorize(credentials, req) {
          
          const user = users.find((u) => u.email.trim() === credentials.email.trim()) 
  
            return user;
    }
  })
  ],


callbacks: {
  async jwt({ token, account, user }) {
    // Persist the OAuth access_token to the token right after signin
    if (user) {
      token.id = user.id;
      token.email = user.email;
      token.image = user.image;
      token.role = user.role;
    }
    return token
  },

  async session({ session, token }) {
    session.user.id = token.id;
    session.user.role = token.role;
    session.user.email = token.email;
    session.user.image = token.image;
    return session;
  },
}

  
}




const handler = NextAuth(authOptions);

// 🔥 IMPORTANT: App Router export
export { handler as GET, handler as POST };