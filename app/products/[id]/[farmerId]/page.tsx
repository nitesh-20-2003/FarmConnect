import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
// import type { Metadata } from "next";
// type tParams = Promise<{ id: string }>;
import {MeetingSchedulerForm} from './calendar'
import UserIcon from "/public/UserIcon.svg";
async function SingleProductPage() {
  
//  const data=await props.params;
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
              src={UserIcon}
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
            <h1 className="text-3xl font-bold mb-4">Farmers Info</h1>
            <p className="text-muted-foreground leading-7">
              Farmers are the backbone of our economy, ensuring food security
              and sustainability. Despite facing unpredictable weather,
              fluctuating market prices, and limited resources, they continue to
              provide essential produce to millions. Supporting farmers means
              strengthening rural communities and promoting healthier, local
              food systems.
            </p>

            <p className="text-muted-foreground leading-7">
              Additional information about the farmer can be added here.
            </p>
          </div>

          <div className="mt-5">
            <MeetingSchedulerForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
