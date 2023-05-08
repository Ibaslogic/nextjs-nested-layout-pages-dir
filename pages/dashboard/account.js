import RootLayout from '@/components/Layout';
import DashboardLayout from '@/components/DashboardLayout';

const Account = () => {
  return <div>Account screen</div>;
};

Account.getLayout = (page) => (
  <RootLayout>
    <DashboardLayout>{page}</DashboardLayout>
  </RootLayout>
);

export default Account;
