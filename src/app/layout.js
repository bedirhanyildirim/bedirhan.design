import './globals.css'

export const metadata = {
  title: 'Bedirhan Design | Welcome',
  description: 'Bedirhan "bedcodes" Yildirim projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <div className="w-full h-full flex justify-center p-4 lg:p-10">
            {children}
          </div>
      </body>
    </html>
  )
}
