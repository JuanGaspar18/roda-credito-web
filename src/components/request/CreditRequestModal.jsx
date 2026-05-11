import { useState } from "react";

import { User, Mail, Phone, MapPin, Send, X } from "lucide-react";

import { createCreditRequest } from "../../api/request.api";

const CreditRequestModal = ({ open, onClose, simulation }) => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ first_name: "", last_name: "", email: "", phone: "", city: "" });
    if (!open) return null;
    const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); };
    const handleSubmit = async () => {
        try {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if ( !emailRegex.test(form.email) ) {
                alert( "Ingresa un correo válido.");
                return;
            }
            if ( !/^[0-9]+$/.test(form.phone)) {
                alert( "El teléfono solo debe contener números." );
                return;
            }
            if (form.phone.length < 10) { alert( "El teléfono debe tener mínimo 10 dígitos." );
                return;
            }

            setLoading(true);
            const payload = {
                first_name: form.first_name,
                last_name: form.last_name,
                email: form.email,
                phone: form.phone,
                city: form.city,
                vehicle_type: simulation.vehicle_type,
                vehicle_value: simulation.vehicle_value,
                down_payment: simulation.down_payment,
                installments: simulation.installments
            };

            const response = await createCreditRequest( payload );
            if (response.success) {
                alert( "Solicitud enviada correctamente." );
                setForm({ first_name: "", last_name: "", email: "", phone: "", city: "" });
                onClose();
            }
        } catch (error) {
            console.error(error);
            alert( "Ocurrió un error al enviar la solicitud." );
        } finally {
            setLoading(false);
        }
    };
    const formatCurrency = (value) => { return `$ ${Number(value || 0) .toLocaleString("es-CO")}`; };
    return (
        <div className=" fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-sm
">
            <div className=" relative w-full max-w-3xl rounded-4xl border p-5 shadow-2xl max-h-[90vh] overflow-y-auto lg:p-10 " style={{ background: "#050505", borderColor: "rgba(212,255,0,0.12)" }} >
                <button onClick={onClose} className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-105" style={{ borderColor: "var(--color-border)", background: "var(--color-surface-secondary)" }}>
                    <X size={18} />
                </button>
                <div className="mb-10">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: "rgba(212,255,0,0.12)", color: "var(--color-primary)" }} >
                            <Send size={20} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold">
                                Solicitar crédito
                            </h2>
                            <p className="mt-1 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                                Completa tus datos para registrar tu solicitud de financiamiento.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <InputField icon={<User size={18} />} label="Nombre" name="first_name" placeholder="Tu nombre" value={form.first_name} onChange={handleChange}/>
                        <InputField icon={<User size={18} />} label="Apellido" name="last_name" placeholder="Tu apellido" value={form.last_name} onChange={handleChange}/>
                    </div>
                    <InputField type="email" icon={<Mail size={18} />} label="Correo electrónico" name="email" placeholder="tu@email.com" value={form.email} onChange={handleChange}/>
                    <InputField type="tel" icon={<Phone size={18} />} label="Teléfono" name="phone" placeholder="3001234567" value={form.phone} onChange={(e) => { const onlyNumbers = e.target.value.replace(/\D/g, ""); setForm({ ...form, phone: onlyNumbers }); }} />
                    <div>
                        <div className="mb-3 flex items-center gap-2 text-sm font-medium">
                            <MapPin size={16} />
                            <span>Ciudad</span>
                        </div>
                        <select name="city" value={form.city} onChange={handleChange} className="w-full rounded-2xl border px-5 py-4 outline-none transition-all" style={{ background: "#090909", borderColor: "var(--color-border)", color: "white" }}>
                            <option value="">
                                Selecciona tu ciudad
                            </option>
                            <option value="Bogotá">
                                Bogotá
                            </option>
                            <option value="Medellín">
                                Medellín
                            </option>
                            <option value="Cali">
                                Cali
                            </option>
                            <option value="Barranquilla">
                                Barranquilla
                            </option>
                        </select>
                    </div>
                    <div className="rounded-[28px] border p-6" style={{ borderColor: "rgba(212,255,0,0.4)", background: "linear-gradient(180deg, rgba(212,255,0,0.08), rgba(212,255,0,0.03))" }}>
                        <h3 className="text-lg font-semibold" style={{ color: "var(--color-primary)" }} >
                            Tu simulación
                        </h3>
                        <div className="mt-5 grid gap-5 md:grid-cols-2">
                            <div className="space-y-3 text-sm">
                                <p>
                                    Vehículo:
                                    {" "}
                                    <span className="font-semibold">
                                        {simulation?.vehicle_type}
                                    </span>
                                </p>
                                <p>
                                    Monto:
                                    {" "}
                                    <span className="font-semibold">
                                        {
                                            formatCurrency(
                                                simulation?.vehicle_value
                                            )
                                        }
                                    </span>
                                </p>
                            </div>
                            <div className="space-y-3 text-sm">
                                <p>
                                    Plazo:
                                    {" "}
                                    <span className="font-semibold">
                                        {simulation?.installments}
                                        {" "}
                                        meses
                                    </span>
                                </p>
                                <p>
                                    Cuota:
                                    {" "}
                                    <span className="font-semibold">
                                        {
                                            formatCurrency(
                                                simulation?.monthly_payment
                                            )
                                        }
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleSubmit} disabled={loading} className=" button-primary mt-2 flex w-full items-center justify-center gap-3 py-4 text-lg disabled:opacity-50 ">
                        <Send size={18} />
                        {
                            loading
                                ? "Enviando..."
                                : "Enviar solicitud"
                        }
                    </button>
                    <p className="text-center text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                        Al enviar tu solicitud, aceptas nuestros términos y condiciones y política de privacidad.
                    </p>
                </div>
            </div>
        </div>
    );
};

const InputField = ({ icon, label, ...props }) => {
    return (
        <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-medium">
                {icon}
                <span>{label}</span>
            </div>
            <input
                {...props}
                className="w-full rounded-2xl border px-5 py-4 outline-none transition-all"
                style={{
                    background: "#090909",
                    borderColor: "var(--color-border)",
                    color: "white"
                }}
            />
        </div>
    );
};

export default CreditRequestModal;