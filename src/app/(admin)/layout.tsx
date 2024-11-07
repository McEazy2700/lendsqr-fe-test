import AdminLayout from "@/components/layouts/admin";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default Layout;
