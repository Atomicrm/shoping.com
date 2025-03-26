import React from "react";
import { useParams } from "react-router-dom";

import './Css/BlogDetails.css'

const BlogDetails = () => {
  const { id } = useParams(); // Access the dynamic ID from the URL

  return (
    <div>
      <h1>Blog Post Details</h1>
      <p>Details for blog post ID: {id}</p>
      {/* Fetch and display blog post details based on the ID */}
    </div>
  );
};

export default BlogDetails;