import { useEffect, useState } from "react";
import BlogGrid from "../components/blog/BlogGrid";
// import BlogHeader from "../components/blog/BlogHeader";
import { blogs } from "../data/blogs";
import InnerPageHeader from "../components/common/innerPageHeader";

export default function BlogPage() {
  const [loading, setLoading] = useState(true);
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setBlogList(blogs);
      setLoading(false);
    }, 300);
  }, []);

  return (
    <>
      <div className="w-full    px-2 sm:px-4 md:px-10  lg:px-10 py-10 xl:px-24 bg-black">
        {/* <BlogHeader /> */}
        <InnerPageHeader title="Blog" description="At Swastixa, our blog features informative articles, insights, and updates focused on culture-driven ideas, business growth, digital trends, and thoughtful perspectives. Each post is crafted to share knowledge, inspire clarity, and support meaningful progress through valuable content." />
        <BlogGrid blogs={blogList} loading={loading} />
      </div>
    </>
  );
}
