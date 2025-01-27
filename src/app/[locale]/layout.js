import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Suspense } from "react";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Trendline Marketing",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt qui itaque quaerat possimus voluptas, illum ipsa, earum recusandae nobis dolore,",
  openGraph: {
    images: ``,
    title: "Trendline Marketing",
    url: "",
    site_name: "IMDb",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt qui itaque quaerat possimus voluptas, illum ipsa, earum recusandae nobis dolore,",
    email: "",
    phone_number: "201067439828",
    latitude: "30.9763086",
    longitude: "31.1595836",
    locality: "",
    countryName: "Egypt",
    streetAddress: "",
  },
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);
  const direction = locale === "ar" ? "rtl" : "ltr";
  return (
    <html lang={locale} dir={direction}>
      <body className={`${poppins.className} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <nav>
            <Navbar />
          </nav>
          {children}
          <footer>
            <Suspense>
              <Footer />
            </Suspense>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
