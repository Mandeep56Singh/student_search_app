import { StudentSearch } from "./components/Search/StudentSearch";

function App() {
  return (
    <div className="flex flex-col items-center p-8 gap-4 max-w-[580px] mx-auto">
      <h1 className="text-3xl">Student Search App</h1>
      <StudentSearch></StudentSearch>
    </div>
  );
}

export default App;
