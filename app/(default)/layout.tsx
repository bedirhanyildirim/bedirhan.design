import ThemeAside from "@/components/theme/aside";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="content">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4">
        <ThemeAside />
        <main className="pt-8 md:pt-16 lg:pt-24 lg:w-1/2">{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
