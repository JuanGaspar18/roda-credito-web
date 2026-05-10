import { Bike, Motorbike } from "lucide-react";

const VEHICLES = [
    {
        id: "Bicicleta eléctrica",
        name: "Bicicleta eléctrica",
        rate: "5%",
        icon: Bike,
    },
    {
        id: "Moto eléctrica",
        name: "Moto eléctrica",
        rate: "1.3%",
        icon: Motorbike,
    },
];

const VehicleTypeSelector = ({ selectedVehicle, onSelect }) => {
    return (
        <div className="space-y-4">
            <label className="text-sm font-medium">
                Tipo de vehículo
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
                {VEHICLES.map((vehicle) => {
                    const Icon = vehicle.icon;
                    const isActive = selectedVehicle === vehicle.id;
                    return (
                        <button key={vehicle.id} type="button" onClick={() => onSelect(vehicle.id)} className="rounded-3xl border p-5 text-left transition-all duration-300" style={{borderColor: isActive ? "var(--color-primary)" : "var(--color-border)", background: isActive ? "var(--gradient-primary)" : "var(--color-surface)", boxShadow: isActive ? "var(--glow-primary)" : "none"}}>
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{background: isActive ? "var(--color-primary)" : "var(--color-surface-secondary)"}}>
                                    <Icon size={28} color={ isActive ? "#000" : "#FFF" } />
                                </div>
                                <div>
                                    <h3 className="font-semibold">
                                        {vehicle.name}
                                    </h3>
                                    <p className="text-sm">
                                        Tasa desde {vehicle.rate}
                                    </p>
                                </div>
                            </div>
                        </button>
                    );
                })
            }
            </div>
        </div>
    );
};

export default VehicleTypeSelector;