import { ProvideFormContext } from "../context/FormContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <ProvideFormContext>
          {children}
        </ProvideFormContext>
      </body>
    </html>
  )
}
