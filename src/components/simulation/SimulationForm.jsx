import { useState } from "react";

import VehicleTypeSelector from "./form/VehicleTypeSelector";
import RangeSlider from "./form/RangeSlider";
import InstallmentSelector from "./form/InstallmentSelector";

const SimulationForm = () => {

    const [vehicleType, setVehicleType] =
        useState("Moto eléctrica");

    const [vehicleValue, setVehicleValue] =
        useState(8000000);

    const [downPayment, setDownPayment] =
        useState(2000000);

    const [installments, setInstallments] =
        useState(36);

    const isInvalidDownPayment =
        downPayment > vehicleValue;

    return (
        <div className=" card-primary p-8 lg:p-10 " >

            <div className="mb-10">
                <h3 className=" text-2xl font-semibold ">
                    Configura tu crédito
                </h3>
                <p className=" mt-3 text-sm " style={{ color: "var(--color-text-secondary)" }} >
                    Ajusta los parámetros para simular tu financiamiento.
                </p>
            </div>

            <div className=" flex flex-col gap-10 ">
                <VehicleTypeSelector selectedVehicle={vehicleType} onSelect={setVehicleType} />
                <RangeSlider label="Valor del vehículo" value={vehicleValue} min={500000} max={50000000} step={500000} onChange={(e) => setVehicleValue( Number(e.target.value) ) } />
                <div>
                    <RangeSlider label="Cuota inicial" value={downPayment} min={0} max={50000000} step={500000} onChange={(e) => setDownPayment( Number(e.target.value) ) } />
                    {
                        isInvalidDownPayment && (
                        <p className=" mt-3 text-sm " style={{ color: "#ef4444" }} >
                            La cuota inicial no puede ser mayor al valor del vehículo.
                        </p>
                        )
                    }
                </div>
                <InstallmentSelector value={installments} onChange={setInstallments} />

                <button disabled={isInvalidDownPayment} className=" button-primary mt-4 w-full disabled:opacity-50 disabled:cursor-not-allowed ">

                    Calcular financiamiento

                </button>

            </div>

        </div>
    );
};

export default SimulationForm;