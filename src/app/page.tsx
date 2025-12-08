import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { syncUser } from "@/actions/user.action";

export default async function Home() {
  await syncUser();
  
  return (
    <div>
  <h1>HomePage content</h1>
    </div>
  );
}
