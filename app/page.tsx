// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
// import { FaHome } from 'react-icons/fa';
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Developer <span className="text-accent">/</span> Security Specialist</span>
            <h1 className="h1 mb-6">Hello I&apos;m<br /><span className="text-accent">Anthony Fatato</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">I excel in maintaining security posture as well as creating dynamic websites and applications </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">

              <a href="https://drive.google.com/file/d/1e2UIEx181wWvudSY4YYVBTLhBhhg1Ai2/view?usp=sharing">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2">

                  <span>Download Resume</span>
                  <FiDownload className="text-xl"
                  />
                </Button>
              </a>


              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-bases hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* img */}

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
            <Stats />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home