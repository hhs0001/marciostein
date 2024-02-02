import React, { useState } from 'react';
import { Tabs, Tab, Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import ClinicMap from './ClinicMap';
import { Clinic } from '@/types';

const ClinicTabs: React.FC = () => {
    const clinics: Clinic[] = [
        {
            key: 'Edifício Centro Comercial Aliança',
            name: 'Edifício Centro Comercial Aliança',
            location: 'Av. José Paulino, 2625 - Morumbi, Paulínia - SP, 13140-723',
            details: 'Detalhes legais aq',
            position: [-22.77386574142686, -47.14515408960557],
            // Adicione outros campos conforme necessário
        }
        // Adicione mais clínicas aqui
    ];

    const [activeTabKey, setActiveTabKey] = useState<string>(clinics[0].key);

    return (
        <div className="flex w-full flex-col">
            <Tabs 
                aria-label="Clínicas"
                onChange={(key) => setActiveTabKey(key.toString())}
            >
                {clinics.map((clinic) => (
                    <Tab key={clinic.key} title={clinic.name}>
                        <Card>
                            <CardHeader>{clinic.name}</CardHeader>
                            <CardBody>
                                <p><strong>Localização:</strong> {clinic.location}</p>
                                <p><strong>Detalhes:</strong> {clinic.details}</p>
                                <ClinicMap position={clinic.position} />
                            </CardBody>
                            <CardFooter>Informações adicionais</CardFooter>
                        </Card>
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
};

export default ClinicTabs;
