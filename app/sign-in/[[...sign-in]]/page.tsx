import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-[url('https://img.freepik.com/free-vector/colorful-gradient-wavy-background_23-2149113045.jpg')]">
      <SignIn />
    </div>
  );
};

export default SignInPage;
