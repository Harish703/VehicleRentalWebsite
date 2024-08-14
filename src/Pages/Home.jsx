import React, { useState } from 'react';
import '../Css/Home.css';
import video from '../Components/Assets/homepgvid.mp4';
import Footer from './Footer';
import faqImage from '../Components/Assets/faqimg.jpg';
import adiyogi from '../Components/Assets/coimbatore.jpg';
import ooty from '../Components/Assets/tirupur.jpg';
import periyar from '../Components/Assets/erode.jpg';
import srirangam from '../Components/Assets/tiruchirapalli.jpg';
import nellaiapar from '../Components/Assets/tirunelveli.jpg';
import tiruchendur from '../Components/Assets/thoothukudi.jpg';
import marina from '../Components/Assets/chennai.jpg';
import meenakshi from '../Components/Assets/madurai.jpg';
import yercaud from '../Components/Assets/salem.jpg';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAllFAQs, setShowAllFAQs] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is our car rental service?", answer: "Our car rental service provides a wide range of vehicles for rent, ensuring flexibility and convenience for all your travel needs." },
    { question: "What car/vehicle options do we offer?", answer: "We offer a variety of vehicles, including sedans, SUVs, hatchbacks, and luxury cars to meet different preferences and requirements." },
    { question: "How is our self-drive car rental service different?", answer: "Our self-drive car rental service offers the freedom to explore at your own pace with transparent pricing, no hidden charges, and comprehensive insurance coverage." },
    { question: "What are the benefits of our subscription service?", answer: "Our subscription service includes zero down payment, free insurance, and complimentary maintenance, with the flexibility to return or extend your subscription." },
    { question: "How can I book a vehicle?", answer: "Booking a vehicle is easy through our website or mobile app. Simply choose your vehicle, select the rental period, and confirm your booking." },
    { question: "Do you offer any discounts for long-term rentals?", answer: "Yes, we offer special discounts for long-term rentals. Please contact our customer service for more details on pricing and offers." },
    { question: "Are there any age restrictions for renting a vehicle?", answer: "Yes, you must be at least 21 years old to rent a vehicle, and some premium vehicles may have a higher minimum age requirement." },
    { question: "What is included in the rental price?", answer: "The rental price includes vehicle usage, basic insurance coverage, and roadside assistance. Additional options and services may incur extra charges." },
    { question: "Can I modify or cancel my booking?", answer: "Yes, you can modify or cancel your booking. Please refer to our cancellation policy for details on fees and procedures." },
    { question: "How do I contact customer support?", answer: "You can contact our customer support via email, phone, or through the live chat feature on our website for any assistance or inquiries." },
    { question: "What types of payment methods are accepted?", answer: "We accept various payment methods including credit cards, debit cards, and online payment gateways. Please ensure your payment method is valid and accepted by our system." },
    { question: "Is there a mileage limit on the rental vehicle?", answer: "Yes, there is a standard mileage limit on rental vehicles. Additional mileage charges may apply if you exceed the limit. Please check the details at the time of booking." },
    { question: "What happens if I return the vehicle late?", answer: "Late returns may incur additional charges based on our late return policy. We recommend informing us in advance if you anticipate any delays." },
    { question: "Can I extend my rental period?", answer: "Yes, you can extend your rental period. Please contact us as soon as possible to arrange for the extension and adjust the rental charges accordingly." }
  ];

  const blogPosts = [
    { title: "Coimbatore - Adiyogi", image: adiyogi, description: "Adiyogi, a renowned statue of Lord Shiva, is a symbol of inner transformation and yoga. Located in Coimbatore, it’s a must-visit spiritual destination offering peace and tranquility." },
    { title: "Tirupur - Ooty", image: ooty, description: "Ooty, also known as Udhagamandalam, is a beautiful hill station in Tamil Nadu. Known for its picturesque landscapes, botanical gardens, and the Ooty Lake, it’s a perfect retreat from city life." },
    { title: "Erode - Periyar Wildlife Sanctuary", image: periyar, description: "Periyar Wildlife Sanctuary in Thekkady is famous for its elephants and diverse flora and fauna. The sanctuary offers a rich wildlife experience amidst lush greenery." },
    { title: "Tiruchirapalli - Srirangam Temple", image: srirangam, description: "Srirangam Temple, dedicated to Lord Vishnu, is one of the largest and most famous temples in India. Its architectural grandeur and spiritual significance make it a major attraction." },
    { title: "Tirunelveli - Nelliapar Temple", image: nellaiapar, description: "Nelliapar Temple is a prominent Hindu temple in Tirunelveli dedicated to Lord Shiva. The temple’s serene environment and historic value make it a key site for pilgrims." },
    { title: "Thoothukudi - Tiruchendur Murugan Temple", image: tiruchendur, description: "Tiruchendur Murugan Temple is one of the six abodes of Lord Murugan, located in Thoothukudi. It’s a significant pilgrimage site known for its vibrant festivals." },
    { title: "Chennai - Marina Beach", image: marina, description: "Marina Beach in Chennai is one of the longest urban beaches in India. It’s a popular destination for leisurely walks, beach activities, and enjoying local snacks." },
    { title: "Madurai - Meenakshi Amman Temple", image: meenakshi, description: "Meenakshi Amman Temple in Madurai is a historic Hindu temple dedicated to Goddess Meenakshi. Its stunning architecture and intricate sculptures attract thousands of visitors." },
    { title: "Salem - Yercaud", image: yercaud, description: "Yercaud, known as the 'Jewel of the South', is a serene hill station in Salem district. It offers beautiful landscapes, coffee plantations, and a pleasant climate." }
  ];

  const visibleFAQs = showAllFAQs ? faqs : faqs.slice(0, 5);

  return (
    <>
      <div className="home-container">
        <video autoPlay loop muted className="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>Welcome to Rent 'N Roll</h1>
          <p>Explore our wide range of vehicles for rent.</p>
        </div>
      </div>

      <div className="subscription-info">
        <h2>Why Us?</h2>
        <p>
          Welcome to Rent 'N Roll – Where Your Journey Begins with Unmatched Convenience and Flexibility! Our state-of-the-art car rental management system ensures a seamless experience with a diverse fleet of vehicles to suit every need. Whether you’re looking for a stylish sedan, a versatile SUV, or a luxurious car, we have options for every occasion. Enjoy hassle-free booking through our intuitive website and mobile app, with transparent pricing and flexible subscription plans that include zero down payment, comprehensive insurance, and free maintenance. With exceptional customer support available 24/7, convenient pickup and drop-off locations, and exclusive discounts, Rent 'N Roll is committed to providing you with the utmost comfort and confidence for all your travel adventures.
        </p>
      </div>

      <div className="blog-section">
        <h2>Explore Best Spots in Tamil Nadu</h2>
        <div className="blog-container">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-item">
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* New "How It Works" Section */}
      <div className="how-it-works">
        <h2>How Rent 'N Roll Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Choose Your Booking Details</h3>
              <p>Select your pick-up and drop-off locations, timings, and date.</p>
            </div>
          </div>
          <div className="arrow">&#8595;</div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Select Your Vehicle</h3>
              <p>Browse and choose the vehicle that suits your needs.</p>
            </div>
          </div>
          <div className="arrow">&#8595;</div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Login or Register</h3>
              <p>If you are not logged in, you will be redirected to the login page, and then to the SignUp page if needed.</p>
            </div>
          </div>
          <div className="arrow">&#8595;</div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Complete Your Payment</h3>
              <p>Then it moves to the register page ang after successfull registeration, Proceed to the payment page to finalize your booking.</p>
            </div>
          </div>
          <div className="arrow">&#8595;</div>
          <div className="step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Booking Confirmed</h3>
              <p>Your booking is complete, and you can now enjoy your ride!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <div className="faq-image">
          <img src={faqImage} alt="FAQ" />
        </div>
        <div className="faq-questions">
          <h2>Frequently Asked Questions</h2>
          {visibleFAQs.map((faq, index) => (
            <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
              <div className="faq-question">{faq.question}</div>
              {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
          <button className="view-all" onClick={() => setShowAllFAQs(!showAllFAQs)}>
            {showAllFAQs ? "Show Less" : "View All"}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
