import footerBackground from '../../../assets/images/footer_background_desktop.png'

export default function Footer() {
  return (
    <footer className="relative isolate md:mt-16">
      {/* Background image */}
      <div
        className="absolute inset-x-0 -top-10 md:-top-24 bottom-0 -z-10 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${footerBackground})`,
          backgroundPosition: 'center 85%',
        }}
      />

      {/* Gradient transition */}
      <div className="absolute inset-x-0 -top-10 md:-top-24 h-24 -z-10 bg-linear-to-b from-slate-50 to-transparent " />

      {/* Footer content */}
      <div className="flex h-16 md:h-48 items-center justify-center px-6">
        <div className="-translate-y-8 hidden md:block">
          <p className="text-left font-serif  font-bold italic leading-relaxed text-blue-950 md:text-xl lg:text-2xl ">
            “ Des idées au code,
            <br />
            des projets aux personnes. ”
          </p>

          <div className="mt-2 h-1 w-9 rounded-full bg-blue-500" />
        </div>
      </div>
    </footer>
  )
}
