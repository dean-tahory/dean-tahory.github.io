import myLogo from "./LogoImage.png";
function App() {
  return (
    <div className="fixed bg-zinc-900 h-full w-full">
      <header className="w-full max-w-2xl px-4 lg:px-0 max-h-fit fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 justify-center items-center text-center">
        <img src={myLogo} alt="Torli"></img>
        <p className="text-white font-bold">Coming soon</p>
      </header>
    </div>
  );
}

export default App;
