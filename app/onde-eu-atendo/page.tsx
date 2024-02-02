"use client"
import { title } from "@/components/primitives";
import { Spacer } from "@nextui-org/react";
import dynamic from "next/dynamic";

export default function OndeEuAtendo() {

	const DynamicMap = dynamic(() => import('@/components/clinicTabs'), {
		ssr: false,
		loading: () => <p>A carregar o mapa...</p>,
	});

	return (
		<div>
			<h1 className={title()}>Onde eu Atendo</h1>
			<Spacer y={4}/>
			<DynamicMap />
		</div>
	);
}
