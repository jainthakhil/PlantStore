// import React from "react";

// const PlantCard = ({ plant }) => {
//     return (
//         <div className="border rounded-lg p-4 shadow-md hover:shadow-lg">
//             <h3 className="font-bold text-lg">{plant.name}</h3>
//             <p className="text-gray-700">₹{plant.price}</p>
//             <p className="text-sm text-gray-500">
//                 Categories: {plant.categories.join(", ")}
//             </p>
//             <p
//                 className={`mt-2 font-semibold ${plant.available ? "text-green-600" : "text-red-600"
//                     }`}
//             >
//                 {plant.available ? "In Stock" : "Out of Stock"}
//             </p>
//         </div>
//     );
// };

// export default PlantCard;




// import React from 'react';
// import styled from 'styled-components';

// const Card = ({ plant }) => {
//     return (
//         <StyledWrapper>
//             <div className="card">
//                 <div className="card__shine" />
//                 <div className="card__glow" />
//                 <div className="card__content">
//                     <div className="card__badge">NEW</div>
//                     <div style={{ bgColor: '#a78bfa' }} className="card__image" />
//                     <div className="card__text">
//                         <p className="card__title">{plant.name}</p>
//                         <p className="card__description">{plant.categories.join(", ")}</p>
//                         <p
//                             className={`mt-2 font-semibold ${plant.available ? "text-green-600" : "text-red-600"
//                                 }`}
//                         >
//                             {plant.available ? "In Stock" : "Out of Stock"}
//                         </p>
//                     </div>
//                     <div className="card__footer">
//                         <div className="card__price">Rs. {plant.price}</div>
//                         {/* <div className="card__button">
//                             <svg height={16} width={16} viewBox="0 0 24 24">
//                                 <path strokeWidth={2} stroke="currentColor" d="M4 12H20M12 4V20" fill="currentColor" />
//                             </svg>

//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </StyledWrapper>
//     );
// }

// const StyledWrapper = styled.div`
//   .card {
//     --card-bg: #ffffff;
//     --card-accent: #7c3aed;
//     --card-text: #1e293b;
//     --card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);

//     width: 200px;
//     height: 254px;
//     background: var(--card-bg);
//     border-radius: 20px;
//     position: relative;
//     overflow: hidden;
//     transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
//     box-shadow: var(--card-shadow);
//     border: 1px solid rgba(255, 255, 255, 0.2);
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
//       Ubuntu, Cantarell, sans-serif;
//   }

//   .card__shine {
//     position: absolute;
//     inset: 0;
//     background: linear-gradient(
//       120deg,
//       rgba(255, 255, 255, 0) 40%,
//       rgba(255, 255, 255, 0.8) 50%,
//       rgba(255, 255, 255, 0) 60%
//     );
//     opacity: 0;
//     transition: opacity 0.3s ease;
//   }

//   .card__glow {
//     position: absolute;
//     inset: -10px;
//     background: radial-gradient(
//       circle at 50% 0%,
//       rgba(124, 58, 237, 0.3) 0%,
//       rgba(124, 58, 237, 0) 70%
//     );
//     opacity: 0;
//     transition: opacity 0.5s ease;
//   }

//   .card__content {
//     padding: 1.25em;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     gap: 0.75em;
//     position: relative;
//     z-index: 2;
//   }

//   .card__badge {
//     position: absolute;
//     top: 12px;
//     right: 12px;
//     background: #10b981;
//     color: white;
//     padding: 0.25em 0.5em;
//     border-radius: 999px;
//     font-size: 0.7em;
//     font-weight: 600;
//     transform: scale(0.8);
//     opacity: 0;
//     transition: all 0.4s ease 0.1s;
//   }

//   .card__image {
//     width: 100%;
//     height: 100px;
//     background: linear-gradient(45deg, #a78bfa, #8b5cf6);
//     border-radius: 12px;
//     transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
//     position: relative;
//     overflow: hidden;
//   }

//   .card__image::after {
//     content: "";
//     position: absolute;
//     inset: 0;
//     background: radial-gradient(
//         circle at 30% 30%,
//         rgba(255, 255, 255, 0.1) 0%,
//         transparent 30%
//       ),
//       repeating-linear-gradient(
//         45deg,
//         rgba(139, 92, 246, 0.1) 0px,
//         rgba(139, 92, 246, 0.1) 2px,
//         transparent 2px,
//         transparent 4px
//       );
//     opacity: 0.5;
//   }

//   .card__text {
//     display: flex;
//     flex-direction: column;
//     gap: 0.25em;
//   }

//   .card__title {
//     color: var(--card-text);
//     font-size: 1.1em;
//     margin: 0;
//     font-weight: 700;
//     transition: all 0.3s ease;
//   }

//   .card__description {
//     color: var(--card-text);
//     font-size: 0.75em;
//     margin: 0;
//     opacity: 0.7;
//     transition: all 0.3s ease;
//   }

//   .card__footer {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-top: auto;
//   }

//   .card__price {
//     color: var(--card-text);
//     font-weight: 700;
//     font-size: 1em;
//     transition: all 0.3s ease;
//   }

//   .card__button {
//     width: 28px;
//     height: 28px;
//     background: var(--card-accent);
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: white;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     transform: scale(0.9);
//   }

//   /* Hover Effects */
//   .card:hover {
//     transform: translateY(-10px);
//     box-shadow:
//       0 20px 25px -5px rgba(0, 0, 0, 0.1),
//       0 10px 10px -5px rgba(0, 0, 0, 0.04);
//     border-color: rgba(124, 58, 237, 0.2);
//   }

//   .card:hover .card__shine {
//     opacity: 1;
//     animation: shine 3s infinite;
//   }

//   .card:hover .card__glow {
//     opacity: 1;
//   }

//   .card:hover .card__badge {
//     transform: scale(1);
//     opacity: 1;
//     z-index: 1;
//   }

//   .card:hover .card__image {
//     transform: translateY(-5px) scale(1.03);
//     box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//   }

//   .card:hover .card__title {
//     color: var(--card-accent);
//     transform: translateX(2px);
//   }

//   .card:hover .card__description {
//     opacity: 1;
//     transform: translateX(2px);
//   }

//   .card:hover .card__price {
//     color: var(--card-accent);
//     transform: translateX(2px);
//   }

//   .card:hover .card__button {
//     transform: scale(1);
//     box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.2);
//   }

//   .card:hover .card__button svg {
//     animation: pulse 1.5s infinite;
//   }

//   /* Active State */
//   .card:active {
//     transform: translateY(-5px) scale(0.98);
//   }

//   /* Animations */
//   @keyframes shine {
//     0% {
//       background-position: -100% 0;
//     }
//     100% {
//       background-position: 200% 0;
//     }
//   }

//   @keyframes pulse {
//     0% {
//       transform: scale(1);
//     }
//     50% {
//       transform: scale(1.2);
//     }
//     100% {
//       transform: scale(1);
//     }
//   }`;

// export default Card;


// import React from 'react';
// import styled from 'styled-components';

// const Card = ({ plant }) => {
//     return (
//         <StyledWrapper>
//             <div className="card">
//                 <div className="img">
//                     <img src="https://images.unsplash.com/photo-1621552330975-f5f9c85dc9c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFkZSUyMHBsYW50fGVufDB8fDB8fHww" alt="" />
//                 </div>

//                 {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" /></svg> */}
//                 <div className="card__content">
//                     <p className="card__title">{plant.name}</p>
//                     <p className="card__description">{plant.categories.join(", ")}</p>
//                     <div className="card__price">Rs. {plant.price}</div>
//                 </div>

//             </div>
//         </StyledWrapper>
//     );
// }

// const StyledWrapper = styled.div`
//   .card {
//     position: relative;
//     width: 280px;
//     height: 200px;
//     background-color: #f2f2f2;
//     border-radius: 10px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     overflow: hidden;
//     perspective: 1000px;
//     box-shadow: 0 0 0 5px #ffffff80;
//     transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   }

//   .card svg {
//     width: 48px;
//     fill: #333;
//     transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   }

//   .card:hover {
//     transform: scale(1.05);
//     box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
//   }

//   .card__content {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     padding: 20px;
//     box-sizing: border-box;
//     background-color: #f2f2f2;
//     transform: rotateX(-90deg);
//     transform-origin: bottom;
//     transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   }

//   .card:hover .card__content {
//     transform: rotateX(0deg);
//   }

//   .card__title {
//     margin: 0;
//     font-size: 24px;
//     color: #333;
//     font-weight: 700;
//   }

//   .card:hover svg {
//     scale: 0;
//   }

//   .card__description {
//     margin: 10px 0 0;
//     font-size: 14px;
//     color: #777;
//     line-height: 1.4;
//   }`;

// export default Card;


import React from 'react';
import styled from 'styled-components';

const Card = ({ plant }) => {
  console.log(plant);

  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__shine" />
        <div className="card__glow" />
        <div className="card__content">
          {/* <div className="card__badge">NEW</div> */}

          {/* <div style={{ bgColor: '#a78bfa' }} className="card__image object-contain">
            <img className='object-contain' src={plant.imageUrl} alt="" />
          </div> */}
          <div className="card__image flex items-center justify-center h-48 w-full rounded-lg overflow-hidden">
            <img
              className="object-cover h-full w-full"
              src={plant.imageUrl}
              alt={plant.name}
            />
          </div>


          <div className="card__text">
            <p className="card__title">{plant.name}</p>
            <p className="card__description">{plant.categories.join(", ")}</p>
          </div>
          <div className="card__footer">
            <div className="card__price">Rs. {plant.price}</div>
            <div className="card__button">
              <p className={` font-semibold ${plant.available ? "text-green-600" : "text-red-600"}`}>
                {plant.available ? "Available" : "Out of Stock"}
              </p>

              {/* <svg height={16} width={16} viewBox="0 0 24 24">
                                <path strokeWidth={2} stroke="currentColor" d="M4 12H20M12 4V20" fill="currentColor" />
                            </svg> */}
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    --card-bg: #ffffff;
    --card-accent: #7c3aed;
    --card-text: #1e293b;
    --card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);

    width: 280px;
    height: 254px;
    background: var(--card-bg);
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: var(--card-shadow);
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, sans-serif;
  }

  .card__shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0) 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .card__glow {
    position: absolute;
    inset: -10px;
    background: radial-gradient(
      circle at 50% 0%,
      rgba(124, 58, 237, 0.3) 0%,
      rgba(124, 58, 237, 0) 70%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .card__content {
    padding: 1.25em;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75em;
    position: relative;
    z-index: 2;
  }

  .card__badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: #10b981;
    color: white;
    padding: 0.25em 0.5em;
    border-radius: 999px;
    font-size: 0.7em;
    font-weight: 600;
    transform: scale(0.8);
    opacity: 0;
    transition: all 0.4s ease 0.1s;
  }

  .card__image {
    width: 100%;
    height: 100px;
    background: linear-gradient(45deg, #a78bfa, #8b5cf6);
    border-radius: 12px;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .card__image::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at 30% 30%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 30%
      ),
      repeating-linear-gradient(
        45deg,
        rgba(139, 92, 246, 0.1) 0px,
        rgba(139, 92, 246, 0.1) 2px,
        transparent 2px,
        transparent 4px
      );
    opacity: 0.5;
  }

  .card__text {
    display: flex;
    flex-direction: column;
    gap: 0.25em;
  }

  .card__title {
    color: var(--card-text);
    font-size: 1.1em;
    margin: 0;
    font-weight: 700;
    transition: all 0.3s ease;
  }

  .card__description {
    color: var(--card-text);
    font-size: 0.75em;
    margin: 0;
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  .card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }

  .card__price {
    color: var(--card-text);
    font-weight: 700;
    font-size: 1em;
    transition: all 0.3s ease;
  }

  .card__button {
    ${'' /* width: 28px; */}
    ${'' /* width:50px; */}
    height: 28px;
    ${'' /* background: var(--card-accent); */}
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    ${'' /* cursor: pointer; */}
    transition: all 0.3s ease;
    transform: scale(0.9);
    padding:5px;
  }

  /* Hover Effects */
  .card:hover {
    transform: translateY(-10px);
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: rgba(124, 58, 237, 0.2);
  }

  .card:hover .card__shine {
    opacity: 1;
    animation: shine 3s infinite;
  }

  .card:hover .card__glow {
    opacity: 1;
  }

  .card:hover .card__badge {
    transform: scale(1);
    opacity: 1;
    z-index: 1;
  }

  .card:hover .card__image {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  .card:hover .card__title {
    color: var(--card-accent);
    transform: translateX(2px);
  }

  .card:hover .card__description {
    opacity: 1;
    transform: translateX(2px);
  }

  .card:hover .card__price {
    color: var(--card-accent);
    transform: translateX(2px);
  }

  .card:hover .card__button {
    transform: scale(1);
    ${'' /* box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.2); */}
  
  }

  .card:hover .card__button svg {
    animation: pulse 1.5s infinite;
  }

  /* Active State */
  .card:active {
    transform: translateY(-5px) scale(0.98);
  }

  /* Animations */
  @keyframes shine {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }`;

export default Card;
