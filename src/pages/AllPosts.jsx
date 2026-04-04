import { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    appwriteService.getPosts([]).then((res) => {
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-surface-200 bg-white"
              >
                <div className="aspect-[4/3] animate-pulse bg-surface-200" />
                <div className="h-16 animate-pulse bg-surface-100" />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-10">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-ink-900">Your posts</h1>
          <p className="mt-1 text-ink-500">All entries from the database for your current filters.</p>
        </div>
        {posts.length === 0 ? (
          <p className="rounded-xl border border-dashed border-surface-200 bg-white py-12 text-center text-ink-500">
            No posts found.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;
