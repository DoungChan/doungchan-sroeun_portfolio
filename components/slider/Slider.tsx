import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import lisbot from "../../public/web3/listbot.png";
import Image from "next/image";
import { type } from "os";

type Props = {
  data: any;
};
const Slider: React.FC<Props> = ({ data }) => {
  return (
    <Carousel autoPlay infiniteLoop stopOnHover={false} showThumbs={false}>
      {data.map((item: string, index: number) => (
        <div
          key={index}
          className="justify-center items-center rounded-md overflow-hidden"
        >
          <Image
            src={item}
            alt={`image ${index + 1}`}
            className="w-full h-full object-cover rounded-md"
            width={1000}
            height={600}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
