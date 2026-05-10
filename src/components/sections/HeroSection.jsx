const HeroSection = () => {
    return (
        <section className="relative overflow-hidden py-22">
            <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full blur-3xl" style={{ background: "rgba(212, 255, 0, 0.08)"}} />
            <div className="container-primary relative z-10">
                <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
                    <div className="mb-8 rounded-full border px-5 py-2 text-sm font-medium" style={{ background: "var(--gradient-primary)", borderColor:"rgba(212,255,0,0.15)", color:"var(--color-primary)"}}>
                        ⚡ Financiamiento para movilidad eléctrica
                    </div>
                    <h2 className="section-title max-w-4xl">
                        Simula tu crédito para <br /> <span style={{color:"var(--color-primary)"}}> vehículos eléctricos </span>
                    </h2>
                    <p className="section-description mt-8 max-w-2xl">
                        Te aprobamos aunque otros no lo hagan. Calcula tu cuota mensual, <br /> visualiza tu plan de pago y solicita tu financiamiento hoy mismo.
                    </p>
                    <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                        <button className="button-primary">
                            Simular credito
                        </button>
                        <button className="button-secondary">
                            Obtener información
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;