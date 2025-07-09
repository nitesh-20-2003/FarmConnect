import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "@/components/global/SectionTitle"
export function AccordionDemo() {
  return (
    <div className="mt-12">
      <SectionTitle text={"frequently asked questions"} />
      <Accordion type="single" collapsible className="w-full ">
        <AccordionItem value="item-1">
          <AccordionTrigger> What is FarmConnect?</AccordionTrigger>
          <AccordionContent>
            FarmConnect is a digital platform that connects farmers with buyers,
            suppliers, and experts. It helps farmers sell their produce
            directly, buy farming inputs at fair prices, and access modern
            agricultural advice — all in one place.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Who can use FarmConnect?</AccordionTrigger>
          <AccordionContent>
            FarmConnect is designed for farmers, wholesale buyers, local
            retailers, and agriculture service providers. Anyone looking to buy,
            sell, or get help with farming can sign up and use the platform.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            {" "}
            How do I sell my crops through FarmConnect?
          </AccordionTrigger>
          <AccordionContent>
            Once you’re registered, go to your dashboard, click Add Product,
            enter crop details, set your price, and publish the listing.
            Interested buyers can contact you directly through the platform.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger> How are payments handled?</AccordionTrigger>
          <AccordionContent>
            FarmConnect facilitates secure payments through trusted gateways.
            Payments can be made directly through the app or arranged offline
            between farmer and buyer, depending on local preferences.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
