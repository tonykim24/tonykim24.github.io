import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import { Stack } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

const pstart = "<projects>";
const pend = "</projects>";
const astart = "<about>";
const aend = "</about>";
const sstart = "<socials>";
const send = "</socials>";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main
        className={`flex flex-col items-center justify-between ${inter.className}`}
      >
        <Stack>
          <div>
            <p>Welcome to Tony's page</p>
          </div>
          <div className="projectDiv">
            <h1>{pstart}</h1>
            <div></div>
            <h1>{pend}</h1>
          </div>
          <div className="aboutDiv">
            <p>{astart}</p>
            <div></div>
            <p>{aend}</p>
          </div>
          <div className="socialDiv">
            <p>{sstart}</p>
            <div></div>
            <p>{send}</p>
          </div>
        </Stack>
      </main>
    </div>
  );
}
