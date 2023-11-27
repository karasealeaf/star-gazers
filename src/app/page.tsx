import StarGazers from "./StarGazers";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Welcome to my site!</h2>
      {/*@ts-ignore-error Server Component */}
      <StarGazers />
    </div>
  );
}
