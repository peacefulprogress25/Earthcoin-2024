import Footer from "./Footer";
import FooterV2 from "./FooterV2";
import Header from "./Header";

export default function BaseLayout({ children }) {
  return (
    <main className="flex flex-col">
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
      {/* <FooterV2 /> */}
    </main>
  );
}
