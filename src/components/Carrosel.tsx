import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Carrosel() {
  return (
    <Carousel className="flex justify-between">
      <div className="flex gap-3 px-20 pb-4">
        <CarouselPrevious className="right-0 top-0" />
        <CarouselNext className="right-0 top-0" />
      </div>
      <CarouselContent className="flex space-x-4">
        <CarouselItem className="ml-8 basis-48 cursor-pointer opacity-50 transition delay-75 hover:opacity-90">
          <img src="src/assets/images/1.png" />
        </CarouselItem>

        <CarouselItem className="basis-48 cursor-pointer opacity-50 transition delay-75 hover:opacity-90">
          <img src="src/assets/images/2.png" />
        </CarouselItem>

        <CarouselItem className="basis-48 cursor-pointer opacity-50 transition delay-75 hover:opacity-90">
          <img src="src/assets/images/3.png" />
        </CarouselItem>

        <CarouselItem className="basis-48 cursor-pointer">
          <img src="src/assets/images/8.png" />
        </CarouselItem>

        <CarouselItem className="basis-48 cursor-pointer opacity-50 transition delay-75 hover:opacity-90">
          <img src="src/assets/images/5.png" />
        </CarouselItem>

        <CarouselItem className="basis-48 cursor-pointer opacity-50 transition delay-75 hover:opacity-90">
          <img src="src/assets/images/6.png" />
        </CarouselItem>

        <CarouselItem className="basis-48 cursor-pointer opacity-50 transition delay-75 hover:opacity-90">
          <img src="src/assets/images/7.png" />
        </CarouselItem>

        <CarouselItem className="basis-48 cursor-pointer opacity-50 transition delay-75 hover:opacity-90">
          <img src="src/assets/images/4.png" />
        </CarouselItem>

        <CarouselItem className="basis-48 cursor-pointer opacity-50 transition delay-75 hover:opacity-90">
          <img src="src/assets/images/9.png" />
        </CarouselItem>

        <CarouselItem className="basis-48 cursor-pointer opacity-50 transition delay-75 hover:opacity-90">
          <img src="src/assets/images/10.png" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
