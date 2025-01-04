import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b-2 border-solid border-gray-300 rounded-b-3xl shadow-md">
      <div className="flex justify-between w-5/6 mx-auto py-4">
        <h1 className="text-3xl">
          <Link href="/">Prasaku🖋️</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
