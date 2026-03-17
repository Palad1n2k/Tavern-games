import HomePage from "./HomePage";

const MainPage = () => {
  const position = 'main';

  return (
    <main>
      <div className={`${position} container`}>
        <HomePage />
      </div>
    </main>
  );
};

export default MainPage;