import Link from "next/link";
export default function Home() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link href="./">Home</Link>
        </li>
        <li>
          <Link href="./about">About</Link>
        </li>
        <li>
          <Link href="./contact">Contact</Link>
        </li>
        <li>
          <Link href="./contact/services" target="_blank">Services</Link>
        </li>
      </ul>
      <h1 className="pages">This is my Home Page</h1>
    </div>
  );
}
