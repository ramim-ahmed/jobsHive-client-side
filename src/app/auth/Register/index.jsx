import Registerform from "../../../components/Registerform";
import loginImg from "../../../assets/login.jpg";
export default function Register() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto mt-4 px-3">
        <div className="grid grid-cols-12 items-center">
          <div className="lg:col-span-6 col-span-12">
            <div>
              <Registerform />
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
