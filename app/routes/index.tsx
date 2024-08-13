import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/tanstack-start";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="p-2">
			<h1>Hello Clerk!</h1>
			<SignedIn>
				<UserButton />
			</SignedIn>
			<SignedOut>
				<SignIn />
			</SignedOut>
		</div>
	);
}
