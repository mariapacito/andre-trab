import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header / Navbar */}
      <header className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-bold tracking-tighter">minURL</h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <Link href="/planos">Planos</Link>
            <Link href="/recursos">Recursos</Link>
          </nav>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-md hover:bg-gray-50">
            Login
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800">
            Cadastre-se
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto text-center mt-20 px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
          Encurte. Personalize. Domine.
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          O encurtador de links mais confiável da internet.
        </p>

        {/* Card do Encurtador */}
        <div className="bg-white border border-gray-100 shadow-2xl rounded-xl p-8 text-left">
          <div className="flex gap-4 mb-6 border-b border-gray-100 pb-2">
            <button className="text-sm font-bold border-b-2 border-blue-600 pb-2">Encurtar um Link</button>
            <button className="text-sm font-medium text-gray-400 pb-2">Gerar QR code</button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">Cole o link longo aqui</label>
              <input 
                type="text" 
                placeholder="https://www.exemplodeurllonga.com.br/..."
                className="w-full p-3 mt-1 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">Personalize a URL: <span className="lowercase font-normal">https://min.com/</span></label>
              <input 
                type="text" 
                placeholder="Adicionar a URL personalizada aqui"
                className="w-full p-3 mt-1 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="w-full md:w-auto px-8 py-4 bg-indigo-950 text-white font-bold rounded-lg hover:bg-black transition-all">
              Encurtar link gratuitamente
            </button>
          </div>
        </div>

        {/* Footer info */}
        <p className="mt-8 text-sm text-gray-500">
          Cadastre-se. Seu plano gratuito inclui: 
          <span className="ml-2 font-medium">50 links curtos/mês • Links personalizados/mês • Cliques ilimitados</span>
        </p>
      </main>
    </div>
  );
}