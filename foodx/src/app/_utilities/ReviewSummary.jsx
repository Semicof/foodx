import React from 'react'

const summarizeReview = (content, numberOfPhotos) => {
    if (numberOfPhotos > 0&&content.length>0) {
      return `Added ${numberOfPhotos} photo${numberOfPhotos > 1 ? 's' : ''} and a review`;
    } else if(content.length>0&&numberOfPhotos === 0) {
      return 'Wrote a review';
    } else if(numberOfPhotos>0&&content.length===0){
      return `Added ${numberOfPhotos} photo`
    }
  };
  

  const ReviewSummary = ({username, content, numberOfPhotos }) => {
    const summary = summarizeReview(content, numberOfPhotos);
    return (
      <div className='flex flex-col'>
        <h2 className='text-blue-500 font-bold text-lg'>{username}</h2>
        <p className='text-gray-500 font-light text-xs'>{summary}</p>
      </div>
    );
  };
  
  export default ReviewSummary;
  