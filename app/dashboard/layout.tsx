import Aside from "../_components/Aside";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex">
        <Aside />
        {children}
      </div>
    );
  }