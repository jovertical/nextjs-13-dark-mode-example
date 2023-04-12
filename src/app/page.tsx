import ColorSchemeToggleButton from '@/components/color-scheme-toggle-button';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-xs mx-auto">
        <h1 className="text-lg text-center text-zinc-900 dark:text-zinc-100">
          Dark mode example
        </h1>

        <p className="text-sm text-center text-zinc-700 dark:text-zinc-100">
          This is an example of how to implement dark mode in a Next.js app.
        </p>

        <div className="flex items-center justify-center mt-3">
          <ColorSchemeToggleButton></ColorSchemeToggleButton>
        </div>
      </div>
    </main>
  );
}
