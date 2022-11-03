
import Image from "next/image";

// Images
import PreviewMobileImg from '../assets/iPhone-Mockup.png';
import LogoImg from "../assets/logo.svg";
import UsersAvatarExampleImg from "../assets/users.png";
import IconChackeImg from "../assets/check-icon.svg";


interface IHomeProps {
  pools: {
    count: number
  };
}

export default function Home(props: IHomeProps) {


  return (
    <div className="
      max-w-[1124px] h-screen
      mx-auto
      grid grid-cols-2 items-center gap-28">
      <main>
        <Image
          src={LogoImg}
          alt="eSports Bet"
          title="eSports Bet"
        />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio <span className="text-yellow-500"> bolão eSports</span>
          e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={UsersAvatarExampleImg} alt="Imagens de usuarios"/>
          <strong className="text-gray-100 text-xl">
            <span className="text-yellow-500">+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form className="mt-10 flex gap-2">
          <input
            className="
              flex-1
              px-6 py-4
              bg-white
              rounded border border-gray-600
              text-sm text-gray-800
              outline-offset-1 outline-purple-200"
            type="text"
            placeholder="Qual nome do seu bolão"
          />
          <button
            className="
            bg-purple-200
            px-6 py-4
            rounded
            text-white font-bold text-sm uppercase
            hover:bg-purple-300
            "
            type="submit"
          >
            Criar meu bolão 
          </button>
        </form>
        <p className="mt-4 text-sm text-white leading-relaxed">Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>

        <div className="
          mt-10 pt-10
          border-t border-purple-600
          flex justify-between items-center
          text-gray-100
          ">
          <div className="flex items-center gap-6">
            <Image src={IconChackeImg} alt="Icone de check"/>
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div className="w-px h-14 bg-purple-600"></div>
          <div className="flex items-center gap-6">
            <Image src={IconChackeImg} alt="Icone de check"/>
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+2.034</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image
        src={PreviewMobileImg}
        title="dois celulares exibindo uma prévia da aplicação móvel eSports Bet."
        alt="dois celulares exibindo uma prévia da aplicação móvel eSports Bet." 
        quality={100}
      />
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/pools/count')
  const data = await response.json();

  return {
    props: {
      pools: {
        count: data?.count || 0,
      }
    }
  }
}