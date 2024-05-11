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
          return (
            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe my-4">
              <img
                src={item.url} // Changed this line
                className="img img-responsive"
                height="300px"
                width="300px"
              />
            </div>
          );
        })}
        </div>
    </div>
  );
};

export default Gallery;
