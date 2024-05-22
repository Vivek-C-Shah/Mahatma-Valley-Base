import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesRes = await axios.get('https://mern-gallery-backend.vercel.app/api/v1/get/categories');
      setCategories(categoriesRes.data);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      let url = 'https://mern-gallery-backend.vercel.app/api/v1/get/images';
      if (selectedCategory) {
        url = `https://mern-gallery-backend.vercel.app/api/v1/get/singleimage?category=${selectedCategory}`;
      }
      const imagesRes = await axios.get(url);
      setImages(imagesRes.data);
    };

    fetchImages();
  }, [selectedCategory]);

  const handleCategories = (categoryId) => {
    setSelectedCategory(categoryId);
  };
  function convertDriveUrl(url) {
    if (!url || !url.includes('/file/d/')) {
      // Return a default value or handle the error appropriately
      console.error('Invalid or undefined URL provided:', url);
      return url; // Return an empty string or a placeholder URL
    }
    const fileId = url.split('/d/')[1].split('/')[0]; // Extract the file ID from the URL
    const durl = `https://drive.google.com/uc?export=view&id=${fileId}`; // Generate the new URL
    console.log('Converted URL:', durl);
    return durl;
  }

  return (
    <div className="container my-3">
      
        <div align="center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`btn filter-button border mx-2 ${selectedCategory === null ? 'btn-primary' : 'btn-default'}`}
            data-filter="all"
          >
            All
          </button>

          {categories && categories.map((item) => {
            return (
              <button
                onClick={() => handleCategories(item._id)}
                className={`btn filter-button border mx-2 ${selectedCategory === item._id ? 'btn-primary' : 'btn-default'}`}
                data-filter="hdpe"
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <br />
        <div className="row">
  {images && images.map((item) => {
    let durl;
    if (item.url.includes('/d/')) {durl = convertDriveUrl(item.url);}
    else {durl = item.url;}
      return (
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe my-4">
          <iframe
            src={item.url} // Use the converted URL
            className="img img-responsive"
            height="300px"
            width="300px"
            frameBorder="0" scrolling="no"
          ></iframe>
        </div>
      );
  })}
</div>
    </div>
  );
};

export default Gallery;
