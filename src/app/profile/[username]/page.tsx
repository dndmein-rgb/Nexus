import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.action";
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }) {
  // Await params in Next.js 15
  const { username } = await params;
  // Decode the username parameter to handle URL encoding
  const decodedUsername = decodeURIComponent(username);
  const user = await getProfileByUsername(decodedUsername);
  if (!user) return;

  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Check out ${user.username}'s profile.`,
  };
}

async function ProfilePageServer({ params }: { params: Promise<{ username: string }> }) {
  try {
    // Await params in Next.js 15
    const { username } = await params;
    // Decode the username parameter to handle URL encoding
    const decodedUsername = decodeURIComponent(username);
    
    const user = await getProfileByUsername(decodedUsername);

    if (!user) notFound();

    const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
      getUserPosts(user.id),
      getUserLikedPosts(user.id),
      isFollowing(user.id),
    ]);

    return (
      <ProfilePageClient
        user={user}
        posts={posts}
        likedPosts={likedPosts}
        isFollowing={isCurrentUserFollowing}
      />
    );
  } catch (error) {
    console.error("Error in ProfilePageServer:", error);
    notFound();
  }
}
export default ProfilePageServer;