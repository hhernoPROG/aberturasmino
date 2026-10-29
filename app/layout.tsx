export const metadata = {
  title: 'Aberturas Miño - Sistema de Gestión',
  description: 'Sistema de Gestión de Stock y Pedidos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
