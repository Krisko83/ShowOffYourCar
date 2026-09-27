

export default function AddCar() {

    return (
        <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-4xl">
                <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200">

                    {/* Header */}
                    <div className="border-b border-slate-200 bg-white px-6 py-7 sm:px-10">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                Unesite karakteristike automobila
                            </h1>

                            <p className="mt-2 text-sm text-slate-500">
                                Unesite podatke o vozilu kako biste objavili svoj oglas.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="px-6 py-8 sm:px-10 sm:py-10">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">

                            {/* Stanje */}
                            <div>
                                <label
                                    htmlFor="stanje"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Stanje
                                </label>

                                <select
                                    id="stanje"
                                    className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                >
                                    <option value="polovno">Polovno vozilo</option>
                                    <option value="novo">Novo vozilo</option>
                                </select>
                            </div>

                            {/* Marka */}
                            <div>
                                <label
                                    htmlFor="marka"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Marka
                                </label>

                                <input
                                    type="text"
                                    id="marka"
                                    placeholder="npr. BMW"
                                    className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                />
                            </div>

                            {/* Model */}
                            <div>
                                <label
                                    htmlFor="model"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Model
                                </label>

                                <input
                                    type="text"
                                    id="model"
                                    placeholder="npr. Serija 3"
                                    className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                />
                            </div>

                            {/* Godište */}
                            <div>
                                <label
                                    htmlFor="godiste"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Godište
                                </label>

                                <input
                                    type="number"
                                    id="godiste"
                                    placeholder="npr. 2020"
                                    className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                />
                            </div>

                            {/* Kilometraža */}
                            <div>
                                <label
                                    htmlFor="kilometraza"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Kilometraža
                                </label>

                                <div className="relative">
                                    <input
                                        type="number"
                                        id="kilometraza"
                                        placeholder="npr. 125000"
                                        className="h-12 w-full rounded-xl border border-slate-300 px-4 pr-12 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />

                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400">
                                        km
                                    </span>
                                </div>
                            </div>

                            {/* Cena */}
                            <div>
                                <label
                                    htmlFor="cena"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Cena
                                </label>

                                <div className="relative">
                                    <input
                                        type="number"
                                        id="cena"
                                        placeholder="npr. 18.500"
                                        className="h-12 w-full rounded-xl border border-slate-300 px-4 pr-10 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />

                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400">
                                        €
                                    </span>
                                </div>
                            </div>

                            {/* Gorivo */}
                            <div>
                                <label
                                    htmlFor="gorivo"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Gorivo
                                </label>

                                <select
                                    id="gorivo"
                                    className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                >
                                    <option value="dizel">Dizel</option>
                                    <option value="benzin">Benzin</option>
                                    <option value="tng">Benzin + Gas (TNG)</option>
                                    <option value="cng">Benzin + Metan (CNG)</option>
                                    <option value="elektricni">Električni pogon</option>
                                    <option value="hibridni">Hibridni pogon</option>
                                </select>
                            </div>

                            {/* Kubikaža */}
                            <div>
                                <label
                                    htmlFor="kubikaza"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Kubikaža
                                </label>

                                <div className="relative">
                                    <input
                                        type="number"
                                        id="kubikaza"
                                        placeholder="npr. 1998"
                                        className="h-12 w-full rounded-xl border border-slate-300 px-4 pr-14 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />

                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400">
                                        cm³
                                    </span>
                                </div>
                            </div>

                            {/* Snaga */}
                            <div>
                                <label
                                    htmlFor="snaga"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Snaga motora
                                </label>

                                <div className="relative">
                                    <input
                                        type="number"
                                        id="snaga"
                                        placeholder="npr. 190"
                                        className="h-12 w-full rounded-xl border border-slate-300 px-4 pr-12 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />

                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400">
                                        KS
                                    </span>
                                </div>
                            </div>

                            {/* Pogon */}
                            <div>
                                <label
                                    htmlFor="pogon"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Vrsta pogona
                                </label>

                                <select
                                    id="pogon"
                                    className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                >
                                    <option value="prednji">Prednji</option>
                                    <option value="zadnji">Zadnji</option>
                                    <option value="na_sve_tockove">4x4</option>
                                </select>
                            </div>

                            {/* Menjač */}
                            <div>
                                <label
                                    htmlFor="menjac"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Menjač
                                </label>

                                <select
                                    id="menjac"
                                    className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                >
                                    <optgroup label="Manuelni menjač">
                                        <option value="m5">5 brzina</option>
                                        <option value="m6">6 brzina</option>
                                    </optgroup>

                                    <optgroup label="Automatski menjač">
                                        <option value="a5">5 brzina</option>
                                        <option value="a6">6 brzina</option>
                                    </optgroup>
                                </select>
                            </div>

                            {/* Broj vrata */}
                            <div>
                                <label
                                    htmlFor="vrata"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Broj vrata
                                </label>

                                <select
                                    id="vrata"
                                    className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                >
                                    <option value="2/3">2/3 vrata</option>
                                    <option value="4/5">4/5 vrata</option>
                                </select>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="mt-10 flex justify-center border-t border-slate-200 pt-8">
                            <button
                                type="button"
                                className="w-full rounded-xl bg-blue-600 px-10 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 focus:outline-none focus:ring-4 focus:ring-blue-500/20 active:scale-[0.98] sm:w-auto"
                            >
                                Pošalji oglas
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}