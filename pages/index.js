import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Head>
        <title>FALAB</title>
        <meta
          name="description"
          content="Hacemos proyectos por y para mujeres"
        />
      </Head>
      <nav className="sm:flex justify-between mx-10 my-2">
        <div><h2 className="text-center sm:text-left text-3xl font-bold">FALAB</h2></div>
        <div className="bg-primary px-10 py-2 text-white text-center mt-2 sm:mt-0">
          <Link href="/">
            Agéndanos aquí
          </Link>
        </div>
      </nav>
      <main className="sm:flex flex-row mx-10 my-10 sm:my-40 h-full">
        <div className="text-left mx-auto">
          <h2 className="text-lg">Creamos proyectos digitales.</h2>
          <h1 className="text-xl sm:text-6xl font-semibold">Proyectos hechos por y para mujeres</h1>
          <p className="text-md sm:text-xl font-light mt-2 sm:mt-5">Mira nuestros proyectos <Link href=""><span  className="underline underline-offset-1 cursor-pointer">aquí</span></Link></p>
        </div>
        <div className="mx-auto sm:mt-0 mt-10">
          <Image src="/icon.svg" alt="Mujeres ícono" width="800px" height="400px" />
        </div>
      </main>
    </div>
  );
}
