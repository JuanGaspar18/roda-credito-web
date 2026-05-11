import { useState } from "react";

import HeroSection from "../components/sections/HeroSection";
import SimulationSection from "../components/simulation/SimulationSection";
import AmortizationTable from "../components/amortization/AmortizationTable";
import CreditRequestModal from "../components/request/CreditRequestModal";

const Home = () => {

    const [ simulationResult, setSimulationResult ] = useState(null);
    const [ openModal, setOpenModal ] = useState(false);

    return (
        <>
            <HeroSection />

            <SimulationSection simulationResult={simulationResult} onSimulate={setSimulationResult} />

            {
                simulationResult && (
                    <AmortizationTable
                        simulation={simulationResult}
                    />
                )
            }

            {
                simulationResult && (
                    <button className=" button-primary mt-10 w-full " onClick={() => setOpenModal(true) } >
                        Solicitar crédito
                    </button>
                )
            }
            <CreditRequestModal open={openModal} onClose={() => setOpenModal(false) } simulation={simulationResult}/>
        </>
    );
};

export default Home;