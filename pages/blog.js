import Head from "next/head";
import Link from "next/link";

const blog = () => {
    return (
        <div>
          <Head>
            <title>Blog Page</title>
          </Head>

          <Link href="/" className="mx-9 text-3xl">Go Back</Link>
          <h1 className="text-5xl text-center">This Blog Page</h1> 
          
        </div>
    );
};

export default blog;