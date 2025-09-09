import { prismaClient } from "db/client";

export default async function Home() {
const users = await prismaClient.user.findMany();
  return (
    <div >
      {JSON.stringify(users)}
    </div>
  );
}

// use to not generate the static page   INCREMENTAL STATIC GENERATION 
// export const revalidate=60;  //revalidate in 60 sec
//or 
export const dynamic='force-dynamic'