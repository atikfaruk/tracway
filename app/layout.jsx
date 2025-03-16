import "./globals.css";
import { Noto_Sans_Bengali, Urbanist } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Providers from "./providers";

// font configs
const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-urbanist",
});

const noto = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  display: "swap",
  preload: true,
  variable: "--font-noto",
});

// meta data
export const metadata = {
  title: "Tracway: Book Flight, Hotel, Bus, Train, Tour Packages Online",
  description: "Tracway is a travel agency that provides the best travel experience.",
};

// root layout
const Layout = ({ children }) => {
  return (
    <html lang="en" className={`${urbanist.variable} ${noto.variable}`}>
      <body>
        <Providers>
          {/* header */}
          <Header />
          {/* main */}
          {children}
          {/* footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default Layout;

// localhost:3000
// localhost:3000/blog
// localhost:3000/blog/blog-details
// localhost:3000/packages
// localhost:3000/packages/package-details
// localhost:3000/about
// localhost:3000/contact
// localhost:3000/tracker
