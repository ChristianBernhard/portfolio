import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }) {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 flex justify-center sm:px-8"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-15%,rgba(120,113,108,0.14),transparent_55%)] dark:bg-[radial-gradient(ellipse_90%_50%_at_50%_-10%,rgba(255,255,255,0.05),transparent_50%)]"
          aria-hidden="true"
        />
        <div className="relative flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white/80 shadow-[0_0_0_1px_rgba(28,25,23,0.06),0_1px_2px_rgba(28,25,23,0.04)] ring-1 ring-stone-200/70 backdrop-blur-[2px] dark:bg-zinc-900/75 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] dark:ring-white/[0.07]" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
