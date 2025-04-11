import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import type { Metadata } from "next";
type tParams = Promise<{ id: string }>;
import {CalendarForm} from './calendar'
async function SingleProductPage(props: { params: tParams }) {
 const data=await props.params;
//  console.log(data.farmerId);
// const id=data.farmerId;
//* clerk id is stored in  the farmId prop here
  const user = await currentUser();
  console.log(user);
  const profileImage = user?.imageUrl;

  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Responsive Image Section */}
        <div className="w-full relative aspect-square max-w-[500px] mx-auto">
          {profileImage ? (
            <Image
              src={profileImage}
              alt="company"
              fill
              className="object-cover rounded-xl shadow-md"
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              priority
            />
          ) : (
            <div className="w-full h-full bg-muted rounded-xl flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
        </div>

        {/* Text Content Section */}
        <div>
          <div>
            <h1 className="text-3xl font-bold mb-4">Farmer's Info</h1>
            <p className="text-muted-foreground leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quia, quis a facilis consequatur excepturi at quaerat laborum aut
              dolores. Cumque sint voluptatem soluta quisquam itaque ipsum nihil
              eveniet doloremque!
            </p>

          </div>

          <div className="mt-5">
            <CalendarForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
