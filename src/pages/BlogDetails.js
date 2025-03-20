import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import postName from "../assets/post-name-img.png";
import BlogPostImg from "../assets/blog-post-details-img.jpg";
import blogsImage10 from "../assets/our-blogs-img-10.jpg";
import blogsImage2 from "../assets/our-blogs-img-2.jpg";
import blogsImage3 from "../assets/our-blogs-img-3.jpg";
import blogsImage4 from "../assets/our-blogs-img-4.jpg";

const blogs = [
    {
        title: "Heart Health",
        image: blogsImage10,
        description:
          "Managing weight successfully involves a holistic approach combining healthy eating, regular...",
        doctor: "Dr. Vijay Bindra",
      },
      {
        title: "Heart Health",
        image: blogsImage2,
        description:
          "Managing weight successfully involves a holistic approach combining healthy eating, regular...",
        doctor: "Dr. Vijay Bindra",
      },
      {
        title: "Kidney & Liver Health",
        image: blogsImage3,
        description:
          "The liver and kidneys are vital organs responsible for filtering the blood, maintaining...",
        doctor: "Dr. Sanjay Kapoor",
      },
      {
        title: "Diabetes",
        image: blogsImage4,
        description:
          "Chronic metabolic disorder characterized by persistently blood glucose (or blood sugar)...",
        doctor: "Dr. Kunal Sharma",
      },
  ];

const BlogDetails = () => {
    return (
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="blog_details_content">
                    <h1>Getting regular physical activity can help prevent <br></br> heart disease</h1>
                    <div className="blog_post_name_bar d-flex justify-content-between flex-wrap">
                        <div className="blog_post_name d-flex fex-wrap">
                            <div className="blog-post-img">
                                <img
                                    src={postName}
                                    alt="Post Name"
                                />
                            </div>
                            <div className="blog_post_name_content">
                                <span>Dr. Bina Dutta</span>
                                <p>12-01-2025 </p>
                            </div>
                        </div>
                        <div className="blog_post_social">
                            <Link><i class="fa-brands fa-twitter"></i></Link>
                            <Link><i class="fa-brands fa-linkedin"></i></Link>
                            <Link><i class="fa-brands fa-instagram"></i></Link>
                            <Link><i class="fa-solid fa-share-nodes"></i></Link>
                        </div>
                    </div>

                    <div className="blog_post_details">
                        
                            <Card className="blog-card border-0">
                                <div className="blog-card-img position-relative">
                                <img
                                    src={BlogPostImg}
                                    alt="Post Name"
                                />                                 

                                </div>


                                <Card.Body className="p-0">
                                    <h2>Daily Habits </h2>
                                    <p>The Correct Diet (TCD) provides customized, freshly cooked daily meals and ready-to-eat healthy food and drinks. We deliver to nearby gyms, supporting individuals in achieving their fitness goals and managing various medical conditions through proper nutrition.</p>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                                    <ul>
                                        <li>. Customized Meal</li>
                                        <li>. Freshly Meal</li>
                                        <li>. Proper nutrition</li>
                                    </ul>
                                </Card.Body>
                            </Card>                        

                    </div>

                </div>
            </motion.div>

          <motion.div
                    className="text-center mb-4 related_blog_sec"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    style={{ marginTop: "6rem" }}
                  >         
                  <div className="related_post_blog">     
                    <h2 className="heading">
                      <strong style={{ fontFamily:"PT Serif" }}>Related</strong>{" "}
                      <span className="text-custom-success" style={{ fontFamily:"PT Serif" }}>Blogs</span>
                    </h2>

                     <Row>
                            <div className="owl-slider">
                            <div id="carousel-blog" className="owl-carousel">
                              {blogs.map((blog, index) => (
                                
                                <div key={index} className="item">        
                                  <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                  >
                                    <Card className="blog-card border-0">
                                      <div className="blog-card-img position-relative"><Card.Img
                                        variant="top"
                                        src={blog.image}
                                      />
                                        
                                        <Link to="/" className="badge blog-badge">{blog.title}</Link>
                                        
                                        </div>
                                
                    
                                      <Card.Body className="p-0">
                                        <Card.Text className="blog-description text-start">
                                          {blog.description}
                                        </Card.Text>
                                       <Link to="/" className="blog-doctor d-block">{blog.doctor}</Link> 
                                      </Card.Body>
                                    </Card>
                                  </motion.div>            
                                </div>
                               
                                
                              ))}
                               </div>
                               </div>
                            </Row>                   
                            </div>    
                  </motion.div>
        </div>
    );
};

export default BlogDetails;