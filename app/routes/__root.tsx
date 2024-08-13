import { createRootRouteWithContext } from "@tanstack/react-router";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as React from "react";
import styles from "../globals.css?inline";

import { ClerkProvider } from "@clerk/tanstack-start";
import { QueryClientProvider, type QueryClient } from "@tanstack/react-query";
import { queryClient } from "../router";

console.log("publishable key", process.env.CLERK_PUBLISHABLE_KEY);
console.log("secret key", process.env.CLERK_SECRET_KEY);

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	meta: () => [
		{
			charSet: "utf-8",
		},
		{
			name: "viewport",
			content: "width=device-width, initial-scale=1",
		},
		{
			title: "eFnF URL Shortener",
		},
	],
	component: RootComponent,
});

function RootComponent() {
	return (
		<ClerkProvider>
			<QueryClientProvider client={queryClient}>
				<RootDocument>
					<Outlet />
					{/* <TanStackRouterDevtools position="bottom-right" />
				<ReactQueryDevtools buttonPosition="top-right" /> */}
				</RootDocument>
			</QueryClientProvider>
		</ClerkProvider>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<Html>
			<Head>
				<Meta />
				<style>{styles}</style>
			</Head>
			<Body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</Body>
		</Html>
	);
}
