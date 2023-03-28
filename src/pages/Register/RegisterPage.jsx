import Footer from '@/components/Footer/Footer';
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import Header from '@/components/Header/Header';

export default function RegisterPage(props) {
  return (
    <div className="RegisterPage">
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  );
}
