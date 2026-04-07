const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="grid min-h-screen grid-cols-[280px_1fr]">
        <aside className="flex h-screen flex-col border-r border-slate-200 bg-white">
          <div className="border-b border-slate-200 px-5 py-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600/10 ring-1 ring-blue-700/15">
                <span className="text-sm font-semibold text-blue-800">JZ</span>
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-tight text-blue-900">Jaime Zapata</p>
                <p className="text-xs text-slate-500">Administrador</p>
              </div>
            </div>
          </div>

          <nav className="flex flex-1 flex-col gap-2 px-3 py-4 text-sm">
            <div className="cursor-pointer rounded-xl bg-blue-50 px-3 py-2 font-medium text-blue-800 ring-1 ring-blue-700/10">
              Tablero
            </div>
            <div className="cursor-pointer rounded-xl px-3 py-2 text-slate-700 hover:bg-slate-50">Usuarios</div>
            <div className="cursor-pointer rounded-xl px-3 py-2 text-slate-700 hover:bg-slate-50">Ofertas</div>
            <div className="cursor-pointer rounded-xl px-3 py-2 text-slate-700 hover:bg-slate-50">Postulantes</div>

            <button
              type="button"
              className="mt-auto w-full cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-left text-sm font-medium text-blue-800 hover:bg-slate-50"
            >
              Cerrar sesión
            </button>
          </nav>
        </aside>

        <main className="h-screen overflow-auto">
          <div className="flex min-h-full flex-col bg-slate-50 px-6 py-6">
            <header className="flex flex-col gap-3 border-b border-slate-200 pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xl font-semibold tracking-tight text-blue-900">Tablero de control</p>
                <p className="mt-1 text-sm text-slate-600">Usuarios, ofertas y postulantes</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-blue-800 hover:bg-slate-50"
                >
                  Registrar usuario
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
                >
                  Crear oferta
                </button>
              </div>
            </header>

            <section className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs text-slate-500">Usuarios</p>
                <p className="mt-2 text-3xl font-semibold">8</p>
                <p className="mt-2 text-sm text-slate-600">Equipo activo</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs text-slate-500">Ofertas</p>
                <p className="mt-2 text-3xl font-semibold">5</p>
                <p className="mt-2 text-sm text-slate-600">Vacantes abiertas</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs text-slate-500">Postulantes</p>
                <p className="mt-2 text-3xl font-semibold">23</p>
                <p className="mt-2 text-sm text-slate-600">En proceso</p>
              </div>
            </section>

            <section className="mt-6 grid flex-1 gap-4 lg:grid-cols-[1.4fr_1fr]">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Tablero</p>
                  <span className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-blue-800">
                    Estado
                  </span>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">Revisión</p>
                    <p className="mt-1 text-2xl font-semibold">12</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">Entrevistas</p>
                    <p className="mt-1 text-2xl font-semibold">7</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">Oferta</p>
                    <p className="mt-1 text-2xl font-semibold">3</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">Contratado</p>
                    <p className="mt-1 text-2xl font-semibold">1</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Ofertas con más postulantes</p>
                  <span className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-blue-800">
                    Top
                  </span>
                </div>

                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                  <div className="grid grid-cols-12 gap-2 bg-slate-50 px-4 py-3 text-xs font-medium text-slate-600">
                    <div className="col-span-8">Oferta</div>
                    <div className="col-span-4 text-right">Postulantes</div>
                  </div>
                  <div className="divide-y divide-slate-200">
                    <div className="grid grid-cols-12 gap-2 px-4 py-3 text-sm">
                      <div className="col-span-8 font-medium text-slate-900">Product Manager</div>
                      <div className="col-span-4 text-right font-semibold text-blue-900">34</div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 px-4 py-3 text-sm">
                      <div className="col-span-8 font-medium text-slate-900">Frontend</div>
                      <div className="col-span-4 text-right font-semibold text-blue-900">21</div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 px-4 py-3 text-sm">
                      <div className="col-span-8 font-medium text-slate-900">Data Analyst</div>
                      <div className="col-span-4 text-right font-semibold text-blue-900">17</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
