import Aside from "../_components/Aside";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex">
        <Aside />
        <main className="flex-1 ml-36">
          {children}
        </main>
      </div>
    );
  }