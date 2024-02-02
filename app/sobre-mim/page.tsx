"use client"
import { title } from "@/components/primitives";
import { Card, CardBody, Image, Button, Spacer, CardFooter, Tooltip, Divider } from "@nextui-org/react";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

export default function SobreMim() {

	return (
		<div>
			<h1 className={title()}>Sobre Mim</h1>
			<Spacer y={4} />
			<Card
				isBlurred
				className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
				shadow="sm"
			>
				<CardBody>
					<div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
						<div className="relative col-span-6 md:col-span-4">
							<Image
								alt="Foto perfil Dr. Marcio Stein"
								className="object-cover"
								height={200}
								shadow="md"
								src="https://media.licdn.com/dms/image/C4D03AQHPGUbSj8NUjg/profile-displayphoto-shrink_800_800/0/1565831303053?e=1712188800&v=beta&t=7z-mLhcH34GMGOiSTso21Hk_g9whLzBp7t5zLidsajw"
								width="100%"
							/>
						</div>

						<div className="flex flex-col col-span-6 md:col-span-8">
							<div className="flex justify-between items-start">
								<div className="flex flex-col gap-0">
									<h1 className="text-large font-medium mt-2">Olá muito prazer meu nome é</h1>
									<p className="text-small text-foreground/80">Marcio Alexandro Stein</p>
									<h1 className="text-large font-medium mt-2">Sou médico expecialista em:</h1>
									<p className="text-small text-foreground/80">Pneumologista pediátrico e acupuntura</p>
								</div>
							</div>
						</div>
					</div>
					<Spacer y={8}/>
					<Divider/>
					<CardFooter>
						<div className="flex gap-3 items-center justify-center">
							<Tooltip content="Visite meu Linkedin">
								<Button
									isIconOnly
									color="primary"
									href="https://www.linkedin.com/in/marcio-stein-50a5a832"
								>
									<FaLinkedin />
								</Button>
							</Tooltip>
							<Tooltip content="Visite meu Linkedin">
								<Button
									isIconOnly
									color="primary"
									href="https://www.linkedin.com/in/marcio-stein-50a5a832"
								>
									<FaLinkedin />
								</Button>
							</Tooltip>
						</div>
					</CardFooter>
				</CardBody>
			</Card>
		</div>
	);
}
