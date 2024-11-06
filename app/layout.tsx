import "@mantine/core/styles.css";
import React from "react";
import {
    MantineProvider,
    ColorSchemeScript,
    Container,
    Title,
} from "@mantine/core";
import { theme } from "../theme";

export const metadata = {
    title: "Family Tree",
    description: "I am using Mantine with Next.js!",
};

export default function RootLayout({ children }: { children: any }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <ColorSchemeScript />
                <link rel="shortcut icon" href="/favicon.svg" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
            </head>
            <body>
                <MantineProvider theme={theme}>
                    <Container>
                        <Title order={1}>Family Lineage App</Title>
                        <p>
                            Welcome to the family lineage application! Start
                            adding and exploring your family tree.
                        </p>
                        {children}
                    </Container>
                </MantineProvider>
            </body>
        </html>
    );
}
