import { caller, trpc } from "@/trpc/server";

export default async function Page() {
  const data = await caller.hello({ text: "server" });

  
  return <>{JSON.stringify(data)}</>;
}
