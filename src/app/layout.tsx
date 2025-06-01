import "./globals.scss";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spiderverse",
  description:
    "Criando um carrossel parallax do Aranhaverso com React, Next.js e Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <Image
            src="icons/menu.svg"
            alt="Opções de menu"
            width={36}
            height={25}
            className="menu"
          />
          <Link href={"/"}>
            <Image
              src="/spider-logo.svg"
              alt="logo Spiderman"
              width={260}
              height={70}
              className="logo"
            />
          </Link>
          <Image
            src="icons/user.svg"
            alt="Login"
            width={36}
            height={36}
            className="user"
          />
        </header>
        {children}
      </body>
    </html>
  );
}
