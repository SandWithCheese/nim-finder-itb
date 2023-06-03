import './globals.css'

export const metadata = {
  title: 'NIM Finder',
  description: 'NIM Finder Untuk Mahasiswa ITB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
