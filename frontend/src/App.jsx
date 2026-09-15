import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className="flex min-h-screen bg-[#111113]">
      <Sidebar />
      <main className="flex flex-1 items-center justify-center p-8">
        <p className="text-sm text-slate-400">Select a section from the sidebar.</p>
      </main>
    </div>
  );
}
