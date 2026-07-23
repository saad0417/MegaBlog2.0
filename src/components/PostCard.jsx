import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  const imageUrl = appwriteService.getFilePreview(featuredImage);

  return (
    <article className="h-full">
      <Link
        to={`/post/${$id}`}
        className="group block h-full overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
      >
        <div className="aspect-[4/3] w-full overflow-hidden bg-surface-100">
          <img
            src={imageUrl}
            alt={title ? `Cover: ${title}` : "Post cover"}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-4">
          <h2 className="line-clamp-2 text-lg font-semibold leading-snug text-ink-900 group-hover:text-primary-700">
            {title}
          </h2>
        </div>
      </Link>
    </article>
  );
}

export default PostCard;
