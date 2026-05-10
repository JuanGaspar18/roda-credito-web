const CreditSummary = () => {

    return (
        <div className="card-primary p-8">
            <h3 className="text-2xl font-semibold mb-6">
                Resumen de tu crédito
            </h3>
            <p className="mt-2">
                Aquí tienes un resumen de los términos de tu crédito simulado.
            </p>
            <div className="mt-10 flex min-h-125 items-center justify-center rounded-2xl border" style={{borderColor: "var(--color-border)"}}>
                <span style={{ color:  "var(--color-text-secondary)"}}>
                    Aquí irá el resumen
                </span>
            </div>
        </div>
    )

};

export default CreditSummary;