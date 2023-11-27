//https://api.github.com/repos/vercel/next.js

import Image from "next/image";

export default async function StarGazers() {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/Europe/London"
  );
  const data = await res.json();

  return (
    <div>
      <p>{data.stargazers_count} People gazing at Next.js</p>
    </div>
  );
}
