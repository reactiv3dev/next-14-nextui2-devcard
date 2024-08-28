import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";
 
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
       <Card shadow="lg" >
        <CardBody>
          <div className="flex flex-col w-full p-5">
            <div className="flex justify-center">
              <Image 
                src="/dev_logo_icon.png"
                width={200}
                height={200}
                alt="dev logo"
                className="justify-center rounded-lg border-large"
              />
            </div>
            <div className="flex justify-center">
              <h2 className="text-3xl font-bold">Reactiv3 Dev</h2>
            </div>
            <div className="flex justify-center m-4 gap-4">
              <Chip 
                color="primary"
                variant="shadow"
                size="md"
                >
                Next.js 14
              </Chip>
              <Chip 
                color="primary"
                variant="shadow"
                size="md"
                >
                NextUI
              </Chip>
              <Chip 
                color="primary"
                variant="shadow"
                size="md"
                >
                YouTube
              </Chip>
            </div>
            <div className="flex justify-center max-w-sm">
              <p className="text-lg text-center font-semibold">
                I create software solutions that support and help empower small businesses.
                I also love cooking at my free time!
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 pt-4">
              <a href="https://youtube.com/@technovikingnik" target="_blank">
                <Card className="w-full" isHoverable>
                  <CardBody className="p-4">
                      <h3 className="self-center">YouTube</h3>
                  </CardBody>
                </Card>
              </a>
              <a href="https://github.com/reactiv3dev" target="_blank">
                <Card className="w-full" isHoverable>
                  <CardBody className="p-4">
                      <h3 className="self-center">Github</h3>
                  </CardBody>
                </Card>
              </a>
              <a href="https://thecodeletter.com" target="_blank">
                <Card className="w-full" isHoverable>
                  <CardBody className="p-4">
                      <h3 className="self-center">The Codeletter</h3>
                  </CardBody>
                </Card>
              </a>
            </div>
          </div>
        </CardBody>
       </Card>
    </section>
  );
}
