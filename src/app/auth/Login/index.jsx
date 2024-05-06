import loginImg from "../../../assets/login.jpg";
import LoginForm from "../../../components/LoginForm";
export default function Login() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto mt-4 px-3">
        <div className="grid grid-cols-12 items-center">
          <div className="lg:col-span-6 col-span-12">
            <div>
              <LoginForm />
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12 mt-8 lg:mt-0">
            <div>
              <img src={loginImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
