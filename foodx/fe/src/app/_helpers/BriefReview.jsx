import Link from 'next/link';
import React from 'react'

const BriefReview = ({ content, maxLength }) => {
 
    return (
      <div>
        {content.length > maxLength ? (
          <>
            <p>{content.slice(0, maxLength)} </p>
            <Link href="/" className='text-blue-800'>Read more</Link>
          </>
        ) : (
          <p>{content}</p>
        )}
      </div>
    );
  };
  
  export default BriefReview;
