(function() {
    // Create the container for the slider
    const sliderDiv = document.createElement('div');
    sliderDiv.className = 'slider-div';
  
    // Array of items to be added to the slider
    const items = [
      {
        imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/best-sellers.png',
        alt: 'Best Sellers',
        text: 'Best Sellers'
      },
      {
        imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/new.png',
        alt: 'New',
        text: 'New'
      },
      {
        imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/necklaces.png',
        alt: 'Necklaces',
        text: 'Necklaces'
      },
      {
        imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/rings.png',
        alt: 'Rings',
        text: 'Rings'
      },
      {
        imgSrc: './images/Necklace.png',
        alt: 'Earrings',
        text: 'Earrings'
      },
      {
        imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/bracelets.png',
        alt: 'Bracelets',
        text: 'Bracelets'
      },
      {
        imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/personalized.png',
        alt: 'Personalized',
        text: 'Personalized'
      },
      {
        imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/fine.png',
        alt: 'Fine',
        text: 'Fine'
      },
      {
        imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/clearance.png',
        alt: 'Clearance',
        text: 'Clearance'
      }
    ];
  
    // Loop through the items and create the structure for each one
    items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'item';
  
      const imgDiv = document.createElement('div');
      imgDiv.className = 'img-div';
  
      const img = document.createElement('img');
      img.src = item.imgSrc;
      img.alt = item.alt;
  
      const text = document.createElement('p');
      text.textContent = item.text;
  
      imgDiv.appendChild(img);
      itemDiv.appendChild(imgDiv);
      itemDiv.appendChild(text);
      sliderDiv.appendChild(itemDiv);
    });
  
    // Add the slider-div to the document, above the hero banner
    const heroBanner = document.querySelector('.hero-banner');
    heroBanner.parentNode.insertBefore(sliderDiv, heroBanner);
  
    // Add the styles to the head of the document
    const style = document.createElement('style');
    style.innerHTML = `
      .slider-div {
        display: flex;
        align-items: center;
        overflow: scroll;
        width: 100%;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .slider-div .item {
        width: 100%;
        max-width: 86px;
        height: 110px;
        margin: 20px 10px;
      }
      .slider-div .img-div {
        width: 86px;
        height: 86px;
        border-radius: 100%;
        background-color: #9595952a;
      }
      .slider-div .img-div img {
        width: 100%;
        object-fit: contain;
      }
      .slider-div p {
        color: rgba(70, 72, 70, 1);
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        text-align: center;
        margin-top: 4px;
      }
    `;
    document.head.appendChild(style);
  })();
  
