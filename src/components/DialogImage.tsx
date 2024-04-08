import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "./ui/button";

const DialogImage = ({imageSrc, title}:{imageSrc:string, title: string}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="absolute top-0 left-0 bg-gray-500 px-3 py-1 text-white rounded-none rounded-br-lg rounded-tr-none opacity-70 block md:invisible">
          View Image
        </Button>
      </DialogTrigger>
      <DialogContent className="h-full w-full flex justify-center items-center bg-gray-200">
        <DialogHeader>
          <DialogDescription>
            <Image
              src={imageSrc}
              alt={title}
              height={1505}
              width={822}
              className="rounded-xl rotate-90 scale-150"
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogImage;
