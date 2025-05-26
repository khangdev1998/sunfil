import Topbar from "@/components/custom-ui/Topbar";
import Footer from "../Footer";
import Header from "../Header";
import { BackToTopButton } from "@/components/custom-ui/BackToTop";

export default function DefaultLayout({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Topbar />
      <Header />
      <main className="bg-[#F4F6F8] pt-6">
        <div className="container">{children}</div>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
