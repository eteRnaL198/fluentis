type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <main className="bg-blue-50 grow">
      <div className="flex flex-col w-5/6 mx-auto">{children}</div>
    </main>
  );
};

export default Main;
