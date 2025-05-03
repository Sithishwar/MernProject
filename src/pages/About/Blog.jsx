import React from "react";
import styles from "../../pages/Page1.module.css"; // Updated path to correctly reference the CSS file

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Skincare Layering",
      category: "Skincare",
      date: "July 10, 2023",
      author: "Dr. Anjali Sharma",
      excerpt: "Learn the correct order to apply your skincare products for maximum effectiveness.",
      image: "/blog-skincare.jpg"
    },
    {
      id: 2,
      title: "Summer Makeup Trends You Need to Try",
      category: "Makeup",
      date: "June 25, 2023",
      author: "Meera Kapoor",
      excerpt: "Bright colors, minimal bases, and glowy highlights are taking over this summer.",
      image: "/blog-makeup.jpg"
    },
    {
      id: 3,
      title: "Understanding Fragrance Notes: A Beginner's Guide",
      category: "Fragrance",
      date: "June 12, 2023",
      author: "Rohan Desai",
      excerpt: "Discover how top, middle, and base notes work together to create a beautiful scent.",
      image: "/blog-fragrance.jpg"
    },
    {
      id: 4,
      title: "The Benefits of Natural Ingredients in Your Beauty Routine",
      category: "Ingredients",
      date: "May 30, 2023",
      author: "Priya Mehta",
      excerpt: "Why incorporating natural ingredients can transform your skin and hair health.",
      image: "/blog-natural.jpg"
    },
    {
      id: 5,
      title: "Makeup Brushes 101: Essential Tools for Your Collection",
      category: "Tools",
      date: "May 15, 2023",
      author: "Aisha Khan",
      excerpt: "A guide to the must-have brushes and how to use them for flawless application.",
      image: "/blog-brushes.jpg"
    },
    {
      id: 6,
      title: "Sustainable Beauty: Small Changes for a Big Impact",
      category: "Sustainability",
      date: "May 3, 2023",
      author: "Vikram Singh",
      excerpt: "Simple swaps and practices to make your beauty routine more environmentally friendly.",
      image: "/blog-sustainable.jpg"
    }
  ];

  const categories = ["All", "Skincare", "Makeup", "Fragrance", "Ingredients", "Tools", "Sustainability"];

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <h1>KosmoCare Blog</h1>
        </div>
      </header>

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <div className={styles.blogHeader}>
            <h2 className={styles.sectionTitle}>Beauty Insights & Tips</h2>
            <p>Discover the latest trends, expert advice, and beauty secrets from our team.</p>
          </div>
          
          <div className={styles.blogCategories}>
            <ul className={styles.categoryTabs}>
              {categories.map((category, index) => (
                <li key={index} className={index === 0 ? styles.activeCategory : ''}>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.blogGrid}>
            {blogPosts.map(post => (
              <div key={post.id} className={styles.blogCard}>
                <div className={styles.blogImageContainer}>
                  <img src={post.image} alt={post.title} className={styles.blogImage} />
                  <span className={styles.blogCategory}>{post.category}</span>
                </div>
                <div className={styles.blogContent}>
                  <span className={styles.blogDate}>{post.date}</span>
                  <h3 className={styles.blogTitle}>{post.title}</h3>
                  <p className={styles.blogExcerpt}>{post.excerpt}</p>
                  <div className={styles.blogFooter}>
                    <span className={styles.blogAuthor}>By {post.author}</span>
                    <a href={`/blog/${post.id}`} className={styles.blogReadMore}>Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.blogPagination}>
            <button className={`${styles.paginationBtn} ${styles.activePage}`}>1</button>
            <button className={styles.paginationBtn}>2</button>
            <button className={styles.paginationBtn}>3</button>
            <button className={styles.paginationBtn}>Next →</button>
          </div>
          
          <div className={styles.blogSubscribe}>
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest beauty tips and product launches.</p>
            <div className={styles.subscribeForm}>
              <input type="email" placeholder="Your email address" className={styles.subscribeInput} />
              <button className={styles.btn}>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;