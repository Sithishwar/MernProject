import { useState } from "react";
import styles from './Faq.module.css'
function Faq(){
const [openindex,setopenindex]=useState([]);
const faques = [
  { 
    question: "Are your products cruelty-free?", 
    answer: "Yes, all our products are 100% cruelty-free and not tested on animals." 
  },
  { 
    question: "Do you offer vegan cosmetics?", 
    answer: "Yes, we have a wide range of vegan-friendly products free from animal-derived ingredients." 
  },
  { 
    question: "How can I choose the right foundation shade?", 
    answer: "You can use our online shade-matching tool or visit one of our stores for a skin tone analysis." 
  },
  { 
    question: "Are your products safe for sensitive skin?", 
    answer: "Yes, many of our products are dermatologically tested and suitable for sensitive skin. Look for the 'sensitive skin' label on product pages." 
  },
  { 
    question: "What is the shelf life of your cosmetics?", 
    answer: "Each product has a specific shelf life mentioned on the packaging. Most products last between 12-24 months after opening." 
  },
  { 
    question: "Do you use parabens or sulfates in your products?", 
    answer: "No, our products are free from harmful chemicals like parabens, sulfates, and phthalates." 
  },
  { 
    question: "Can I return a product if it doesn’t suit me?", 
    answer: "Yes, we accept returns within 30 days of purchase, provided the product is unused and in its original packaging." 
  },
  { 
    question: "Do you have a loyalty program for customers?", 
    answer: "Yes! Join our rewards program to earn points on every purchase and get exclusive discounts." 
  },
  { 
    question: "How can I make my lipstick last longer?", 
    answer: "For long-lasting lipstick, exfoliate your lips, apply a lip primer, and use a lip liner before applying the lipstick." 
  },
  { 
    question: "What is the best way to remove makeup?", 
    answer: "Use a gentle makeup remover or micellar water, followed by a mild cleanser to remove all residue." 
  }
];

  const toggleFaq=(index)=>{
    if(openindex.includes(index))
    {
      setopenindex(openindex.filter((i) => i !== index));
    }
    else{
   setopenindex([...openindex,index]);
  }
}
return(
    <>
    <div className={styles.mainheading}>FAQS</div>
   { faques.map((faque,index)=>(
    <div key={index}>
    <button className={styles.btn} onClick={()=>toggleFaq(index)}>{faque.question}{openindex.includes(index)  ? "▲" : "▼"}</button>
    {openindex.includes(index)  && <p className={styles.answer}>{faque.answer}</p>}
   </div>))}
    </>
);
    
    
  
}
export default Faq;