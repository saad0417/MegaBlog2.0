import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function PostGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-sm"
        >
          <div className="aspect-[4/3] animate-pulse bg-surface-200" />
          <div className="space-y-3 p-4">
            <div className="h-5 w-3/4 animate-pulse rounded bg-surface-200" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-surface-200" />
          </div>
        </div>
      ))}
    </div>
  );
}

function Home() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    appwriteService.getPosts().then((res) => {
      if (res?.documents) {
        setPosts(res.documents);
      } else {
        setPosts([]);
      }
    });
  }, []);

  if (posts === null) {
    return (
      <div className="w-full py-10">
        <Container>
          <PostGridSkeleton />
        </Container>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-16">
        <Container>
          <div className="mx-auto max-w-lg rounded-2xl border border-surface-200 bg-white px-8 py-12 text-center shadow-sm">
            <h1 className="text-2xl font-semibold tracking-tight text-ink-900">
              No posts yet
            </h1>
            <p className="mt-3 text-ink-500">
              When stories are published, they will show up here. Sign in to add your own.
            </p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-10">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-ink-900">Latest</h1>
          <p className="mt-1 text-ink-500">Fresh posts from the community.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
