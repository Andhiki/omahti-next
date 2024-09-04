import Image from "next/image";
import Link from "next/link";

const news = [
  {
      id: "news-1",
  },
  {
      id: "news-2",
  },
  {
      id: "news-3",
  },
  {
      id: "news-4",
  },
  {
      id: "news-5",
  },
]

export default function Blog() {
  return (
    <>
      <p>haloooooooooooooooooooooooooooooooooooooooo</p>
      <ul>
        {news.map((news) => (
          <Link href={`/blog/${news.id}`}>
            <li>
              {news.id}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
