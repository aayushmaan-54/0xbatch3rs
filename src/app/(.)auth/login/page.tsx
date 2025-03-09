import LoginForm from "@/app/auth/_components/login-form";
import Modal from "@/components/modal/modal";


export default function LoginModal() {

  return (
    <>
      <Modal>
        <LoginForm />
      </Modal>
    </>
  )
}