import { useState } from "react";

import { createCreditRequest } from "../../api/request.api";

const CreditRequestForm = ({ simulation, onClose }) => {

    const [form, setForm] = useState({ first_name: "", last_name: "", email: "", phone: "", city: "" });
    const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); };
    const handleSubmit = async () => {
        const payload = { ...form, ...simulation};
        try {
            const response = await createCreditRequest(payload);
            if (response.success) {
                alert("Solicitud enviada correctamente");
                onClose();
            } else {
                alert("Error en la solicitud");
            }
        } catch (error) {
            console.error(error);
            alert("Error en la solicitud");
        }
    };
    return (
        <div className="flex flex-col gap-4">
            <input name="first_name" placeholder="Nombre" onChange={handleChange} className="input" />
            <input name="last_name" placeholder="Apellido" onChange={handleChange} className="input" />
            <input name="email" placeholder="Correo" onChange={handleChange} className="input" />
            <input name="phone" placeholder="Teléfono" onChange={handleChange} className="input" />
            <input name="city" placeholder="Ciudad" onChange={handleChange} className="input" />
            <button
                className="button-primary mt-4"
                onClick={handleSubmit}
            >
                Enviar solicitud
            </button>
        </div>
    );
};

export default CreditRequestForm;