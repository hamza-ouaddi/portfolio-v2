import React from 'react'
import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
  } from "@react-email/components";

import{Tailwind} from "@react-email/tailwind";

type ContactFormEmailProps = {
    contactMessage: string;
    contactEmail: string;
}

export default function ContactFormEmail({contactMessage, contactEmail} : ContactFormEmailProps) {
  return (
    <Html>
        <Head />
        <Preview>New message from your personal website</Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-black'>
                <Container>
                    <Section className='bg-white border border-black/10 my-10 px-10 py-4 rounded-md'>
                        <Heading className='leading-tight'>You recieved a new message from the contact form</Heading>
                        <Text>{contactMessage}</Text>
                        <Hr />
                        <Text>From: {contactEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
