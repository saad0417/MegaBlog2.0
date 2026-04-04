import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((p) => {
        if (p) setPost(p);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  if (!post) {
    return (
      <div className="py-12">
        <Container>
          <div className="mx-auto max-w-3xl animate-pulse space-y-6">
            <div className="aspect-[21/9] rounded-2xl bg-surface-200" />
            <div className="h-10 w-2/3 rounded bg-surface-200" />
            <div className="h-4 w-full rounded bg-surface-100" />
            <div className="h-4 w-full rounded bg-surface-100" />
          </div>
        </Container>
      </div>
    );
  }

  return (
    <article className="py-10">
      <Container>
        <div className="relative mx-auto mb-8 max-w-4xl overflow-hidden rounded-2xl border border-surface-200 bg-surface-100 shadow-sm">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title ? `Featured image for ${post.title}` : ""}
            width={1200}
            height={630}
            fetchPriority="high"
            decoding="async"
            className="max-h-[min(70vh,560px)] w-full object-cover"
          />
          {isAuthor && (
            <div className="absolute right-4 top-4 flex flex-wrap gap-2">
              <Link to={`/edit-post/${post.$id}`}>
                <Button
                  bgColor="bg-primary-600"
                  className="shadow-md hover:bg-primary-700"
                >
                  Edit
                </Button>
              </Link>
              <Button
                bgColor="bg-red-600"
                onClick={deletePost}
                className="shadow-md hover:bg-red-700"
              >
                Delete
              </Button>
            </div>
          )}
        </div>
        <header className="mx-auto mb-10 max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            {post.title}
          </h1>
        </header>
        <div className="browser-css mx-auto max-w-3xl pb-8">{parse(post.content)}</div>
      </Container>
    </article>
  );
}
