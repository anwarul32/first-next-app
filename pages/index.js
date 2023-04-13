import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>

      <Link href="/blog" className="mx-9 text-3xl">
        Blog
      </Link>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2 className="text-center text-[50px] text-white">
          Anwarul Hoque 82-8
        </h2>
        <Image
          src="/next.svg"
          alt="next-js logo"
          width={120}
          height={150}
          className="bg-white p-5"
        ></Image>
      </main>
    </div>
  );
}
