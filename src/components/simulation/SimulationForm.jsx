const SimulationForm = () => {

    return (
        <div className="card-primary p-8">
            <h3 className="text-2xl font-semibold mb-6">
                Configura tu crédito
            </h3>
            <p className="mt-2">
                Ajusta los parámetros para simular tu financiamiento.
            </p>
            <div className="mt-10 flex min-h-125 items-center justify-center rounded-2xl border" style={{borderColor:"var(--color-border)"}}>
                <span style={{color: "var(--color-text-secondary)"}}>
                    Formualario
                </span>
            </div>
        </div>
    );

};

export default SimulationForm;