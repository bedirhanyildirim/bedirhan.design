import './globals.css'

export const metadata = {
  title: 'Bedirhan Design | Portfolio',
  description: 'Welcome to Bedirhan "bedcodes" Yildirim projects portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <div className="w-full h-full flex justify-center px-4 lg:px-20">
            {children}
          </div>
      </body>
    </html>
  )
}
