import React from "react";
import Navbar from "../../components/Navbar";

type Props = {};

export default function chat({}: Props) {
  return (
    <div>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <div>
          <p>Chat Page</p>
        </div>
      </main>
    </div>
  );
}
