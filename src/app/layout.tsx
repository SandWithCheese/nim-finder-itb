import './globals.css'

export const metadata = {
  title: 'NIM Finder',
  description: 'NIM Finder Untuk Mahasiswa ITB',
  verification: {
    google: "fv_CNbFwrtMZ1V0Z2RV4p3t48ULjscLJ97A_P08DT8E"
  },
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
