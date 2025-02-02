import {
  ClerkProvider,
  
  SignedIn,
  SignedOut,
  
} from '@clerk/nextjs'
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{
      variables:{colorPrimary:'#624cf5'}
    }}>
      <html lang="en">
        <body>
          <SignedOut >
            
          </SignedOut>
          <SignedIn>
            
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}