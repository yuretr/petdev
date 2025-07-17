import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr';
import dogImg from '../../../public/hero-dog.webp';
import catImg from '../../../public/cat-hero.png';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="bg-[#E84C3D] text-white relative overflow-hidden">
      {/* relative e overflow-hidden, é pra caso passe o espaço, não ficar criando a setinha pra ir pra direita na página */}

      <div>
        <Image
          src={dogImg}
          alt="Foto do cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        {/* mx-auto da um espaço na esquerda e na direita automatico */}

        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          {/* article controla um ao lado do outro */}

          <div className="space-y-6">
            <h1
              data-aos="fade-down"
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
            >
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p data-aos="fade-right" className="lg:text-lg">
              Oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>

            <a
              data-aos="fade-up"
              data-aos-delay="400"
              href={`https://wa.me/55119999999999?text=Oi, vim pelo site Pet Shop Dev`}
              target="_blank"
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
              rel="noreferrer"
            >
              {/* w-fit é pra ele pegar apenas o tamanho do elemento */}
              <WhatsappLogoIcon className="w-5 h-5" />
              Contato via WhatsApp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{' '}
                de desconto na primeira compra
              </p>

              <div className="flex mt-4">
                <div className="w-32 hidden lg:block">
                  <Image
                    src={catImg}
                    alt="Foto do gato"
                    quality={100}
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            {/* hidden deixa o objeto desabilitado pra aparecer, e com o md:block ele reaparece com a tela maior */}
            <Image
              src={dogImg}
              alt="Foto do dog"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
